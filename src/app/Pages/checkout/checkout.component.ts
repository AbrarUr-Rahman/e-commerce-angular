import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent  {
  subtotal = 100; 
  shippingCost = 5;
  taxRate = 0.08; 

  constructor() {}

  ngOnInit(): void {}

  get tax() {
    return this.subtotal * this.taxRate;
  }

  get total() {
    return this.subtotal + this.tax + this.shippingCost;
  }

  completeOrder() {
    alert('Order Completed!');
  }
}
