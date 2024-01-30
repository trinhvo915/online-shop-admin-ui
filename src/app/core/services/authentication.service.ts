import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EStorageKey } from '../enums/storage-key.enum';
import { environment } from '../../environments/environment';
import { IUserProfile } from '../models/user.model';
import { ILoginRequest } from '../models/login-request.model';
import { IResponseData } from '../models/response-data.model';
import { ILoginResponse } from '../models/login-response.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private baseUrl = `${environment.DOMAIN}${environment.BASE_API_URL}`;

    constructor(private httpClient: HttpClient) {}

    public get accessToken(): string | null {
        return localStorage.getItem(EStorageKey.AccessToken)
        ? (localStorage.getItem(EStorageKey.AccessToken) as string | null)
        : null;
    }

    public get currentUser(): IUserProfile | null {
        return localStorage.getItem(EStorageKey.CurrentUser)
        ? (JSON.parse(
            localStorage.getItem(EStorageKey.CurrentUser)!
            ) as IUserProfile | null)
        : null;
    }

    public signIn(
        payload: ILoginRequest
    ): Observable<IResponseData<ILoginResponse>> {
        return this.httpClient.post<any>(this.baseUrl + '/sign-in', payload).pipe(
        map((result: IResponseData<ILoginResponse>) => {
            if (result.isSuccess && result.data) {
            localStorage.setItem(
                EStorageKey.AccessToken,
                result.data.accessToken
            );
            }
            return result;
        })
        );
    }
}
