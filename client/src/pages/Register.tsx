import SidebySide from "../components/SidebySide";
import { registerFields } from "../utils/form";

export default function Register() {
  return (
    <SidebySide title="Register" fields={registerFields} swap={true}/>
  )
}
