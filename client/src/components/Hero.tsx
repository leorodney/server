import HeroBG from '../assets/HeroBG.png';
import leorodney from '../assets/leorodney.png';
export default function Hero() {
  return (
    <main className='h-screen w-screen text-white flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat backdrop:brightness-75' style={{backgroundImage: `url(${HeroBG})`}}>
      <img src={leorodney} className='w-56' alt="leorodney logo" />
      <h1 className='text-white text-7xl font-thin font-serif' >LEORDONEY</h1>
      <p className='text-white'>AI image generator based on Dall-E OpenAI</p>
      <div className='flex items-center justify-between'>
        <input className='px-4 py-2 bg-white' type="text" placeholder='search in the community...'/>
        <button className='text-white'>Generate</button>
      </div>
    </main>
  )
}
