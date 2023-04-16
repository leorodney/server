import { useEffect } from "react";
import axios from "axios";
import { login, logout } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../interfaces/store";
import { useNavigate } from "react-router-dom";
/**
 * **Authorization** hook that check if user is `authenticated` or not by checking the server for a cookie
 * and if the cookie is valid it will return the `user object` and store it (dispatch it) in the `store`
 * by implementing that to protect the `home (/)` and the `community (\community)` routes.
 * @returns {AuthUser} user object
*/
export default function useAuthorization(fallbackRoute: string) {    
    const authorization = useSelector((state: StoreState) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authResponse = await axios.get(`${import.meta.env.VITE_LOCAL_SERVER}:${import.meta.env.VITE_LOCAL_PORT}/auth`, {withCredentials: true});
                if(authResponse.data.ok){
                    dispatch(login(authResponse.data.user));
                    navigate("/");
                }
            } catch (error : any) {
                dispatch(logout());
                navigate(fallbackRoute);
            }
        }
        checkAuth();
    }, []);
                
    return authorization;
}

