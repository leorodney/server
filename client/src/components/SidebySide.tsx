import { Form as FormInterface , Swap } from "../interfaces/form";
import Form from "../components/Form";
import Motivation from "./Motivation";
import motivationBG from "../assets/motivation.jpeg";

export default function SidebySide(form: Swap & FormInterface) {
  return (
    <section className={`h-screen w-screen flex ${form.swap ? "flex-row-reverse" : ""}`}>
        <section className="h-[100%] w-[50vw] flex items-center justify-center flex-col bg-slate-900 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${motivationBG})`}}>
            <Motivation author="" value="" img=""/>
        </section>
        <section className="h-[100%] w-[50vw] flex items-center justify-center flex-col bg-[var(--bg-gray)]">
            <Form {...form} />
        </section>
    </section>
  )
}
