import axios from "axios";
import { useEffect, useState } from "react";
import SidebySide from "../components/SidebySide";
import { registerFields } from "../utils/form";
import FormValidator from "../utils/FormValidator";
import { Register } from "../interfaces/form";


export default function Register() {
  const [registerData, setRegisterData] = useState({fullname: "", email: "", username: "", password: "", confirmpassword: ""} as Register);
  const [errors, setErrors] = useState([] as string[]);

  // set time to empty errors using setTimeout to avoid memory leaks and UseEffect
  useEffect(() => {
    if(errors.length == 0) return;
    const errorsWipeCrono =() => {
      setErrors([] as string[]);
    };
    setTimeout(errorsWipeCrono, 5000);
    return () => {
      clearTimeout(5000);
    }
  }, [errors]);

  const authRegister = async (e: SubmitEvent) => {
    e.preventDefault();
    const validator = new FormValidator();
    if(!validator.isName(registerData.fullname.split(" ")[0]) || !validator.isName(registerData.fullname.split(" ")[1])) return setErrors([...errors, "Invalid name!"]);
    if(!validator.isEmail(registerData.email)) return setErrors([...errors, "Invalid email!"]);
    if(!validator.isUsername(registerData.username)) return setErrors([...errors, "Invalid username!"]);
    if(!validator.isPassword(registerData.password)) return setErrors([...errors, "Invalid password!"]);
    if(!validator.passconfirm(registerData.password, registerData.confirmpassword)) return setErrors([...errors, "Passwords do not match!"]);

    const {email, username, password} = registerData;
    const firstname = registerData.fullname.split(" ")[0].charAt(0).toUpperCase() + registerData.fullname.split(" ")[0].slice(1);
    const lastname = registerData.fullname.split(" ")[1].charAt(0).toUpperCase() + registerData.fullname.split(" ")[1].slice(1);
    try{
      const authResponse =  await axios.post(`${import.meta.env.VITE_LOCAL_SERVER}:${import.meta.env.VITE_LOCAL_PORT}/register`, { firstname, lastname, email, username, password }, {withCredentials: true});
    }catch(error : any){
      setErrors([...errors, error.response.data.error]);
    }
  }

  return (
    <SidebySide title="Register" fields={registerFields} swap={true} onSubmit={authRegister} errors={errors} authData={[registerData, setRegisterData]}/>
  )
}
