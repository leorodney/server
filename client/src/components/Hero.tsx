import { Link } from 'react-router-dom';
import HeroBG from '../assets/HeroBG.png';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { KeyboardEvent, useState } from 'react';
import { setSearchQuery as setSearchQueryAction } from '../store/promptsSlice';

export default function Hero() {
  return (
    <main className='h-[80vh] w-screen text-white flex items-center justify-center gap-10 flex-col bg-cover bg-center bg-no-repeat backdrop:brightness-75' style={{backgroundImage: `url(${HeroBG})`}}>
      <Header/>
      <div className='h-14 w-[70%] flex items-center justify-between gap-4'>
        <input className='h-full w-full px-4 py-2 text-black bg-white rounded-lg focus:outline-[var(--clr-p)]' type="text" placeholder='Search in the community...'/>
        <button className='h-full px-10 py-2 text-white text-lg transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]'><Link to={"/production"}>Generate</Link></button>
      </div>
    </main>
  )
}
