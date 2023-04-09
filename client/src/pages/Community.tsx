import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import ShowCases from "../components/ShowCases";
import { AuthUser } from "../interfaces/user";

export default function Community() {
  const user = useSelector((state: AuthUser)=> state);

  console.log(user);

  return (
    <>
      <Hero/>
      <ShowCases/>
    </>
  )
};
