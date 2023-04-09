import { Prompt } from '../interfaces/prompt'

export default function Prompt({ id, author, img, value, downloads, likes }: Prompt) {
  return (
    <article id={id} className="relative h-64 group flex justify-center items-center rounded-lg overflow-hidden border border-slate-800 bg-slate-800 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${img})`}}>
      <button className='absolute left-2 top-[-50%] group-hover:top-2 px-4 py-1 text-white transition-all hover:scale-[1.02] active:scale-95 rounded-lg bg-[var(--clr-p)]'>Use It</button>
      <div className='absolute w-full py-1 text-white max-h-[60%] bottom-[-120%] bg-slate-900 bg-opacity-[0.7] flex justify-between items-center gap-2 flex-col transition-all group-hover:bottom-0'>
        <div className='w-full px-4 flex justify-between items-center'>
          <h3 className='capitalize text-teal-600'>{author}</h3>       
          <div className='flex justify-between items-center'>
            <button>{downloads}</button>
            <button>{likes}</button>
          </div>
        </div>
        <p className='px-4 text-sm' title={value}>{value}</p>
      </div>
    </article>
  )
}
