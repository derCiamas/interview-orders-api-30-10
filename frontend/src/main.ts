import 'zone.js';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { OrderComponent } from './order.component';

bootstrapApplication(OrderComponent, {
  providers: [provideHttpClient()],
}).catch(error => console.error('Application startup failed', error));
