import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pic } from 'src/app/shared/models/pic';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private picsUrl = 'api/pics';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getPics(): Observable<Pic[]> {
    return this.http.get<Pic[]>(this.picsUrl);
  }

  addPic(pic: Pic): Observable<Pic> {
    return this.http.post<Pic>(this.picsUrl, pic, this.httpOptions);
  }

  deletePic(pic: Pic): Observable<Pic> {
    const id = pic.id;
    const url =  `${this.picsUrl}/${id}`;
    return this.http.delete<Pic>(url, this.httpOptions);
  }
}
