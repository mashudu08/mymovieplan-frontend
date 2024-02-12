import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = "http://localhost:9090";

  constructor(private http: HttpClient) { }

  addMovie(movie: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/movies/add-movies`, movie);
  }

  getMovieById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/movies/movie/${id}`);
  }

  getAllMovies(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/movies/get-movies`);
  }

  updateMovie(movie: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/movies/update-movie`, movie);
  }

  // deleteMovie(id: number): Observable<any> {
  //   return this.http.delete<any>(`http://your-api-endpoint.com/movies/movie/${id}`);
  // }

}
