

export default function Header(){

  return(
    
    <div className='flex justify-between items-center px-2 py-4 w-screen sm:px-4 '>
    <h1 className="text-xs font-bold min-[360px]:text-sm sm:text-2xl">THSCsystem</h1>
    <div className='flex gap-1 justify-center text-ssm  sm:text-base gap-2'>
      <button className='hover:text-sky-900  rounded-lg'>Home</button>
      <button className='hover:text-sky-900  rounded-lg'>Projetos</button>
      <button className='hover:text-sky-900  rounded-lg'>Soluções</button>
      <button className='hover:text-sky-900 rounded-lg'>Sobre</button>
    </div>
    <button className='  bg-sky-700 text-ssm px-1 font-semibold text-slate-200  border-2 border-transparent  rounded-lg hover:bg-white hover:border-2 hover:border-slate-400 hover:text-black min-[360px]:text-xs sm:text-base py-1'>Contato</button>
  </div>
  
  )
}