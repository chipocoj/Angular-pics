import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pic } from 'src/app/shared/models/pic';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private picsUrl = 'api/pics';
  constructor(private http: HttpClient) { }

  getPics(): Observable<Pic[]> {
    return this.http.get<Pic[]>(this.picsUrl);
  }
}
