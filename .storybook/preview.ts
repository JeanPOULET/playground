import {applicationConfig, Preview} from '@storybook/angular'
import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {PrimeNG, providePrimeNG} from 'primeng/config';
import Nora from '@primeng/themes/nora';
import {APP_INITIALIZER} from '@angular/core';

setCompodocJson(docJson);

function provideTheme(config: PrimeNG) {
  return () => {
    config.theme.set({
      preset: Nora,
      options: {
        darkModeSelector: '.my-app-dark'
      }
    });
  };
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: provideTheme,
          deps: [PrimeNG],
          multi: true,
        },
      ]
    })
  ]
};

export default preview;
