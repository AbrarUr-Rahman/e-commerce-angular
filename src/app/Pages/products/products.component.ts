import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../Service/product.service';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CartService,CartItem } from '../../Service/cart.service';
import { TitleCasePipe } from '@angular/common'; 

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService],
  imports: [TitleCasePipe,CarouselModule,TagModule,ButtonModule]
})
export class ProductsComponent  {
  products: Product[] = [];
  carouselProducts: Product[] = [];
  allProducts: Product[] = []; // Original, unfiltered list
  displayedProducts: Product[] = []; // Filtered products for display
  selectedCategory: string = '';
  sortOption: string = 'featured';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Fetch products and carousel products, then combine into allProducts
    this.productService.getGridProducts().subscribe((products) => {
      this.products = products;
      this.mergeProducts();
    });

    this.productService.getCarouselProducts().subscribe((carouselProducts) => {
      this.carouselProducts = carouselProducts;
      this.mergeProducts();
    });
  }

  // Merge carousel products and regular products into allProducts
  mergeProducts(): void {
    this.allProducts = [...this.carouselProducts, ...this.products];
    this.applyFilters(); // Apply filters after merging
  }

  // Method to filter and sort products based on allProducts
  applyFilters(): void {
    let filtered = this.selectedCategory
      ? this.allProducts.filter(
          (product) =>
            product.category.toLowerCase() === this.selectedCategory.toLowerCase()
        )
      : [...this.allProducts]; // Show all products if no category is selected

    // Sort filtered products based on the selected option
    filtered.sort((a, b) => {
      switch (this.sortOption) {
        case 'price_low_high':
          return a.price - b.price;
        case 'price_high_low':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id; // Assuming higher ID means newer product
        default:
          return 0; // Featured or default order
      }
    });

    this.displayedProducts = filtered; // Update displayedProducts with the filtered results
  }

  // Event handler for category change
  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    this.applyFilters();
  }

  // Event handler for sort option change
  onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.sortOption = selectElement.value;
    this.applyFilters();
  }

  addToCart(product: Product): void {
    const cartItem: CartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    this.cartService.addToCart(cartItem);
    console.log(cartItem)
    alert(`${product.title} added to cart!`);
  }
}
