import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';
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

  search(searchTerm: string) : void {
    this.http.get<Pic[]>(this.queryUrl, { headers: HEADERS, params: { 'query': searchTerm, 'per_page': '20' }})
      .pipe(pluck('results'), catchError(this.handleError))
      .subscribe( (data: Pic[]) => {
        if (data && this.getPicSource) {
          this.getPicSource.next(data);
        }
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
