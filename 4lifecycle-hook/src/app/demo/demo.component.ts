import {  Component,ContentChild,contentChild,ElementRef,Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnChanges {

  title = 'Demo Componnert'
  @Input() message!: string;

  @ViewChild('temp')
  tempRef! : ElementRef

  @ContentChild('para')
  para : ElementRef

  constructor(){
    console.log('Demo Comp constructor called');
    // console.log('title',this.title);
    // Input properties  are not initialized by the time constructor is called,it is initalized after constructor call completed
    // Child componet are not constructed
    // Projected content are also not available
    // console.log(this.message,"IN constructor input not initiatlized");
    
    // Lifecycle hOOK ORDER
    // 1) ngOnChanges -> First hook to execeuted for each component
    
    // Change Detection -> Mechanism to keep view template in sync with the component class eg. <div>{{name}}</div> everytimes name value change in componnet,then change detection cycle will run.
    // Some  scenarios where change detection is happening
        // a) On Input property change
        // b) dom event happens e.g click or change
        // c) setTimeout,setInterval
        // d)whenever an http request is made
    
    // whenever input properties change,ngonChange hook will get called
    // It will not call if previousValue and currentValue are same 


    // 2) ngOnInit
    // 3) ngDoCheck
    // 4) ngAfterContentInit
    // 5) ngAfterContentChecked
    // 6) ngAfterViewInit
    // 7) ngAfterViewChecked
    // 8) ngOnDestroy

  }

  ngOnChanges(change:SimpleChanges){
    console.log('ngOnChanges hook called');
    
    // console.log(this.message,"After constructor complete");

    // console.log(change);

    // console.log(change['message'].previousValue === change['message'].currentValue);
    
    
    
  }

  // Angular raises ngOnInit after it creates the component .It calls after ngOnChanges
  // Called Only oncei.e during the first Change Detection cycle
 // By the time ngOnInit gets called,none of the child componnets or projected content or view are availble at this point of time viewChild,children ,content child and children will not be availble to use  
//  By the time ngOninit is called,only Input properties are initalized
  ngOnInit(){
    console.log("ngOnInit hook called");  
    // console.log(this.tempRef,"tempRef View Child not available on ngOnInit");
      
  }

  // A hook to implement custom change detection,whenever angular fails to detect change detection in input properties use ngDoCheck
  // It runs on every change dtection cycle
  ngDoCheck(){
    console.log("Docheck Hook called");
    // console.log(this.message);
    // console.log("para content in ngDocheck",this.para);
    
  }

  // This hook is called when the component projected content has beed been fully initialized
  // Even if we don't have projected content,then still ngAfterContentInit hook called
  // Only called once,on first change detection
  // By the time ,this hook get called,Input and Content and ContentChildren are initalized
  ngAfterContentInit(){
    console.log("ngAfterContentInit hook called");
    // console.log(this.para.nativeElement);
    
  }

  //Called on first change detection and every time projected content gets changed or on every change detection(simply runs on every change detection)
  // if projected content is updated,then acc the eleemnt in ngAftercontentChecked lifecycly hook bcoz it is initalized before by the ngAfterContentCheck is called
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked hook called");
    // console.log("in ngAfterContentChecked",this.para.nativeElement);
    console.log("temppara in content checked",this.tempRef);
  }

  // ngAfterContentInit , ngAfterContentCheck,ngAfterViewInit,NgAfterViewChecked are only for compoenents not for directives


  // This hooks get called after the componets View template  and it's child componnets view template are fully initialized
  // Runs only once (only on first change detection)
  // Angular also update properties decorated with View Child and @ViewChildren before calling this hook
  // ngAfterViewInit will be called only after the components child component all the lifecycle hooks are completed
  ngAfterViewInit(){
    console.log("ngAfterViewInit of demo hooks called");
    console.log("tempPara in afterViewInit",this.tempRef);
    
    
  }

  // Angular fires this hook after it check and updates the components View Templates and all its children view templates
  // Called on first change detection and after ngAfterViewInit hook has been executed ,it called on every change detection
  // Angular also update properties decorated with View Child and @ViewChildren before calling this hook
  ngAfterViewChecked(){
    console.log("NgAfterViewChecked hooks called");
    console.log("tempPara in afterViewChecked",this.tempRef);
    
    
  }

  // Fires just before component gets destroyedi.e just before components remove from DOM
  // Used for Cleanup work - like unsubscribe from Observable or detach event handler to avoid memory leak
  ngOnDestroy(){
    console.log("ngONDestroy hooks called ");
    
  }
}
