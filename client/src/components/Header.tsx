import leorodney from '../assets/leorodney-w.png';

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-10 flex-col">
        <img src={leorodney} className='w-48' alt="leorodney logo" />
        <h1 className='text-white text-8xl font-thin font-serif' >LEORDONEY</h1>
        <p className='text-gray-200 text-xl'>AI image generator based on Dall-E OpenAI</p>
    </header>
  )
}
