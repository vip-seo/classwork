import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Product, ProductRepositoryService } from '../product-repository.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private productRepository: ProductRepositoryService
    ) {}
  

  ngOnInit() {
  
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
    this.productRepository.getProduct(this.id).subscribe((product: Product) => {
      this.myForm.patchValue(product);
    }

    
    )
  }

  public  updateProduct(): void {
    if (this.myForm.valid) {
const product = new Product (
  this.myForm.get('name').value,
  this.myForm.get('price').value,
  this.myForm.get('category').value,
  this.id
 );
 this.productRepository.editProduct(product).subscribe(() =>{
   this.dialogRef.close(true);
 }
 )
    }
  }

}
