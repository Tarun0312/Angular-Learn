import { AbstractControl } from "@angular/forms";

export class CustomValidator{
    static noSpaceAllowed = (control:AbstractControl) => {
        if(control.value != null && control.value.indexOf(' ')!=-1){
            return {noSpaceAllowed:true};
        }
        return null;
    
    }

    static checkUserName = (control:AbstractControl): Promise<any> => {
       return userNameAllowed(control.value)
    }
}
function userNameAllowed(userName:string) : Promise<any>{
    const userInDB=['John','Smith','ABD','Jacque']

    return new Promise((resolve,reject) => {
       setTimeout(() =>{
        if(userInDB.includes(userName)){
            resolve({userAlreadyExist:true}) 
        }else{
            resolve(null)
        }
       
       },5000)
    })
}