// checkout.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../Service/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  shippingCost = 5;
  taxRate = 0.08;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Retrieve the cart items from CartService
    this.cartItems = this.cartService.getCartItems();
  }

  get subtotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  get tax() {
    return this.subtotal * this.taxRate;
  }

  get total() {
    return this.subtotal + this.tax + this.shippingCost;
  }

  completeOrder() {
    alert('Order Completed!');
    console.log('Order Completed!')
    this.cartService.clearCart(); // Clear cart after order completion
  }
}
