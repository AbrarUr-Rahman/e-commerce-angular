import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../Service/product.service';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CartService,CartItem } from '../../Service/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CarouselModule,TagModule,ButtonModule],
  providers:[ProductService,CartService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {  
  products: Product[] = [];
  selectedCategory: string = '';
  sortOption: string = 'featured';

  constructor(private productService: ProductService,private cartService:CartService) {}

  ngOnInit(): void {
    // Fetch all products from the service
    this.productService.getGridProducts().then((products) => {
      this.products = products;
    });
  }
  addToCart(product:any) {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    this.cartService.addToCart(cartItem);
    alert(`${product.name} added to cart!`);
  }
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
