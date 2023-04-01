import SidebySide from "../components/SidebySide";
import { loginFields } from "../utils/form";

export default function Login() {
  return (
    <SidebySide title="Login" fields={loginFields}/>
  )
}
