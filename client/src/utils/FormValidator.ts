import { Field } from "../interfaces/form";

export default class FormValidator{
    
    isName(name: string){
        return /^\D{2,}$/.test(name);
    }
    
    isEmail(email: string){
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    isUsername(username: string){
        return /^[a-zA-Z0-9_-]{6,10}$/.test(username);
    }
    
    isPassword(password: string){
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/.test(password);
    }

    passconfirm(password: string, confirm: string){
        return password === confirm;
    }
};