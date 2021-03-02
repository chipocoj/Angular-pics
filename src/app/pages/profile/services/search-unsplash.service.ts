import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { Pic } from '../../../shared/models/pic';
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
    this.http.get<Pic[]>(this.queryUrl, { headers: HEADERS, params: { 'query': searchTerm, 'per_page': '9' }})
      .pipe(
        pluck('results'),
        map( (res:any) => res.map(pic => ({ id: `${pic.id}`, alt: `${pic.alt_description}`, url: `${pic.urls.regular}`, author: `${pic.user.name}`, tags: pic.tags }) as Pic) ),
        catchError(this.handleError)
      )
      .subscribe( (data:Pic[]) => {
        if (data && this.getPicSource) {
          console.log(data);
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
