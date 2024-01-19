import { Link } from 'react-scroll';

export default function Header(){

  return(
    
    <div className='flex justify-between items-center px-2 py-4 w-screen sm:px-4 '>
      <div className='flex gap-1 items-center'>
    <h1 className="text-smm font-extrabold  min-[360px]:text-sm sm:text-2xl">THSC</h1>
    <h1 className='text-smm font-medium  min-[360px]:text-sm sm:text-2xl'>SYSTEM</h1></div>
    <div className='flex gap-1 justify-center text-ssm  sm:text-base'>
      
      <Link to='home' duration={500}><button className='hover:text-sky-900  rounded-lg'>Home</button></Link>
      <Link to='projetos'  duration={500}><button className='hover:text-sky-900  rounded-lg'>Projetos</button></Link>
      <Link to='soluçoes'  duration={500}><button className='hover:text-sky-900  rounded-lg'>Soluções</button></Link>
      <Link to='sobre'  duration={100}><button className='hover:text-sky-900 rounded-lg'>Sobre</button></Link>
    </div>
   <Link to='contato'> <button className='  bg-sky-700 text-ssm px-1 font-semibold text-slate-200  border-2 border-transparent  rounded-lg hover:bg-white hover:border-2 hover:border-slate-400 hover:text-black min-[360px]:text-xs sm:text-base py-1'>Contato</button></Link>
  </div>
  
  )
}