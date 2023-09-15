import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var strId = this.route.snapshot.paramMap.get('id') // pega o parâmetro id
    this.productService.readById(`${strId}`).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct() {
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage('Produto Excluído');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  } 

}
