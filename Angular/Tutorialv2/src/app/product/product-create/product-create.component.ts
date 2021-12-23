import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.getAllCategory()
  }

  submit() {
    const product = this.productForm.value;
    console.log(product)
    product.category = [product.category];
    console.log(product)
    this.productService.saveProduct(product).subscribe(product => {
      this.productForm.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
    this.productForm.reset();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires.data;
    });
  }

}
