import Prompt from "./Prompt"
import HeroBG from '../assets/HeroBG.png';
import Loader from "./Loader";

export default function ShowCases() {
  return (
    <>
    <h2 className="ml-6 my-6 text-2xl text-white">The Community Showcases:</h2>
    <section className="relative px-4 grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        <Prompt
            img={HeroBG} 
            author="whybe" 
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
            downloads={266}
            likes={4555}
            />
            {/* <Loader size={20} theme="dark"/> */}
    </section>
    </>
  )
}
