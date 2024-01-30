import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { ToastService } from '../services/toast.service';
import { EInterceptorMessage } from '../enums/interceptor-message.enum';
import { IErrorResponseData, IResponseData } from '../models/response-data.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastService: ToastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.authService.accessToken;
    if (accessToken) {
      request = request.clone({
        headers: request.headers
          .append('Authorization', 'Bearer ' + accessToken)
          .append('Access-Control-Allow-Origin', '*'),
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // this.authService.logout();
          return throwError(error);
        }
        if (error.status === 404) {
          this.router.navigate(['404']);
        }
        return this.handleError(request, error);
      })
    );
  }

  private handleError(
    request: HttpRequest<any>,
    error: HttpErrorResponse
  ): Observable<HttpEvent<any>> {
    // Get message error
    if (error?.error?.errors) {
      const listError = this.getListError(error);
      error.error.message =
        error.error.message != null
          ? error.error.message + this.getMessageError(listError)
          : this.getMessageError(listError);
    } else if (error?.error && error.error.messages) {
      error.error['message'] = this.getMessageError(error.error.messages);
    }

    // When the request is of status 403, there is an error => Convert data back to common data
    if (error.status === 403) {
      error = { ...error, error: { message: EInterceptorMessage.Forbidden } };
    }

    // When the request is of status 404, there is an error => Convert data back to common data
    if (error.status === 404) {
      error = { ...error, error: { message: EInterceptorMessage.NotFound } };
    }

    // When the request is of type blob, there is an error => Convert data back to common data
    if (request.responseType === 'blob' && error.error instanceof Blob) {
      return from(
        Promise.resolve(error).then(async (x) => {
          const rsError = JSON.parse(await x.error.text());

          const messageError = this.getMessageError(
            rsError.errors.map(
              (error: IErrorResponseData) => error.errorMessage
            )
          );
          if (messageError) {
            this.toastService.showError(messageError);
          }

          throw new HttpErrorResponse({
            error: { ...rsError, message: messageError },
            headers: x.headers,
            status: x.status,
            statusText: x.statusText,
            url: x.url ?? undefined,
          });
        })
      );
    }

    if (
      error.status === 0 ||
      (error.status >= 400 && error.status < 520 && error.message)
    ) {
      this.toastService.showError(error.message);
    }

    return throwError(error);
  }

  private getListError(error: HttpErrorResponse): string[] {
    const responseError: IResponseData<any> = error.error;
    return responseError.errors.map(
      (error: { errorMessage: any }) => error.errorMessage
    );
  }

  private getMessageError(listError: string[]): string {
    return listError.reduce((prevVal: string, currVal: string, idx: number) => {
      if (idx == 0) {
        return currVal;
      } else if (currVal === '' || prevVal === '') {
        return currVal || prevVal;
      } else {
        return prevVal + ', ' + currVal;
      }
    }, '');
  }
}
