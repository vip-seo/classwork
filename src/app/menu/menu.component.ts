import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../product-repository.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public productList = [];
  constructor(private productRepository: ProductRepositoryService) { }

  ngOnInit() {
    this.productRepository.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

}
