import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../../Models/ProductModel';
import { Products } from '../../../product-list';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products : ProductModel[] = Products.productList
  totalProductCount = Products.productList.length
  totalProductsInStock : number = this.products.filter(pd => pd.is_in_inventory === true).length
  totalProductsNotInStock : number = this.products.length - this.totalProductsInStock
  
  selectedRadioFilter : string = '0'
  @Input()
  searchText! : string

  selectedProduct : ProductModel

  ngOnChanges(changes:SimpleChanges){
    if(changes?.['searchText'].currentValue){
      this.products = Products.productList.filter(prod => prod.name.toLowerCase().includes(this.searchText.toLowerCase()))
      this.totalProductCount = this.products.length
      this.totalProductsInStock = this.products.filter(pd => pd.is_in_inventory === true).length
      this.totalProductsNotInStock  = this.products.length - this.totalProductsInStock

    }
    else{
      this.products = Products.productList
      this.totalProductCount = Products.productList.length
      this.totalProductsInStock = this.products.filter(pd => pd.is_in_inventory === true).length
      this.totalProductsNotInStock  = this.products.length - this.totalProductsInStock

    }
    this.filterProductList(this.selectedRadioFilter)


  }

  filterProductList(evet : string){
    this.selectedRadioFilter = evet
    if(!this.searchText){
      if(this.selectedRadioFilter == '1')
      this.products = Products.productList.filter(pd => pd.is_in_inventory === true)
      else if(this.selectedRadioFilter == '2')
        this.products = Products.productList.filter(pd => pd.is_in_inventory === false)
      else 
        this.products = Products.productList
      }
    else{
      this.products = Products.productList.filter(prod => prod.name.toLowerCase().includes(this.searchText.toLowerCase()))
      if(this.selectedRadioFilter == '1')
      this.products = this.products.filter(pd => pd.is_in_inventory === true)
      else if(this.selectedRadioFilter == '2')
        this.products = this.products.filter(pd => pd.is_in_inventory === false)
      else 
        this.products = this.products
      
    }

  }
  storeSelectedProduct(currentProduct:ProductModel){
    this.selectedProduct = currentProduct
  }

  checkViewChildrenMethodCallable(){
    console.log(this.selectedProduct,"aa");
    
  }
}
