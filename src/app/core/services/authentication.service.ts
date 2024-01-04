import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { E_LocalStorage } from '../enums/local-storage';
import { IUserProfile } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private baseUrl = `${environment.DOMAIN}${environment.BASE_API_URL}`;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  public get accessToken(): string | null {
    return localStorage.getItem(E_LocalStorage.AccessToken) ? (localStorage.getItem(E_LocalStorage.AccessToken) as string | null) : null;
  }

  public get currentUser(): IUserProfile | null {
    return localStorage.getItem(E_LocalStorage.CurrentUser)
      ? (JSON.parse(localStorage.getItem(E_LocalStorage.CurrentUser)!) as IUserProfile | null)
      : null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  private setCurrentUser(currentUser: IUserProfile) {
    localStorage.setItem(E_LocalStorage.CurrentUser, JSON.stringify(currentUser));
  }
}
