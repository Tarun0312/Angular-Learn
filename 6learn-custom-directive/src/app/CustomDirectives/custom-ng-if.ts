import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]',
})
export class CustomNgIf {
  constructor(private view:TemplateRef<any>,private template : ViewContainerRef) {}
  // 1 Need To know reference of dom element/view which will be added or remove. 
  // 2) Need to know reference of Template in which view is embedded
  // View here is the container on which structural directive is applied

  // if  custom structural directive is created,then use * before directive name so that angular can understand
  @Input() set appCustomNgIf(condition : boolean){
    if(condition){
      // add view inside template
      this.template.createEmbeddedView(this.view);
    }else{
      // if view is already rendered and view is not present,clear the template 
      this.template.clear()
    }
  } 
}
