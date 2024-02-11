import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: any[] = []; // Array to hold cart items
  total: number = 0; // Total amount of items in the cart

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    // Fetch cart items from the backend when the component initializes
    this.getCartItems();
  }

  // Method to fetch cart items from the backend
  getCartItems(): void {
    this.cartService.getCartItems().subscribe(
      (data: any[]) => {
        this.cartItems = data;
        // Calculate total amount
        this.total = this.cartService.calculateTotal(this.cartItems);
      },
      (error: any) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  // Method to remove item from cart
  removeItem(index: number): void {
    const itemId = this.cartItems[index].id; // Assuming each item has an id
    this.cartService.removeItemFromCart(itemId).subscribe(
      () => {
        // Remove item from cartItems array
        this.cartItems.splice(index, 1);
        // Recalculate total amount
        this.total = this.cartService.calculateTotal(this.cartItems);
      },
      (error: any) => {
        console.error('Error removing item from cart:', error);
      }
    );
  }

  // Method to navigate to checkout page (sample method, replace with actual implementation)
  goToCheckout(): void {
     this.router.navigate(['/checkout']);
  }
}
