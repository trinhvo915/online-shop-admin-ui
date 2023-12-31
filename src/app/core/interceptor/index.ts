import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './authentication.interceptor';

export const interceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
];
