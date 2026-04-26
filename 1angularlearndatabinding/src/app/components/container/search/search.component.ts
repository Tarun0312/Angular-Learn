import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone:false
})
export class SearchComponent {

  searchText :string = ''
  
  @Output()
  onSearchTextChanged : EventEmitter<string> = new EventEmitter<string>();
  // using two way DATA BINDING
  // searchProduct(){
  //   this.onSearchTextChanged.emit(this.searchText)
  // }

  // USING TEMPLATE REFERENCE VARIABLE
  // searchProduct(inputEl : HTMLInputElement){
  //   this.searchText = inputEl.value
  //   this.onSearchTextChanged.emit(this.searchText);
  // }

  // Using ViewChid
  @ViewChild('searchInput') searchInputEl : ElementRef
  // Optional 2nd arg of ViewChild
  //by default static:true
  //   @ViewChild('searchInput',{static:true}) searchInputEl : ElementRef
// static : Detrermines whether the query is resolved
//       true is when the view Initialized(before the first change detection) for the first time 
//       false if u want to resolved on evry change detection
  searchProduct(){
    this.searchText = this.searchInputEl.nativeElement.value
    this.onSearchTextChanged.emit(this.searchText);
  }
}
