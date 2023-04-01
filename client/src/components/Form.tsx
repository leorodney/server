import { Link } from "react-router-dom";
import { Form } from "../interfaces/form";
import leorodney from '../assets/logo-b.png';

export default function Form(form: Form) {
  return (
    <form className="flex items-center flex-col">
      <div className="flex items-center my-8 gap-4 flex-col">
        <img src={leorodney} className="w-24" alt="Leorodney Logo"/>
        <h1 className="text-4xl font-serif">{form.title.toUpperCase()}</h1>
        <div className="h-1 w-[340px] rounded-md bg-[var(--clr-p)]"></div>
      </div>
      <div className="flex items-center gap-6 flex-col">
      {form.fields.map((field, idx) => (
        <input
          className={"px-4 py-2 w-96 rounded-lg bg-white focus:outline-[var(--clr-p)] border-x-2 border-y-2 border-gray-300 drop-shadow-md"}
          key={idx}
          type={field.type}
          placeholder={field.placeholder}
        />
        ))}
      </div>
      <button className="px-10 mt-8 mb-4 py-2 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]">{form.title}</button>
      <p className="text-sm text-gray-700">{form.title.toLowerCase() == "login" ? "Don't have an account, " : "I have an account, "}<Link className="underline text-[var(--clr-p)]" to={form.title.toLowerCase() == "login" ? "/register" : "/login"}>{form.title.toLowerCase() == "login" ? "Register" : "Login"}</Link></p>
    </form>
  )
}
