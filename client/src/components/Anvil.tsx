import axios from "axios";
import React from "react";
import { Submit } from "../interfaces/form";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../interfaces/store";
import { setPrompt, setStatus } from "../store/productionSlice";

export default function Anvil() {
  const { prompt, status } = useSelector((state: StoreState) => state.production);
  const dispatch = useDispatch();

  const capturePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt({...prompt, value: e.target.value});
  }

  const generatePrompt : Submit = async (e) => {
    e.preventDefault();
    if(!prompt.value) return alert("Please enter a prompt");
    try{
      setStatus({generating: true, publishing: false});
      const { data } = await axios.post(`${import.meta.env.VITE_LOCAL_SERVER}:${import.meta.env.VITE_LOCAL_PORT}/production`, {prompt: prompt.value});
      console.log(data);
      setPrompt({...prompt, img: `data:image/jpg;base64,${data.img}`});
    }catch{
      console.error("Error generating prompt");
      alert("Error while generating prompt, please try again later in 1 minute");
    }finally{
      setStatus({generating: false, publishing: false});
    }
  }

  return (
    <form onSubmit={generatePrompt} className="h-full w-1/2 px-2 flex items-center justify-center gap-4 flex-col ">
        <div className="h-full w-full relative flex items-center">
            <textarea onChange={capturePrompt} className="w-full h-full px-6 py-4 text-black bg-white drop-shadow-md rounded-lg focus:outline-[var(--clr-p)]" cols={30} rows={10} placeholder="Start prompting here..."></textarea>
            <button className="absolute right-2 bottom-2 px-4 py-2 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]" type="button">Surpris Me</button>
        </div>
        <div className="w-full flex justify-between items-center gap-4">
            <button className="h-full w-full px-4 py-2 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]" type="submit">Generate</button>
            <button className="h-full w-full px-4 py-2 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]" type="button" title="Publish your generated prompt to community">Publish</button>
        </div>
    </form>
  )
}
