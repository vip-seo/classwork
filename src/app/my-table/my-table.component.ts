import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductRepositoryService, Product } from '../product-repository.service';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  @Output() public deleteProduct: EventEmitter<number> = new EventEmitter<number>();

  @Input() public rows: number;

  public productList: Observable<Product[]> = of ([]);

  constructor(
    private productRepository: ProductRepositoryService,
    private dialog: MatDialog
    ) {
    
  }

  ngOnInit() {
    this.productList = this.productRepository.getProducts();
  }

  public deleteRow(id: number) {
    this.deleteProduct.emit(id);
    this.productRepository.deleteProduct(id).subscribe(() => this.getProducts());
    
  }

  public edit(id: number): void {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      data: id,
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((condition: boolean) => {
      if (condition){
        this.getProducts();
      }
    })
  }

  private getProducts(): void {
    this.productList = this.productRepository.getProducts();
  }
 
}
