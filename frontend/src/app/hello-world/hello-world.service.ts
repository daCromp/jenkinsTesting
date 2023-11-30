import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  private api_url = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string> {
    return this.http.get(this.api_url + '/hello', { responseType: 'text' });
  }
}

