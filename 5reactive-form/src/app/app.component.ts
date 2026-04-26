import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '5reactive-form';

  reactiveForm! : FormGroup
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

  ngOnInit(){
    this.createForm()
  }
  createForm(){
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,CustomValidator.noSpaceAllowed]),
      lastName:new FormControl('',[Validators.required,CustomValidator.noSpaceAllowed]),
      email:new FormControl('',[Validators.required,Validators.email]),
      userName:new FormControl('',Validators.required,CustomValidator.checkUserName),
      dob:new FormControl('',Validators.required),
      gender:new FormControl('male'),
      address : new FormGroup({
        streetAddress:new FormControl('',Validators.required),
        country:new FormControl('India',Validators.required),
        city: new FormControl(''),
        region:new FormControl(''),
        postal: new FormControl('',[Validators.required,Validators.minLength(6)])
      }),
      skills : new FormArray([
        new FormControl(null,[Validators.required]),
      ]),
      experience : new FormArray([
        // new FormGroup({
        //   company:new FormControl('',Validators.required),
        //   totalExp:new FormControl('',Validators.required),
        //   position:new FormControl('',Validators.required),
        //   startDate:new FormControl('',Validators.required),
        //   endDate:new FormControl('',Validators.required)
        // })
      ])
    
    })
  }

  get skillsFormArray(){
    return this.reactiveForm.get('skills') as FormArray
  }

  get expFormArray(){
    return this.reactiveForm.get('experience') as FormArray
  }

  onSubmit(){
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.value.firstName);
    console.log(this.reactiveForm.controls['email']['errors']);
        
    console.log(this.reactiveForm.get('skills')?.value);
    console.log(this.reactiveForm.controls['skills'].value);
    console.log(this.reactiveForm.controls['skills']['errors']);

    


  }
  addSkill(){
    this.skillsFormArray.push(new FormControl(null,[Validators.required]))
  }
  removeSkill(index:number){
    this.skillsFormArray.removeAt(index)
  }
  addExp(){
    let control = new FormGroup({
      company:new FormControl('',Validators.required),
      totalExp:new FormControl('',Validators.required),
      position:new FormControl('',Validators.required),
      startDate:new FormControl('',Validators.required),
      endDate:new FormControl('',Validators.required)
    })
    this.expFormArray.push(control)
  }
  removeExp(index:number){
    this.expFormArray.removeAt(index)
  }
}
