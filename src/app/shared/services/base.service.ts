import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoints: string[] = ['/sportEase-student/student', '/sportEase-managment/administrator'];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) {}

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

  private resourcePath(index: number): string {
    return `${this.basePath}${this.resourceEndpoints[index]}`;
  }

  create(item: any, index: number){
    return this.http.post<T>(this.resourcePath(index), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: any, index: number){
    return this.http.delete<T>(`${this.resourcePath(index)}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: any, item: any, index: number){
    return this.http.put<T>(`${this.resourcePath(index)}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAdministratorById(id: any, index: number){
    return this.http.get<T>(`${this.resourcePath(index)}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getStudentById(id: any, index: number){
    return this.http.get<T>(`${this.resourcePath(index)}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));

  }

  getAll(index: number){
    return this.http.get<T[]>(this.resourcePath(index), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
