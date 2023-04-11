import Hero from "../components/Hero";
import ShowCases from "../components/ShowCases";
import { useNavigate } from "react-router-dom";
import useAuthorization from "../hooks/authorization";

export default function Community() {
  const authorization = useAuthorization();
  const navigate = useNavigate();
  !authorization.isAuthenticated ? navigate("/login") : null;
  console.log("Community:",authorization);
  return (
    <>
      <Hero/>
      <ShowCases/>
    </>
  )
};
