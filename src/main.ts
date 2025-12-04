import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { authInterceptor } from './app/auth/auth.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  ...appConfig,                 
  providers: [
    ...(appConfig.providers || []),  
    provideHttpClient(withInterceptors([authInterceptor])), provideAnimationsAsync()               
  ]
}).catch(err => console.error(err));
