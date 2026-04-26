import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  selectedRadioFilter : string = '0'
  @Input('totalProductCount')
  totalProducts : number = 0
  @Input()
  inStock : number = 0;
  @Input()
  notInStock : number = 0

  @Output()
  selectedRadioFilterChange : EventEmitter<string> = new EventEmitter<string>()

  onSelectedRadioFilterChange(){
    this.selectedRadioFilterChange.emit(this.selectedRadioFilter)    
  }
}
