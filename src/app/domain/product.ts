
export interface Product {
    // id: string;
    // name: string;
    // price: number;
    // image: string;
    // inventoryStatus: string;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
}
