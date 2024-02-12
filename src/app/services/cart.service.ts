import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  // Method to fetch cart items from the backend
  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/cart/items`);
  }

  // Method to add item to the cart
  addItemToCart(item: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/cart/add`, item);
  }

  // Method to remove item from the cart
  removeItemFromCart(itemId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/api/cart/remove/${itemId}`);
  }

  // Method to calculate total amount of items in the cart
  calculateTotal(cartItems: any[]): number {
    return cartItems.reduce((acc, curr) => acc + curr.price, 0);
  }
}
