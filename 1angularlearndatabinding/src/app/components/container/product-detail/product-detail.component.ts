import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../../Models/ProductModel';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input()
  productListComp : ProductListComponent = undefined
  selectedProduct : ProductModel;
 @Output()
 removeSelectedProduct = new EventEmitter<boolean>()
  constructor(){
    console.log(this.selectedProduct,"const");
    
  }
  ngOnInit(){
    this.selectedProduct = this.productListComp.selectedProduct
    console.log(this.selectedProduct,"ngOnIn");

  }
  showSelectedProduct(){
    console.log(this.selectedProduct);
    
  }
  removeSelectedProd(){
    this.selectedProduct = null
    this.removeSelectedProduct.emit(true)
  }
}
