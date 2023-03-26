import HeroBG from '../assets/HeroBG.png';
import leorodney from '../assets/leorodney.png';
export default function Hero() {
  return (
    <main className='h-screen w-screen  flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat backdrop:brightness-75' style={{backgroundImage: `url(${HeroBG})`}}>
      <img src={leorodney} className='w-56' alt="leorodney logo" />
      <h1  className='text-white text-7xl font-thin font-serif' >LEORRDONEY</h1>
      <p className='text-white'>Ai image generator based on dall-e openai</p>
      <div className='flex items-baseline pt-8 pb-12'>
        <input className='' type="text" placeholder='search in the community...'/>
        <button className='text-white'>Generate</button>
      </div>
    </main>
  )
}
