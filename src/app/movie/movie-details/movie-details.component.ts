import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie: any = {}; // Object to hold movie details

  constructor(private route: ActivatedRoute, private movieService: MovieService, private cartService: CartService) { }

  ngOnInit(): void {
    // Get movie id from route parameters
    const movieId = this.route.snapshot.paramMap.get('id');
    // Fetch movie details based on movieId
    this.getMovieDetails(movieId);
  }

  // Method to fetch movie details from the backend
  getMovieDetails(movieId: any): void {
    this.movieService.getMovieById(movieId).subscribe(
      (data: any) => {
        this.movie = data;
      },
      (error: any) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }

  addToCart(): void {
  this.cartService.addItemToCart(this.movie).subscribe(
    (response: any) => {
      console.log('Movie added to cart:', this.movie);
      // Optionally, you can navigate to the cart page or display a success message here
    },
    (error: any) => {
      console.error('Error adding movie to cart:', error);
      // Handle error scenarios (e.g., display an error message)
    }
  );
  }
}
