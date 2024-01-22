import type { Config } from "tailwindcss";
import theme from './assets/tw-theme.js'

export default <Partial<Config>>{
  presets: [ theme ]
};
