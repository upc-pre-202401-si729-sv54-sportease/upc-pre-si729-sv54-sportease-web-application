import { Injectable } from '@angular/core';
import {catchError, retry, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`
  resourceEndpoint: string = '/resources';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  private resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  getStudentsByCategory(yearCategory: number) {
    return this.http.get<T[]>(`${this.resourcePath()}?category=${yearCategory}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
