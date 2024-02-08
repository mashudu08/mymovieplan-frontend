import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit {

  private baseUrl = ""

  constructor(private bookingService: BookingService, private http: HttpClient) { }
 
  bookings: any[] = [];
  
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
 
  // fetchBookings(bookings: number) {
  //   this.http.get<any[]>('/api/bookings').subscribe(
  //     data => {
  //       this.bookings = data;
  //     },
  //     error => {
  //       console.error('Error fetching booking data:', error);
  //     }
  //   );
  // }
}
