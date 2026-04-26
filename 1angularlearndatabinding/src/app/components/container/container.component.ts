import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  searchText : string = ''
  selectedRadioFilter : string = '0'
  searchProducts(evt : string){
    this.searchText = evt;
  }

  @ViewChild(ProductListComponent) productListComponent : ProductListComponent

  ngAfterViewInit(){
    this.productListComponent.checkViewChildrenMethodCallable();
  }
  onRadioFilterChange(event:string){
    this.selectedRadioFilter = event
  }
  removeSelectedPro(evt){
    this.productListComponent.selectedProduct = null
  }
}
