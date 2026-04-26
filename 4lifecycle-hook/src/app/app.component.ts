import {  Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '3lifecycle-hook';
  toggle : boolean = true
  constructor(){
    console.log('App comp constructor called');
    
  }
  inputVal : string = ''
  onSubmit(ref:HTMLInputElement){
    this.inputVal = ref.value
    // setTimeout(() => {
      // this.inputVal.push(ref.value) // here ref is same ,so noONChanges is not calling
      // this.inputVal=[...this.inputVal,ref.value] //here reference changes ,so changes hook is calling
    // })
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit of app compoennet hooks called");
  }

  toggleFunc(){
    this.toggle = !this.toggle
  }
}
