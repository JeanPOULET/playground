import type { StorybookConfig } from '@storybook/angular';
// import {AddonOptionsWebpack} from '@storybook/addon-coverage';
import type { AddonOptionsVite } from '@storybook/addon-coverage';

const coverageConfig: AddonOptionsVite = {
  istanbul: {
    include: ['**/stories/**']
  },
};

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-coverage",
      options: coverageConfig
    },

  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;
