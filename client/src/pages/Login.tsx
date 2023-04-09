import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebySide from "../components/SidebySide";
import { loginFields } from "../utils/form";
import { Login } from "../interfaces/form";
import { login } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from "../interfaces/user";

export default function Login() {
  const [loginData, setLoginData] = useState({emailorusername: "", password: ""} as Login);
  const [errors, setErrors] = useState([] as string[]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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



  const authLogin = async (e: SubmitEvent) => {
    e.preventDefault();
    if(!loginData.emailorusername || !loginData.password) return setErrors([...errors, "Please fill in all fields"]);
    try {
      const authResponse =  await axios.post(`${import.meta.env.VITE_LOCAL_SERVER}:${import.meta.env.VITE_LOCAL_PORT}/login`, loginData, {withCredentials: true});

      if(authResponse.data.ok){
        // dispatch auth action to the store:
        dispatch(login(authResponse.data.user));
        return navigate("/");
      }

    } catch (error : any) {
      setErrors([...errors, error.response.data.error]);
    }
  }

  return (
    <SidebySide title="Login" fields={loginFields} onSubmit={authLogin} authData={[loginData, setLoginData]} errors={errors}/>
  )
}

