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
  cartItems: CartItem[] = [
    { id: 3, name: "Mens Cotton Jacket", price: 55.99, quantity: 1, image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
    { id: 4, name: "Mens Casual Slim Fit", price: 15.99, quantity: 1, image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" }
  ];
  shippingCost = 5;
  taxRate = 0.08;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.cartItems);
    // this.cartService.getCartItems();
    // this.cartService.cartItems$.subscribe(items => {
    //   this.cartItems = items;
    // });
  }

  get subtotal() {
    return Math.round(
      this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
    ) / 100;
  }
  

  get tax() {
    return Math.round(this.subtotal * this.taxRate) ;
  }

  get total() {
    return  this.subtotal + this.tax + this.shippingCost;
  }

  removeItem(product: CartItem) {
    this.cartService.removeFromCart(product.id);
  }

  proceedToCheckout() {
    this.router.navigate(['/check-out']);
    alert('Proceeding to checkout');
  }
}
