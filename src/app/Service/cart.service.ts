import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable(); // We use this to expose the observable for subscription

  addToCart(product: CartItem) {
    const items = this.cartItems.getValue();
    const itemIndex = items.findIndex((item) => item.id === product.id);

    if (itemIndex > -1) {
      // If the item already exists, increase the quantity
      items[itemIndex].quantity += 1;
    } else {
      // If the item is new, add it to the cart
      items.push({ ...product, quantity: 1 });
    }

    this.cartItems.next(items);
  }

  getCartItems() {
    return this.cartItems$; // Return the observable directly, no need for asObservable
  }

  removeFromCart(productId: number) {
    const items = this.cartItems.getValue().filter((item) => item.id !== productId);
    this.cartItems.next(items);
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
