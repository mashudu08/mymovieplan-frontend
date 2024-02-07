import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit {

  constructor(private bookingService: BookingService) { }
 
  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.getAllBookings().subscribe(bookings => {
      // Handle the response from the backend
      console.log("hello");
      console.log(bookings);
    });
  }

}

