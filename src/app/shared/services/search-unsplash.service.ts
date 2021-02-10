import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HEADERS } from '../headers/headers';
import { SearchService } from './http/search.service';

@Injectable({
  providedIn: 'root'
})
export class SearchUnsplashService extends SearchService {
  private queryUrl: string = 'https://api.unsplash.com/search/photos';

  constructor(http: HttpClient) {
    super(http);
   }

  search(searchTerm: string): Observable<any> {
    return this._http.get(this.queryUrl, {
      headers: HEADERS,
      params: {
        'query': searchTerm,
        'per_page': '20'
      }
    });
  }
}
