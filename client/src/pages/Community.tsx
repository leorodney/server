import Hero from "../components/Hero";
import ShowCases from "../components/ShowCases";
import useAuthorization from "../hooks/authorization";
import Production from "../components/Production";

export default function Community() {
  useAuthorization("/login");
  return (
    <>
      <Hero/>
      <Production/>
      <ShowCases/>
    </>
  )
};
