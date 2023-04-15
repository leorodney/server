import { useDispatch, useSelector } from 'react-redux';
import Anvil from './Anvil';
import Projection from './Projection';
import { StoreState } from '../interfaces/store';
import { useEffect, useRef } from 'react';
import { setVisibility } from '../store/productionSlice';

export default function Production() {
  // hide the production component if the visibility is false in the store by clicking outside the production component
  const dispatch = useDispatch();
  const { visibility } = useSelector((state: StoreState) => state.production);
  const productionRef = useRef<HTMLElement>(null);

  const hideProduction = (e: any) => {
    if(productionRef && e.target?.id !== "production-visibility" && !productionRef.current?.contains(e.target as Node)) {
      dispatch(setVisibility(false));
    }
  }
  
  useEffect(() => {
    document.addEventListener('click', hideProduction);
    // prevent scrolling when the production component is visible
    if(visibility) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.removeEventListener('click', hideProduction);
  }, [visibility]);

  return (
    visibility ?
    <section className="fixed top-0 left-0 z-[1000] h-screen w-screen flex items-center justify-center flex-col bg-gray-800 bg-opacity-40 backdrop-blur-sm">
        <section ref={productionRef} className='h-[540px] w-[75%] px-6 py-8 flex items-center gap-4 bg-gray-200 rounded-lg'>
          <Projection/>
          <Anvil/>
        </section>
    </section>
    : <></>    
  )
}
