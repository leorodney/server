import { Prompt } from "../interfaces/prompt";
import artPlaceholder from '../assets/art-placeholder.jpg';

export default function Motivation({author, value, img} : Prompt) {
  return (
    <div className="h-[100%] w-[100%] text-white flex items-center justify-around flex-col bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${img})`}}>
        <h1 className="text-5xl font-serif">LEORDONEY</h1>
        <div className="h-80 w-80 bg-cover bg-center bg-no-repeat overflow-hidden rounded-2xl" style={{backgroundImage: `url(${img ? img : artPlaceholder})`}}></div>
        <p>{value}</p>
        <h3>Prompt Art By - {author || "Leorodney"}</h3>
    </div>
  )
}
