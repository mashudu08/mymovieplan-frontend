import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    BookingListComponent,
    HomeComponent,
    CartComponent,
    GenreComponent,
    MovieComponent,
    AdminPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [HttpClient, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
