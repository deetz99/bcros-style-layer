#!/usr/bin/env node
import { promisify } from "util";
import cp from "child_process";
import { readFileSync, writeFileSync } from "fs";
import ora from "ora";

// convert libs to promises
const exec = promisify(cp.exec);

// allowed version args
const versionArgs = ["patch", "minor", "major"];

// get version arg from command line
const versionArg = process.argv[2];

// save original package.json contents to overwrite file if error
const originalFile = readFileSync("./package.json", "utf-8");

try {
  // exit and log message if no/incorrect version arg
  if (!versionArgs.includes(versionArg) || process.argv.length < 3) {
    console.log("Could not complete the request.");
    console.log('Must include version arg of "patch", "minor" or "major".');
    console.log("For example :");
    console.log("    node scripts/publish.js patch");
    process.exit(1);
  }

  // update package version using arg from command
  const versionSpinner = ora("Updating package version...").start();
  await exec(`npm version ${versionArg}`);
  versionSpinner.succeed();

  // save file contents to overwrite after publishing completes
  const afterVersionSpinner = ora(
    "Caching package.json with updated version..."
  ).start();
  const afterSuccessFile = readFileSync("./package.json", "utf-8");
  afterVersionSpinner.succeed();

  // remove scripts and devDependencies from package.json (not needed to act as nuxt layer)
  const deleteSpinner = ora(
    "Removing scripts and devDependencies from package.json..."
  ).start();
  await exec(`npm pkg delete scripts`);
  await exec(`npm pkg delete devDependencies`);
  deleteSpinner.succeed();

  // publish package to npm
  const pubSpinner = ora("Publishing package...").start();
  await exec(`npm publish --access public`);
  pubSpinner.succeed();

  // restore package.json contents after successfully publishing
  const postSpinner = ora("Restoring package.json...").start();
  writeFileSync("./package.json", afterSuccessFile);
  postSpinner.succeed();

  // log success message
  console.log("The publishing process is now finished!");
} catch (error) {
  console.log(" ");
  console.log(error);
  console.log(" ");
  console.log("Oops, looks like there was an error while publishing.");
  // cleanup files if theres an error while publishing
  const errorSpinner = ora("Cleaning up files...").start();
  // overwrite package.json with original contents
  writeFileSync("./package.json", originalFile);
  errorSpinner.succeed();
  console.log("Please confirm your directory is unchanged.");
  process.exit(1);
}
