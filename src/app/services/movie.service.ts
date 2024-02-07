import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  

  constructor(private http: HttpClient) { }

  addBooking(booking: any): Observable<any> {
    return this.http.post<any>('http://your-api-endpoint.com/bookings/add-booking', booking);
  }

  getAllBookings(): Observable<any> {
    return this.http.get<any>('http://your-api-endpoint.com/bookings/get-bookings');
  }

  getBookingById(id: number): Observable<any> {
    return this.http.get<any>(`http://your-api-endpoint.com/bookings/booking/${id}`);
  }

  updateBooking(booking: any): Observable<any> {
    return this.http.put<any>('http://your-api-endpoint.com/bookings/update-booking', booking);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete<any>(`http://your-api-endpoint.com/bookings/booking/${id}`);
  }

}
