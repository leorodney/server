import Prompt from "./Prompt"
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../interfaces/store";
import { useEffect } from "react";
import axios from "axios";
import { setPrompts } from "../store/promptsSlice";
import { setStatus } from "../store/productionSlice";

export default function ShowCases() {
  const { search, prompts } = useSelector((state: StoreState) => state.prompts);
  const { username } = useSelector((state: StoreState) => state.user);
  const { fetching } = useSelector((state: StoreState) => state.production.status);
  const dispatch = useDispatch();

  // load the prompts from the server and set them to the store
  useEffect(() => {
    // fetch the prompts from the server
    const fetchPrompts = async () => {
      try {
        dispatch(setStatus({fetching: true}));
        const { data } = await axios.get(`${import.meta.env.VITE_LOCAL_SERVER}:${import.meta.env.VITE_LOCAL_PORT}/showcases`, {withCredentials: true});
        // set the prompts to the store
        dispatch(setPrompts(data));
      } catch (error) {
        console.error(error);

      }finally{
        dispatch(setStatus({fetching: false}));
      }
    }
    fetchPrompts();
  }, []);

  return (
    <>
    {
      search ? <h2 className="ml-6 my-6 text-2xl font-medium dark:text-white">The Community Showcases For: "<span className="text-[var(--clr-p)] underline">{search}</span>"</h2> 
      : <h2 className="ml-6 my-6 text-2xl font-medium dark:text-white">The Community Showcases:</h2>
    }
    <section className="w-screen grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {
          fetching ? <Loader size={20} theme="dark"/> :
          // reversing the prompts enable to spotlight the new published prompts
          [...prompts].reverse().map((prompt, index) => (
            <Prompt
              key={index}
              img={prompt.img}
              author={username}
              value={prompt.value}
              downloads={prompt.downloads}
              likes={prompt.likes}
            />
          ))
        }
    </section>
    </>
  )
}
