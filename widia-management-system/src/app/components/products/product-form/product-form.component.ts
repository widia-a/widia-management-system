import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/i-product';
import { ProductService } from 'src/app/services/product.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  showMore: boolean = false;
  showToast: boolean = false; 
  isConfirmDelete: boolean = false;
  
  @Input()
  product: IProduct = {} as IProduct;

  constructor(
    private productService: ProductService,
    private toasterService: ToasterService
    ) { }

  ngOnInit(): void {
  }

  showToggle(): void{
    this.showMore = !this.showMore;
  }

  setProduct(product: IProduct){
    this.product = JSON.parse(JSON.stringify(product));
  }

  cancel(): void {
    this.product = {} as IProduct;
    this.showMore = false;
  }

  onCreate() {
    this.productService.create(this.product)
    .subscribe(
      (response: IProduct) => {
        this.showMore = false;
        this.product = {} as IProduct;

        this.toasterService.showToast = true;
        this.toasterService.message = `Berhasil menyimpan data ${response.title}`
      }
    )
  }

  onUpdate(){
    this.productService.update(this.product).subscribe(
      (response: IProduct) => {
        this.toasterService.showToast = true;
        this.toasterService.message = `Berhasil menyimpan data ${response.title}`
      }
    )
  }

  onDelete(){
    this.productService.delete(this.product).subscribe(
      (response: IProduct) => {
        this.product = {} as IProduct;
        this.showMore = false;
        this.toasterService.showToast = true;
        this.toasterService.message = `Berhasil menghapus data ${response.title}`
        this.isConfirmDelete = false;
      }
      )
  }

}
