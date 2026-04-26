import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revise-template-form',
  standalone: false,
  templateUrl: './revise-template-form.component.html',
  styleUrl: './revise-template-form.component.css'
})
export class ReviseTemplateFormComponent {

  @ViewChild('regForm') form!:NgForm

  lastName : string = ''
  dob! : Date
  genderRadioOptions = [
    {
      label:"Male",
      id:"1",
      value:"male"
    },
    {
      label:"Female",
      id:"2",
      value:"female"
    },
    {
      label:"Prefer not to say",
      id:"3",
      value:"others"
    },
  ]
  countryOptions=['India','USA','Nepal','China','Chile']
  defaultCountry :string=this.countryOptions[0]
  pincod:string=''
  username:string=''
  onSubmit(){
    console.log(this.form);
    console.log(this.form.value.firstName);
    console.log(this.form.controls['firstName'].value);
    
    this.form.reset()
  }
  createUsername(){
    let username=''
    username+=this.form.controls['firstName'].value.slice(0,2)
    username+=this.form.controls['lastName'].value.slice(0,2)

    let dobYear = new Date(this.form.value.dob).getFullYear()
    if(dobYear)
    username+=dobYear+""
    username=username.toUpperCase()
    // this.form.controls['username'].setValue(username)
    // this.form.setValue({
    //   firstName:this.form.controls['firstName'].value,
    //   lastName:this.form.controls['lastName'].value,
    //   dob:this.form.value.dob,
    //   username:username,
    //   gender:'',
    //   address:{
    //     street:"",
    //     country:"",
    //     city:"",
    //     pincode:""
    //   }
    // })
    this.form.form.patchValue({
      username:username,
      address:{
        country:"China1"
      }
    })
  }
}
