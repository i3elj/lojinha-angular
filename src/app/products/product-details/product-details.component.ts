import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Products } from '../products-list';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Products | undefined
  amount: number = 1

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const productId = Number(routeParams.get("id"))
    this.product = this.productsService.getProductItem(productId)
  }
  
  addToCart() {
    console.log("produto adicionado ao carrinho com sucesso")
  }
  
}
