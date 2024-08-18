import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  private apiUrl = 'http://localhost:8080/api/greet';

  constructor(private http: HttpClient) { }

  greetUser(name: string): Observable<string> {
    const params = new HttpParams().set('name', name);
    return this.http.post(this.apiUrl, null, { params, responseType: 'text' });
  }
}
