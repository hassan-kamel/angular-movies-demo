import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequestBody } from './auth-request-body';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = 'https://ecommerce.routemisr.com/';

  constructor(private _httpClint: HttpClient) {}

  signUp(requestBody: AuthRequestBody): Observable<any> {
    return this._httpClint.post(
      `${this.baseURL}api/v1/auth/signup`,
      requestBody
    );
  }
}
