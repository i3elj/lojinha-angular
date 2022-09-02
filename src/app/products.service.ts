import { Injectable } from '@angular/core';
import { ProductList, Products } from './products/products-list';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = ProductList;

  constructor() { }
  
  getProductList() {
    return this.products;
  }
  
  getProductItem(id: number) {
    return this.products.find(product => product.id == id);
  }
}
