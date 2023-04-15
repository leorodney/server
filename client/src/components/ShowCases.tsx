import Prompt from "./Prompt"
import HeroBG from '../assets/HeroBG.png';
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { StoreState } from "../interfaces/store";

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
      searchQuery ? <h2 className="ml-6 my-6 text-2xl font-medium dark:text-white">The Community Showcases For: "<span className="text-[var(--clr-p)] underline">{searchQuery}</span>"</h2> 
      : <h2 className="ml-6 my-6 text-2xl font-medium dark:text-white">The Community Showcases:</h2>
    }
    <section className="px-4 grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        <Prompt
            img={HeroBG} 
            author="whybe" 
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum sf sfsfsf serer"
            downloads={266}
            likes={4555}
            />
            {/* <Loader size={20} theme="dark"/> */}
    </section>
    </>
  )
}
