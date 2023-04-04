import { Prompt } from "../interfaces/prompt";
import leorodney from '../assets/leorodney-b.png';
import Loader from "./Loader";

interface Status{
  generating?: boolean;
  publishing?: boolean;
}

export default function Projection({img}: Prompt, {generating}: Status ) {
  console.log({generating});
  return (
    <section className='h-full w-1/2 flex items-center gap-4 justify-center flex-col'>
      <div className="relative h-full w-full flex items-center justify-center flex-col bg-white drop-shadow-md">
        {
          generating ? 
          <div className="absolute left-0 top-0 z-10 w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-70">
            <Loader size={20} theme={"light"}/>
          </div>
          :
          img ? 
          <img src={img} className="h-full w-full object-contain bg-center bg-no-repeat " alt="" />
          :
          <img src={leorodney} className="h-24 w-24 object-cover bg-center bg-no-repeat opacity-40" alt="Leorodney Logo" />
        }
          </div>
        <a download={"leorodney - Art Prompt"} href={img} className="px-4 py-2 w-full text-center text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]">Download</a>
    </section>
  )
}
