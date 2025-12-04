import {
  HttpClient,
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { CanActivateFn, Router } from '@angular/router';

import { UserModel } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // user = new BehaviorSubject<UserModel | null>(null);
  user = signal<UserModel | null>(null);
  private tokenExpirationTimer: any;

  private http = inject(HttpClient);
  private route = inject(Router);

  signup(userEmail: string, userPassword: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC35fP9S1feBc8PAScRH_MrQD4If3wI84g',
        {
          email: userEmail,
          password: userPassword,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandling),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(userEmail: string, userPassword: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC35fP9S1feBc8PAScRH_MrQD4If3wI84g',
        {
          email: userEmail,
          password: userPassword,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandling),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      return;
    }
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(userDataString);

    const loadedUser = new UserModel(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.set(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.set(null);
    this.route.navigate(['/auth']);
    localStorage.removeItem('userData');
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const userDetail = new UserModel(email, userId, token, expirationDate);
    this.user.set(userDetail);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(userDetail));
  }

  private errorHandling(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unexpected error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    } else {
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email-id already exists';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email-id is in-correct/Not registered';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'The entered password is in-correct';
          break;
        case 'INVALID_EMAIL':
          errorMessage = 'The entered email is invalid/incorrect';
          break;
        case 'USER_DISABLED':
          errorMessage =
            'The user account has been disabled by an administrator';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = 'Email or password is incorrect/Not registered';
          break;
        default:
          errorMessage = errorRes.error.error.message;
          break;
      }
      return throwError(() => new Error(errorMessage));
    }
  }
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const user = authService.user(); //read the current value of the signal
  if (!user) {
    return next(req);
  }
  const modifiedReq = req.clone({
    params: new HttpParams().set('auth', user.token!),
  });

  return next(modifiedReq);
};

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.user(); //read the current value of the signal
  const isAuth = !user ? false : true;
  if (isAuth) {
    return true;
  }
  return router.createUrlTree(['/landingpage']);
};

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const authService = inject(AuthService);
//   return authService.user.pipe(take(1),
//   exhaustMap(userData => {
//     const token = userData?.token;
//     if (!token) {
//     return next(req);
//     }
//     const modifiedReq = req.clone({
//       params: new HttpParams().set('auth', token)
//     });
//   return next(modifiedReq);
//   })
//   )
// }

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   return authService.user.pipe(take(1),
//   map(user => {
//     const isAuth = !user ? false : true
//     if (isAuth) {
//       return true;
//     }
//     return router.createUrlTree(['/auth']);
//   })
// )
// }
