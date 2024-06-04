import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'https://my-json-server.typicode.com/upc-pre-202401-si729-sv54-sportease/sportEase-managment/administrator';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(item => item.transaction).flat())
    );
  }
}

