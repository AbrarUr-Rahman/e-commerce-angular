import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, TagModule, ButtonModule],
  providers: [ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carouselProducts: Product[] = []; 
  gridProducts: Product[] = [];      

  responsiveOptions: any[] | undefined;


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getCarouselProducts().subscribe((products) => {
      this.carouselProducts = products;
    });

    this.productService.getGridProducts().subscribe((products) => {
      this.gridProducts = products;
    });
      // this.productService.getCarouselProducts().then((products) => {
      //     this.carouselProducts = products;
      // });

      // this.productService.getGridProducts().then((products) => {
      //     this.gridProducts = products;
      // });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined {
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
