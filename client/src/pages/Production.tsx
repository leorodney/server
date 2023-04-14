import productionBG from '../assets/production.jpeg';
import Anvil from '../components/Anvil';
import Header from '../components/Header';
import Projection from '../components/Projection';
import useAuthorization from '../hooks/authorization';
import { useNavigate } from 'react-router-dom';

export default function Production() {
  const authorization = useAuthorization();
  const navigate = useNavigate();
  !authorization.isAuthenticated ? navigate("/login") : null;

  return (
    <main className="h-screen w-screen flex items-center justify-center flex-col bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${productionBG})`}}>
      {/* <Header/> */}
      <section className='h-[540px] w-[75%] px-6 py-8 flex items-center gap-4 bg-gray-200 rounded-lg'>
        <Projection/>
        <Anvil/>
      </section>
    </main>
  )
}
