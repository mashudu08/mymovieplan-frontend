import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [

  {  
    path: '', component: HomeComponent,
  },
  {  
    path: 'bookings', component: BookingListComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
