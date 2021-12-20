import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: any = {};
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private routes: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id: any = paramMap.get('id');
      this.product = this.productService.findProductById(id);
    });
  }


  delete() {
    if (this.productService.deleteById(this.product)) {
      this.routes.navigate(['/product/list']);
    }else {
      alert("Delete fail!");
    }
  }
}
