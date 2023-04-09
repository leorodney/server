import { Link } from "react-router-dom";
import { Form, Login, Register } from "../interfaces/form";
import leorodney from '../assets/leorodney-b.png';
import { SetStateAction } from "react";

export default function Form({title, fields, onSubmit, authData, errors}: Form,) {
  const [fieldsData, setFieldsData] = authData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldsData({...fieldsData, [e.target.name]: e.target.value} as SetStateAction<Login> & SetStateAction<Register>)
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center flex-col gap-4">
      <div className="flex items-center gap-4 flex-col">
        <img src={leorodney} className="w-24" alt="Leorodney Logo"/>
        <h1 className="text-4xl font-serif">{title.toUpperCase()}</h1>
        <div className="h-1 w-[340px] rounded-md bg-[var(--clr-p)]"></div>
      </div>
      <ul className={`${errors.length > 0 ? 'flex' : 'hidden'} py-4 px-8 rounded-md justify-center items-center bg-red-200 text-sm text-red-800 list-disc transition-all`}>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="flex items-center gap-6 flex-col">
      {fields.map((field, idx) => (
        <input
          className={"px-4 py-2 w-96 rounded-lg bg-white focus:outline-[var(--clr-p)] border-x-2 border-y-2 border-gray-300 drop-shadow-md"}
          key={idx}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          onChange={onChange}
        />
        ))}
      </div>
      <button className="px-10 mt-8 mb-4 py-2 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]">{title}</button>
      <p className="text-sm text-gray-700">{title.toLowerCase() == "login" ? "Don't have an account, " : "I have an account, "}<Link className="underline text-[var(--clr-p)]" to={title.toLowerCase() == "login" ? "/register" : "/login"}>{title.toLowerCase() == "login" ? "Register" : "Login"}</Link></p>
    </form>
  )
}
