"use client"
import Header from '@/components/header'
import {ProjectItem} from '@/components/projects';
import Image from 'next/image'
import { useState } from 'react';
import Typewriter from "typewriter-effect";
import { IconContext } from "react-icons";
import Slider from "react-slick";
import { FaLaptopCode,FaInstagram,FaGithub,FaLinkedin,FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { InputArea } from './styles';
import { Projeto, projetos } from '@/components/projects/projetos';


interface ProjectItemType {
  title: string;
  bannerLink: string;
  description: string;
};

export default function Home(): JSX.Element {
  return (
    <main className='w-screen overflow-x-hidden flex gap-3'>
   <div className='h-full w-full'>
    <Header/>
    <div className='flex items-center justify-around'>
      <div className='w-60 text-xs px-3'>
    <Typewriter
 onInit={(typewriter) => {
     typewriter.start()
         .typeString("Bem-vindo à nossa agência! Na THSC, nossa missão é transformar suas ideias em projetos reais e impactantes.")   
 }}
/></div>
    <Image src="/header.png" width="550" height="700" alt='Imagem de uma pessoa sentada mexendo em um notebook' sizes='(max-width: 768px) 30vw'/>
    </div>


    <div className='h-screen mt-9 ml-5 flex flex-col justify-center '>
  <h2 className='text-center text-cyan-900 font-bold text-2xl mb-5'>Soluções</h2>
  <div className='flex flex-wrap gap-4 mt-4'>
    <div className='bg-slate-100 flex flex-col items-center justify-center text-cyan-700 rounded-xl p-4 max-w-md w-full sm:w-auto'>
      <IconContext.Provider value={{ color: 'rgb(181 196 199)', className: 'global-class-name' }}>
        <FaLaptopCode className='w-28 h-28 m-auto' />
      </IconContext.Provider>
      <h1 className='font-bold text-center mt-4'>Desenvolvimento fullStack</h1>
      <p className='text-base text-cyan-700 mt-2 text-center mb-3'>
        Desenvolvemos sites profissionais, blogs, portfólios, landing pages e-commerce.
      </p>
      <button className='bg-sky-700 cursor-pointer font-semibold text-slate-200 text-base px-3 py-1 rounded-lg  max-w-xs hover:bg-sky-800'>
        Contratar
      </button>
    </div>

    <div className='bg-slate-100 flex flex-col items-center justify-center text-cyan-700 rounded-xl p-4 max-w-md w-full sm:w-auto'>
      <IconContext.Provider value={{ color: 'rgb(181 196 199)', className: 'global-class-name' }}>
        <FaLaptopCode className='w-28 h-28 m-auto mt-5' />
      </IconContext.Provider>
      <h1 className='font-bold text-center mt-4'>Design de UI/UX </h1>
      <p className='text-base text-cyan-700 mt-2 text-center mb-3'>
      Desenvolvemos experiências visuais e funcionais que se destacam, impulsionando o sucesso dos nossos clientes.
      </p>
      <button className='bg-sky-700 font-semibold text-slate-300 text-base px-3 py-1 rounded-lg  max-w-xs hover:bg-sky-800'>
        Contratar
      </button>
    </div>
  </div>
</div>



<div className='mt-1'>
    <h2 className='text-center text-cyan-900 font-bold text-2xl '>Projetos</h2>
    <div className=' flex flex-wrap  gap-2 mt-8'>
    
    {projetos.map((projeto: Projeto, index: number) => (
        <ProjectItem
          key={index}
          title={projeto.title}
          image={projeto.image}
          description={projeto.description}
          link={projeto.link}
        />
      ))}
   


    </div>

  
    </div>
<div className=' text-center mt-10'>
    <h2 className=' text-cyan-900 font-bold text-2xl '>Sobre</h2>

<p className='text-ssm mt-5  text-zinc-500 font-semibold leading-2'>Na THSCsystem, estamos comprometidos em oferecer soluções inovadoras e personalizadas para atender às necessidades digitais dos nossos clientes. Fundada com a paixão por criar experiências excepcionais.Nossa missão é ir além das expectativas, transformando ideias em realidade através de um processo colaborativo e focado no cliente. Com uma abordagem centrada no usuário, buscamos não apenas atender, mas superar as metas e objetivos de cada projeto.
 Estamos entusiasmados em fazer parte da jornada de crescimento do seu negócio e em criar experiências digitais memoráveis que inspirem, envolvam e conquistem.
  Junte-se a nós e vamos trasformar sua visão em realidade.</p> 
  
  </div>
 
 
  <div className='flex flex-row mb-2 mt-7 '>
  
    <div className='flex flex-col gap-1 px-2 w-6/12'>
    <h2 className='text-cyan-900 font-bold  text-xl'>Contato</h2>
  <h1>Nome:</h1>
  <input type="text" className='w-36 border-none text-gray-400 bg-slate-200 rounded-lg px-2 focus:outline-none' />
  <h1>Email:</h1>
  <input type="text" className='w-36 border-none text-gray-400 bg-slate-200 rounded-lg px-2 focus:outline-none'/>
  <h1>Mensagem:</h1>
 <InputArea/>

 <button className='bg-sky-700 flex items-center justify-center gap-1 w-28 font-semibold text-slate-300 text-base px-1 py-1 rounded-lg hover:bg-sky-800'>
        Enviar <LuSend/>
      </button>

      </div>
<div className='flex flex-col gap-2'>

<h2 className='text-cyan-900 font-bold text-xl mb-5'>Redes Sociais</h2>
<p className='flex items-center gap-2 text-cyan-900 font-bold text-xs'><FaEnvelope /> Meuemail@gmail.com</p>
<button className='flex items-center gap-2 text-cyan-900 font-bold text-xs'><FaLinkedin />Linkedin</button>
<button className='flex items-center gap-2 text-cyan-800 font-bold text-xs'> <FaInstagram/>Instagram</button>
<button className='flex items-center gap-2 text-cyan-800 font-bold text-xs'><FaGithub />Github</button>
<button className='flex items-center gap-2 text-cyan-800 font-bold text-xs'><FaWhatsapp />Whatsapp</button>
</div>
   </div>
   </div>
   </main>
  
  )
}
