import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCreateComponent implements OnInit {

  // propLegal = "qualquer";

  product: Product = { name: "", price: 0.00 }

  constructor(private productService: ProductService, private routerProduct: Router) {
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.routerProduct.navigate(['/products'])
    })
  }

  cancel(): void {
    this.routerProduct.navigate(['/products'])
  }


  // fazerAlgo(): void {
  //   console.log('fazendo algo');
  // }

}
