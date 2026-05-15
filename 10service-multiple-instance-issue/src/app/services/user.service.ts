import { UserDto } from "../user.dto";

export class UserService{

    userList : Array<UserDto> = [
        {name:'Sahil',gender:'M',subscCategory:'Y',subsStatus:'A'},
        {name:'Mayank',gender:'M',subscCategory:'Q',subsStatus:'I'},
        {name:'Priyanshu',gender:'F',subscCategory:'Y',subsStatus:'A'}

    ]

    addUser(user:UserDto){
        this.userList.push(user)
    }

    getAllUsers(){
        return this.userList;
    }
}