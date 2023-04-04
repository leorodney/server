import { Loader } from "../interfaces/loader";
import logoL from '../assets/leorodney-w.png';
import logoB from '../assets/leorodney-b.png';

export default function Loader({theme, size}: Loader) {
  return (
    <div className={`h-${size} w-${size} animate-spin-slow bg-center bg-contain bg-no-repeat`} style={{backgroundImage: `url(${theme === "dark" ? logoB : logoL})`}}></div>
  )
}
