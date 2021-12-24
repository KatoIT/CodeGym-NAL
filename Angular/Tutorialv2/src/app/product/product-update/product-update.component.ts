import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: any = {};
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  id: any = 0;
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getProduct(this.id)
    });
  }

  // id: number | undefined;
  ngOnInit(): void {
    this.getAllCategory();
  }

  getProduct(id: string) {
    return this.productService.findById(id).subscribe(data => {
      const product = data.data
      console.log("ABC ",product);
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.categories[0])
      });
    });
  }

  updateProduct(id: string) {
    const product = this.productForm.value;
    product.categories = [product.category];
    this.productService.updateProduct(id, product).subscribe(() => {
      this.router.navigate(['/product/list']);
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires.data;
    });
  }

  // next() {
  //   this.router.navigate(['/edit', this.product.id + 1], {
  //     queryParams: {id: 4, age: 8},
  //     queryParamsHandling: "merge"
  //   })
  // }

}
