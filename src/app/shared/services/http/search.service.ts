import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export abstract class SearchService {
    readonly _http: HttpClient;
    constructor(http:HttpClient) {
        this._http = http;
    }

    abstract search<T>(searchTerm: string): Observable<HttpResponse<T>>;
}
