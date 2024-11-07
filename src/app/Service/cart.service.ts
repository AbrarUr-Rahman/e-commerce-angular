// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root', 
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: CartItem): void {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      currentItems.push(product);
    }

    this.cartItemsSubject.next([...currentItems]); // Ensure the array is updated
    console.log("Updated Cart Items:", this.cartItemsSubject.value); // Debug log to confirm updates
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItemsSubject.value.filter(
      (item) => item.id !== productId
    );
    this.cartItemsSubject.next(currentItems); // Update observable with the new array
  }

  //Optional: Method to clear the cart for testing
  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
  getCartItems(): CartItem[] {

    console.log('Get Items: ',this.cartItemsSubject.value);
    return this.cartItemsSubject.value;
  }
}
