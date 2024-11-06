import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems = [
    { id: 1, name: 'Product 1', image: '/assets/images/product1.jpg', price: 50, quantity: 1 },
    { id: 2, name: 'Product 2', image: '/assets/images/product2.jpg', price: 30, quantity: 2 },
    
  ];
  shippingCost = 5;
  taxRate = 0.08; 

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get subtotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  get tax() {
    return this.subtotal * this.taxRate;
  }

  get total() {
    return this.subtotal + this.tax + this.shippingCost;
  }

  removeItem(product: any) {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  }

  proceedToCheckout() {
    this.router.navigate(['/check-out']);
    alert('Proceeding to checkout');
  }
}
