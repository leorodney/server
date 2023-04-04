import { Field } from "../interfaces/form";

export default class FormValidator{
    
    isName(name: string){
        return /^\D{2,}$/.test(name);
    }
    
    isEmail(email: string){
        // using regex RFC 5322 Official Standard email validation 
        return /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/gm.test(email);
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