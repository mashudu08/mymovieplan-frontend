import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieplanService {

  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }
  //   getQuestions(): Observable<any[]> {
  //     const route = `${this.serverUrl}/backendQuizzes`
  //     var result = this.http.get<any[]>(route);
  //     return result;
  // }
}
