import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  movies: any[] = [];
  constructor(private movieService: MovieService, private http: HttpClient) { }
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data) => {
      console.log('Movie: ', data);
      this.movies = data;
    })
  } 
}
