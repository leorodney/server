import HeroBG from '../assets/HeroBG.png';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { KeyboardEvent, useState } from 'react';
import { setSearchQuery as setSearchQueryAction } from '../store/promptsSlice';
import { setVisibility } from '../store/productionSlice';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState<string>('' as string);
  const dispatch = useDispatch();

  console.log(searchQuery);

  const searchQueryDispatcher = (e: KeyboardEvent<HTMLInputElement>)=>{
    if(e.key !== 'Enter' || searchQuery == '') return;
    dispatch(setSearchQueryAction(searchQuery));
  }

  return (
    <main className='h-[80vh] w-screen text-white flex items-center justify-center gap-10 flex-col bg-cover bg-center bg-no-repeat backdrop:brightness-75' style={{backgroundImage: `url(${HeroBG})`}}>
      <Header/>
      <div className='h-14 w-[70%] flex items-center justify-between gap-4'>
        <div className='relative h-full w-full flex items-center'>
          <label htmlFor="community-search" className='absolute z-10 left-3 top-1/2 -translate-y-1/2 text-xl text-slate-400'><i className="fi fi-br-search"></i></label>
          <input id='community-search' onChange={e => setSearchQuery(e.target.value)} onKeyDown={searchQueryDispatcher} className='h-full w-full pl-10 pr-4 py-2 text-black bg-white rounded-lg focus:outline-[var(--clr-p)]' type="text" placeholder='Search in the community...'/>
        </div>
        <button id='production-visibility' onClick={() => dispatch(setVisibility(true))} className='h-full px-10 py-2 text-white text-lg transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]'>Generate</button>
      </div>
    </main>
  )
}
