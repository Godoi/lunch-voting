import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser, ILogin } from 'src/app/shared/models/user.model';
import { map, retry, catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {
  private api = 'http://localhost:4200/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    const url = `${this.api}/users`;
    return this.httpClient.get<IUser>(url).pipe(
      retry(2),
      catchError(err => this.handleError(err, 'getAllRestaurants')),
    );
  }

  login(email: string): Observable<any> {
    const url = `${this.api}/users/login`;
    return this.httpClient.post<any>(url, JSON.stringify(email), this.httpOptions).pipe(
      retry(2),
      catchError(err => this.handleError(err, 'login')),
    );
  }

  handleError(error: HttpErrorResponse, methodName: string): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Method name: ${methodName}, Error code: ${error.status}, menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}