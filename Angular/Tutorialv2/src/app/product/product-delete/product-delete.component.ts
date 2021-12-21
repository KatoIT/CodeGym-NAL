import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: any = {};
  productForm = new FormGroup({});
  id: any = 0;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getProduct(this.id)
    });
  }

  // id: number | undefined;
  ngOnInit(): void {

  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  deleteProduct(id: number) {
    const product = this.productForm.value;
    this.productService.deleteProduct(id).subscribe(() => {
      this.router.navigate(['/product/list']);
      alert('Xóa thành công');
    }, e => {
      console.log(e);
    });
  }
}
