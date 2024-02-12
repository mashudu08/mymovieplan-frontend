import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.css'
})
export class AdminPortalComponent implements OnInit {
  movies: any[] = []; // Array to store fetched movies
  newMovie: any = { name: '', price: '', language: '', description: '', time: '' };

  constructor(private movieService: MovieService) { } // Inject the movie service

  ngOnInit(): void {
    // Call a method in your service to fetch movies from the backend
    this.movieService.getAllMovies().subscribe(
      (data: any[]) => {
        this.movies = data; // Assign the fetched movies to the component property
      },
      error => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  addMovie(): void {
    this.movieService.addMovie(this.newMovie).subscribe(
      () => {
        // Clear the newMovie object and fetch movies again to refresh the data
        this.newMovie = { name: '', price: '', genre: '', language: '', description: '', time: '' , image: ''};
        this.movieService.getAllMovies();
        // Show success notification
        // this.toastr.success('Movie added successfully', 'Success');
      },
      error => {
        console.error('Error adding movie:', error);
        // this.toastr.error('Error adding movie', 'Error');
      }
    );
  }

  updateMovie(movie: any): void {
    // Call a method in your service to update the movie
    this.movieService.updateMovie(movie).subscribe(
      response => {
        // If update is successful, fetch movies again to refresh the data
        this.movieService.getAllMovies();
      },
      error => {
        console.error('Error updating movie:', error);
      }
    );
  }

  // deleteMovie(id: number): void {
  //   // Call a method in your service to delete a movie by ID
  //   this.movieService.deleteMovie(id).subscribe(
  //     response => {
  //       // If deletion is successful, remove the movie from the local array
  //       this.movies = this.movies.filter(movie => movie.id !== id);
  //     },
  //     error => {
  //       console.error('Error updating movie:', error);
  //     }
  //   );
  // }

}
