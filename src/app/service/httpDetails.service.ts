import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpDetailsService {

    constructor(private http: HttpClient) { }

    getUserDetails(id) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
    }
}
