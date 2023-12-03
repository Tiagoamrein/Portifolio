

export default function Header(){

  return(
    
    <div className='flex justify-between items-center px-5 py-4 w-screen h-full  '>
    <h1 className="text-xl font-bold">THSCsystem</h1>
    <div className='flex gap-2 justify-center'>
      <button className='hover:text-sky-900  px-1 py-1 rounded-lg'>Home</button>
      <button className='hover:text-sky-900 px-2 py-1 rounded-lg'>Projetos</button>
      <button className='hover:text-sky-900 px-1 py-1 rounded-lg'>Soluções</button>
      <button className='hover:text-sky-900 px-1 py-1 rounded-lg'>Sobre</button>
    </div>
    <button className='  bg-sky-700 font-semibold text-slate-200 text-base border-2 border-transparent px-2 py-1 rounded-lg hover:bg-white hover:border-2 hover:border-slate-400 hover:text-black  '>Contato</button>
  </div>
  
  )
}