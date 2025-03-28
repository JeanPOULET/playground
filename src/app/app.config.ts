import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {definePreset, useTheme} from '@primeng/themes';
import {MyPreset} from './prime-theme';
import Material from '@primeng/themes/material';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(MatNativeDateModule),
    providePrimeNG({
      theme: {
        preset: Nora,
        options: {
        darkModeSelector: '.my-app-dark'
        }

      }
    }),

  ]
};
