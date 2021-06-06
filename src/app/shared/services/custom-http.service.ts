import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private http: HttpClient) { }
  get(url: string): Observable<any> {
    return <Observable<any>> this.http.get(url);
  }
}
