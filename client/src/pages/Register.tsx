import axios from "axios";
import { useEffect, useState } from "react";
import SidebySide from "../components/SidebySide";
import { registerFields } from "../utils/form";
import FormValidator from "../utils/FormValidator";
import { Register } from "../interfaces/form";
import useAuthorization from "../hooks/authorization";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";


export default function Register() {
  // check if user is authenticated and redirect to home if true
  useAuthorization("/register");
  const navigate = useNavigate();
  
  const [registerData, setRegisterData] = useState({fullname: "", email: "", username: "", password: "", confirmpassword: ""} as Register);
  const [errors, setErrors] = useState([] as string[]);
  const dispatch = useDispatch();

  // set time to empty errors using setTimeout to avoid memory leaks and UseEffect
  useEffect(() => {
    if(errors.length == 0) return;
    const errorsWipeChrono =() => {
      setErrors([] as string[]);
    };
    setTimeout(errorsWipeChrono, 5000);
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
      if(authResponse.data.ok){
        // dispatch auth action to the store:
        dispatch(login(authResponse.data.user));
        return navigate("/");
      }
    }catch(error : any){
      error.response?.status == 500 ? setErrors([...errors, "Somethings went wrong please try again soon."]) : setErrors([...errors, error.response.data.error]);
    }
  }

  return (
    <SidebySide title="Register" fields={registerFields} swap={true} onSubmit={authRegister} errors={errors} authData={[registerData, setRegisterData]}/>
  )
}
