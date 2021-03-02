import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Pic } from '../models/pic';
import { HEADERS } from './unsplash-api/headers';

@Injectable({
  providedIn: 'root'
})
export class SearchUnsplashService {
  private queryUrl: string = 'https://api.unsplash.com/search/photos';

  private getPicSource = new BehaviorSubject<Pic[]>([]);
  public getPicsChanged$ = this.getPicSource.asObservable();

  constructor(private http: HttpClient) { }

  search(searchTerm: string) {
    this.http.get<Pic[]>(this.queryUrl, {
      headers: HEADERS,
      params: {
        'query': searchTerm,
        'per_page': '20'
      }
    }).subscribe(data => {
          if (data && this.getPicSource) {
            this.getPicSource.next(data);
          }
        },
        error => console.log(error)
      );
  }
}
