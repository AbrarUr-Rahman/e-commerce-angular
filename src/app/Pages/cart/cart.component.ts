// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Router } from '@angular/router';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// cart.component.ts (CartComponent)
import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../Service/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports:[CommonModule,FormsModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  shippingCost = 5;
  taxRate = 0.08;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.cartItems)
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
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

  removeItem(product: CartItem) {
    this.cartService.removeFromCart(product.id);
  }

  proceedToCheckout() {
    this.router.navigate(['/check-out']);
    alert('Proceeding to checkout');
  }
}
