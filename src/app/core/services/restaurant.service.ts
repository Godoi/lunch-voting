import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IRestaurant } from 'src/app/shared/models/restaurant.module';
import { catchError, retry } from 'rxjs/operators';
import { ILogin } from 'src/app/shared/models/user.model';


@Injectable({ providedIn: 'root' })
export class RestaurantService {

  public restaurants: Observable<IRestaurant>;
  private api = 'http://localhost:4200/api';

  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  getAllRestaurants(week:string) {
    const url = `${this.api}/restaurants/${week}`;
    return this.httpClient.get<IRestaurant>(url).pipe(
      retry(2),
      catchError(err => this.handleError(err, 'getAllRestaurants')),
    );
  }

  getWinningRestaurants(week:string){
    const url = `${this.api}/restaurants/winner/${week}`;
    return this.httpClient.get<IRestaurant>(url).pipe(
      retry(2),
      catchError(err => this.handleError(err, 'getWinningRestaurants')),
    );
  }

  saveVote(vote: ILogin): Observable<ILogin> {
    const url = `${this.api}/restaurants/`;
    return this.httpClient.post<ILogin>(url, JSON.stringify(vote), this.httpOptions).pipe(
      retry(2),
      catchError(err => this.handleError(err, 'saveVote')),
    );
  }

  handleError(error: HttpErrorResponse, methodName: string): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Method name: ${methodName}, Error code: ${error.status}, menssagem: ${error.message}`;
    }
    return throwError(error);
  }
}