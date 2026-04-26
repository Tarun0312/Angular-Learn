import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3template-driven-form';

  @ViewChild('registrationForm')
  form! : NgForm

  firstName : string = ''
  lastName : string = ''
  userEmail:string = ''

  genderRadioOptions = [{
    label:'male',
    for:"check-male"
  },
  {
    label:'female',
    for:"check-female"
  },
  {
    label:'other',
    for:'check-other'
  }
]

defaultGender = 'male'
defaultCountry = 'India'
terms = false

  registrationFormSubmit(){
    console.log(this.form);
    // in template driven form
    // 1) use name property for each form/input field
    // 2) use ngModel with each field

    // reading form Values
    console.log(this.form.value.firstName);
    console.log(this.form.value.lastName);
    console.log(this.form.value.number);
    console.log(this.form.value.address.country);
    console.log(this.form.controls['firstName'].value);
    console.log(this.form.control.get('address.city')?.value);

    setTimeout(() => {
      this.form.reset()
      console.log("after resetr",this.form.value);
      
    },0)
    this.form.form.patchValue({
      gender:"male",
      address:{
        country:"India"
      }
    })
  }

  createUserName(){
   let userName = ''
   if(this.form.value.firstName.length>=3){
    userName += this.form.value.firstName.slice(0,3)
   }else{
    userName += this.form.value.firstName
   }

   if(this.form.value.lastName.length>=3){
    userName += this.form.value.lastName.slice(0,3)
   }else{
    userName += this.form.value.lastName
   }

   const dobYear = new Date(this.form.controls['dob'].value).getFullYear()
   userName +=dobYear
   userName=userName.toUpperCase()

   console.log(userName);
   

  //  this.form.controls['userName'].setValue(userName)
  //   this.form.controls['userName'].patchValue(userName)

  // in setValue need to pass entire value object
  // update entire value object
  //  this.form.setValue({
  //   firstName:'',
  //   lastName:'',
  //   email:"abc@gmail.com",
  //   dob:"",
  //   number:"",
  //   userName:userName,
  //   gender:"male",
  //   address:{
  //     streetAddress:"",
  //     streetAddress2:"",
  //     city:"",
  //     country:"",
  //     region:"",
  //     postal:""
  //   }

  //  })

  //  using patch value 
  // used to update a subset of element of FormGroup or FormArray value
  // only update matching object
   this.form.form.patchValue({
    userName:userName,
    address:{
      country:this.form.value.address.country,
    }

   })

  }
}
