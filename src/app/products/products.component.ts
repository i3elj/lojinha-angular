import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from './products-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] | undefined

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.productsService.getProductList();
    
    const products = this.productsService.getProductList()

    this.route.queryParamMap.subscribe(params => {
      const search = params.get("search")?.toLowerCase()
      if (search) {
        this.products = products.filter(product => product.description.toLowerCase().includes(search))
      } else {
        this.products = products
      }
    })
  }
  
}
