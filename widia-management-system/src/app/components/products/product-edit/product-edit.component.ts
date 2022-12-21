import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
