// src/app/service/productservice.ts
import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // Carousel products with specific images
    private carouselProducts: Product[] = [
        {
            id: '2000',
            name: 'Winter Coat',
            price: 89.99,
            image: '/images/shirt4.jpg', //Different Image for the carousel System 
            inventoryStatus: 'INSTOCK'
        },
        {
            id: '2001',
            name: 'Spring Dress',
            price: 59.99,
            image: '/images/shirt7.jpg', 
            inventoryStatus: 'LOWSTOCK'
        },
        {
            id: '2002',
            name: 'Sneakers',
            price: 99.99,
            image: '/images/shirt8.jpg', 
            inventoryStatus: 'INSTOCK'
        },
        {
            id: '2003',
            name: 'Sneakers',
            price: 99.99,
            image: '/images/tables.jpg', 
            inventoryStatus: 'INSTOCK'
        },
        {
            id: '2004',
            name: 'Sneakers',
            price: 99.99,
            image: '/images/tables2.jpg', 
            inventoryStatus: 'INSTOCK'
        },
    ];

    // Grid products with unique images
    private gridProducts: Product[] = [
        {
            id: '3000',
            name: 'Classic Jacket',
            price: 49.99,
            image: '/images/tables3.png', //Different Image for the Grid System
            inventoryStatus: 'INSTOCK'
        },
        {
            id: '3001',
            name: 'Summer Dress',
            price: 39.99,
            image: '/images/tables4.jpg', 
            inventoryStatus: 'LOWSTOCK'
        },
        {
            id: '3002',
            name: 'Casual Tee',
            price: 19.99,
            image: '/images/tables5.jpg', 
            inventoryStatus: 'OUTOFSTOCK'
        },
        {
            id: '3003',
            name: 'Casual Tee',
            price: 19.99,
            image: '/images/tables5.jpg', 
            inventoryStatus: 'OUTOFSTOCK'
        },
        {
            id: '3004',
            name: 'Casual Tee',
            price: 19.99,
            image: '/images/tables5.jpg', 
            inventoryStatus: 'OUTOFSTOCK'
        },
    ];

    constructor() {}

    getCarouselProducts(): Promise<Product[]> {
        return new Promise((resolve) => {
          resolve(this.carouselProducts);
            // setTimeout(() => {
            //     resolve(this.carouselProducts);
            // }, 1000); 
        });
    }

    getGridProducts(): Promise<Product[]> {
        return new Promise((resolve) => {
          resolve(this.gridProducts);
            // setTimeout(() => {
            //     resolve(this.gridProducts);
            // }, 1000); 
        });
    }
}
