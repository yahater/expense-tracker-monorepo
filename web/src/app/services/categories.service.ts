import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = '/api/categories';  // Changed this line
  
  constructor(private http: HttpClient) {}
  
  getCategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}