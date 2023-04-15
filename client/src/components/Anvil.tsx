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
    dispatch(setPrompt({...prompt, value: e.target.value}))
  }

  const generatePrompt : Submit = async (e) => {
    e.preventDefault();
    if(!prompt.value) return alert("Please enter a prompt");
    try{
      dispatch(setStatus({generating: true}));
      const { data } = await axios.post(`${import.meta.env.VITE_LOCAL_SERVER}:${import.meta.env.VITE_LOCAL_PORT}/production`, {prompt: prompt.value}, {withCredentials: true});
      console.log(data);
      dispatch(setPrompt({...prompt, img: `data:image/jpg;base64,${data.img}`}));
    }catch{
      console.error("Error generating prompt");
      alert("Error while generating prompt, please try again later in 1 minute");
    }finally{
      dispatch(setStatus({generating: false}));
    }
  }

  const publishPrompt : Submit = async () => {
    if(!prompt.value) return alert("Please enter a prompt");
    try{
      dispatch(setStatus({publishing: true}));
      const { data } = await axios.post(`${import.meta.env.VITE_LOCAL_SERVER}:${import.meta.env.VITE_LOCAL_PORT}/prompt`, {value: prompt.value, img: prompt.img}, {withCredentials: true});
      console.log(data);
    }catch{
      console.error("Error publishing prompt");
      alert("Error while publishing prompt, please try again later in 1 minute");
    }finally{
      dispatch(setStatus({publishing: false}));
    }
  }

  const surprisemePrompt : Submit = async () => {
    try{
      dispatch(setStatus({prompting: true}));
      const { data } = await axios.get(`${import.meta.env.VITE_LOCAL_SERVER}:${import.meta.env.VITE_LOCAL_PORT}/surpriseme`);
      console.log(data);
      dispatch(setPrompt({...prompt, value: data.prompt}));
    }catch{
      console.error("Error generating prompt");
      alert("Error while generating prompt, please try again later in 1 minute");
    }finally{
      dispatch(setStatus({prompting: false}));
    }
  }

  return (
    <form onSubmit={generatePrompt} className="h-full w-1/2 px-2 flex items-center justify-center gap-4 flex-col ">
        <div className="h-full w-full relative flex items-center">
            <textarea onChange={capturePrompt} value={prompt.value} className="w-full h-full px-6 py-4 text-black bg-white drop-shadow-md rounded-lg focus:outline-[var(--clr-p)]" cols={30} rows={10} placeholder="Start prompting here..."></textarea>
            <button onClick={surprisemePrompt} className="absolute right-4 bottom-4 px-4 py-2 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]" type="button">Surpris Me</button>
        </div>
        <div className="w-full flex justify-between items-center gap-4">
            <button disabled={status.publishing} className={`disabled:bg-black h-full w-full px-4 py-2 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]`} type="submit">Generate</button>
            <button onClick={publishPrompt} disabled={status.generating} className={`disabled:bg-black h-full w-full px-4 py-2 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]`} type="button" title="Publish your generated prompt to community">Publish</button>
        </div>
    </form>
  )
}
