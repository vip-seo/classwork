import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService, Product } from '../product-repository.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private productRepository: ProductRepositoryService) {  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  public addProduct() {    
    if (this.myForm.valid) {
      const product = new Product(
        this.myForm.get('name').value,
        this.myForm.get('price').value,
        this.myForm.get('category').value
        );
        this.productRepository.addProduct(product).subscribe(() => this.myForm.reset());
    } else {
      alert('Form invalid');
    }
  }

}
