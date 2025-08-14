import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private apiUrl = '/api/expenses';

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
