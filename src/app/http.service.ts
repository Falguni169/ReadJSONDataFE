import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    constructor(private _http:HttpClient) { }

    getMethod(endPoint) : Observable<any> {
        let url = 'http://localhost:3001/' + endPoint;
        return this._http.get(url);
    }
    
}