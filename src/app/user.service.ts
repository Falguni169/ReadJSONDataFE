import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class UserService {
    constructor(private _http: HttpService) { }

    getUserList(): Observable<any> {
        return this._http.getMethod('users');
    }
}