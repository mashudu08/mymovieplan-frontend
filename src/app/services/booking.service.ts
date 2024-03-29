import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = "http://localhost:9090";

  constructor(private http : HttpClient) { }

    getBooking(id : number): Observable<any>{
      return this.http.get(`${this.baseUrl}/bookings/booking/${id}`);
    }

    getAllBookings(): Observable<any>{
      return this.http.get(`${this.baseUrl}/bookings/get-bookings`);
    }

    addBooking(booking: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/bookings/add-booking`, booking);
    }
  
    updateBooking(booking: any): Observable<any> {
      return this.http.put<any>('http://your-api-endpoint.com/bookings/update-booking', booking);
    }
  
    deleteBooking(id: number): Observable<any> {
      return this.http.delete<any>(`http://your-api-endpoint.com/bookings/booking/${id}`);
    }
}
