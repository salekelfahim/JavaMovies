import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = 'c34e2531';
  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?s=${query}&apikey=${this.apiKey}`);
  }
}
