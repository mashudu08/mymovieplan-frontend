import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { HomeComponent } from './home/home/home.component';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { CartComponent } from './cart/cart/cart.component';
import { MovieComponent } from './movie/movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'bookings', component: BookingListComponent, pathMatch: 'full'},
  { path: 'admin-portal', component: AdminPortalComponent, pathMatch: 'full'},
  { path: 'cart', component:  CartComponent, pathMatch: 'full'},
  { path: 'movie', component:  MovieComponent, pathMatch: 'full'},
   {path: 'movie-details', component:  MovieDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
