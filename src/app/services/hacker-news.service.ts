import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }

  // Recupera gli ID delle ultime news
  getLatestNewsIDs(): Observable<number[]> {
    const url = `${this.baseUrl}/newstories.json`;
    return this.http.get<number[]>(url);
  }

  // Recupera i dettagli di una singola news
  getNewsDetail(id: number): Observable<any> {
    const url = `${this.baseUrl}/item/${id}.json`;
    return this.http.get<any>(url);
  }
}
