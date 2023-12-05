

export default function Header(){

  return(
    
    <div className='flex justify-between items-center  py-4 w-screen h-full  '>
    <h1 className="text-xs font-bold">THSCsystem</h1>
    <div className='flex gap-2 justify-center text-ssm'>
      <button className='hover:text-sky-900  rounded-lg'>Home</button>
      <button className='hover:text-sky-900  rounded-lg'>Projetos</button>
      <button className='hover:text-sky-900  rounded-lg'>Soluções</button>
      <button className='hover:text-sky-900 rounded-lg'>Sobre</button>
    </div>
    <button className='  bg-sky-700 text-ssm px-1 py-1 font-semibold text-slate-200  border-2 border-transparent  rounded-lg hover:bg-white hover:border-2 hover:border-slate-400 hover:text-black  '>Contato</button>
  </div>
  
  )
}