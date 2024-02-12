import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { HomeComponent } from './home/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from './services/booking.service';
import { CartComponent } from './cart/cart/cart.component';
import { GenreComponent } from './genre/genre/genre.component';
import { MovieComponent } from './movie/movie/movie.component';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingListComponent,
    HomeComponent,
    CartComponent,
    GenreComponent,
    MovieComponent,
    AdminPortalComponent,
    CheckoutComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
