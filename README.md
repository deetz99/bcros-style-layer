# Nuxt3 BCROS Styling & Fonts Layer - Edited

This layer was created to simplify the DX when creating BCROS applications.
The BC Gov color theme, BCSans font and BC favicon are configured using tailwindcss.

Please see the tailwind.config.ts file for specifics.

Also included are several common npm packages and nuxt modules. Please see the package.json and nuxt.config.ts for specifics.

Also included are some presets for nuxt/ui components in app.config.ts, such as primary/secondary color, button/input variants etc. Please see file for specifics.

## Setup for Local Dev

Make sure to install the dependencies:

```bash
pnpm install
```

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Distributing Layer

The Nuxt layer is shaped exactly the same as any other Nuxt project, except you can publish it on NPM.

To do so, you only have to check if the `package.json` is valid:

- main must be set to `"main": "./nuxt.config.ts"`
- any dependencies you want included in the layer must be installed in dependencies, NOT devDependencies
- make sure to update package version

Then run:

```bash
npm publish --access public
```

It is not necessary to run `pnpm run build` to successfully publish a layer.

## Using Layer

To install layer:

```bash
pnpm i -D @dwol/layer-test1
```

Then add the dependency to the `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: "@dwol/layer-test1",
});
```

## License

Copyright © 2024 Province of British Columbia

Licensed under the BSD 3 Clause License, (the "License");
you may not use this file except in compliance with the License.
The template for the license can be found here
https://opensource.org/license/bsd-3-clause/

Redistribution and use in source and binary forms,
with or without modification, are permitted provided that the
following conditions are met:

1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS”
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
