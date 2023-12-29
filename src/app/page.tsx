"use client"
import Header from '@/components/header'
import {ProjectItem} from '@/components/projects';
import Image from 'next/image'

import React, { useRef, useState } from 'react';
import Typewriter from "typewriter-effect";
import { IconContext } from "react-icons";
import Slider from "react-slick";

import { FaLaptopCode,FaInstagram,FaGithub,FaLinkedin,FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { InputArea } from './styles';

import { Projeto, projetos } from '@/components/projects/projetos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Element } from 'react-scroll';
import ReactWhatsappButton from 'react-whatsapp-button';
import axios from 'axios';

import emailjs from '@emailjs/browser';





interface Props {
  title: string;
  bannerLink: string;
  description: string;
}

export default function Home(){

  var ProjectsSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow:4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow:3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
       {
        breakpoint: 1318,
        settings: {
          slidesToShow:3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  var SoluctionsSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

const form: any=useRef()

var templateParams={
  name: name,
  message: message,
  email: email
}
  const handleClick =(e:any) => {
    e.preventDefault()
    emailjs.sendForm("service_pwp2q34","template_oa2s4uk",form.current,"MFfReyUntlIQZmi18").then(()=> {console.log('funcionou')}).catch(console.error)

    e.target.reset()
  };
  return (
    <main className='w-screen overflow-x-hidden flex gap-3'>
      <ReactWhatsappButton
        countryCode="55"
        phoneNumber="54999887360"
        animated
      />
   <div className='h-full w-full'>
    <Header/>
    <div className='flex items-center justify-around'>
      <div className='w-60 text-xs px-3 sm:text-lg lg:text-xl lg:w-80'>
    <Typewriter
 onInit={(typewriter) => {
     typewriter.start()
         .typeString("Bem-vindo à nossa agência! Na THSC, nossa missão é transformar suas ideias em projetos reais e impactantes.")   
 }}
/></div>
    <Image src="/header.png" width="550" height="700" alt='Imagem de uma pessoa sentada mexendo em um notebook' sizes='(max-width: 768px) 30vw'/>
    </div>
<Element name='soluções'>
<h2 className='text-center text-cyan-900 font-bold text-2xl mb-9'>Soluções</h2> 

    
  <div className='flex w-full items-center mb-4'>
  <Slider {...SoluctionsSlider} className='w-screen '>
    
    <div className='bg-slate-100 flex flex-col text-center items-center h-60 w-1/2 py-12 justify-center text-cyan-700 rounded-xl '>
      <IconContext.Provider value={{ color: 'rgb(181 196 199)', className: 'global-class-name' }}>
        <FaLaptopCode className='w-16 h-11 m-auto' />
      </IconContext.Provider>
      <h1 className='font-bold text-center text-sm mt-3'>Desenvolvimento fullStack</h1>
      <p className='text-xs text-cyan-700 mt-2 text-center mb-3'>
        Desenvolvemos sites profissionais, blogs, portfólios, landing pages e-commerce.
      </p>
      <button className='bg-sky-700 cursor-pointer font-semibold text-slate-200 text-base px-3 py-1 rounded-lg  max-w-xs hover:bg-sky-800'>
        Contratar
      </button>
    </div>
    
    <div className='bg-slate-100 flex flex-col  text-center ml-1 h-60 py-12 items-center  justify-center text-cyan-700 rounded-xl lg:ml-4 '>
      <IconContext.Provider value={{ color: 'rgb(181 196 199)', className: 'global-class-name' }}>
        <FaLaptopCode className='w-16 h-11 m-auto' />
      </IconContext.Provider>
      <h1 className='font-bold text-center text-sm mt-3'>Design de UI/UX </h1>
      <p className='text-xs text-cyan-700 mt-2 text-center mb-3'>
      Desenvolvemos experiências visuais e funcionais que se destacam, impulsionando o sucesso dos nossos clientes.
      </p>
      <button className='bg-sky-700 font-semibold text-slate-300 text-base px-3 py-1 rounded-lg  max-w-xs hover:bg-sky-800'>
        Contratar
      </button>
    </div>
    </Slider>
</div>
</Element>


<div className='mt-1'>
 <Element name='projetos'>   <h2 className='text-center text-cyan-900 font-bold text-2xl mt-10'>Projetos</h2></Element>
  <div className='flex flex-row'>
      <Slider {...ProjectsSlider} className=' w-full flex'>
        {projetos.map((projeto, index) => (
          <div key={index} className=' p-12 min-[375px]:p-16'>
            <ProjectItem
              title={projeto.title}
              image={projeto.image}
              description={projeto.description}
              link={projeto.link}
            />
          </div>
        ))}
      </Slider>
    </div>

  
    </div>
<div className=' text-center mt-10'>
<Element name='sobre'>  <h2 className=' text-cyan-900 font-bold text-2xl '>Sobre</h2></Element>

<p className='text-ssm mt-5 px-2  text-zinc-500 font-semibold leading-2 sm:text-lg sm:leading-8 sm:mt-10 lg:text-xl lg:w-10/12 lg:m-auto lg:mt-10'>Na THSCsystem, estamos comprometidos em oferecer soluções inovadoras e personalizadas para atender às necessidades digitais dos nossos clientes. Fundada com a paixão por criar experiências excepcionais.Nossa missão é ir além das expectativas, transformando ideias em realidade através de um processo colaborativo e focado no cliente. Com uma abordagem centrada no usuário, buscamos não apenas atender, mas superar as metas e objetivos de cada projeto.
 Estamos entusiasmados em fazer parte da jornada de crescimento do seu negócio e em criar experiências digitais memoráveis que inspirem, envolvam e conquistem.
  Junte-se a nós e vamos trasformar sua visão em realidade.</p> 
  
  </div>
 
  
  <div className='flex flex-row mb-2 mt-7 '>
  
    <div className='flex flex-col gap-1 px-3 w-6/12'>
      <Element name='contato'>
    <h2 className='text-cyan-900 font-bold  text-xl'>Contato</h2></Element>
    <form ref={form} onSubmit={handleClick}>
  <h1>Nome:</h1>
  <input type="text" value={name}  name='user_name'  onChange={(e)=> setName(e.target.value)} className='w-36 border-none text-gray-400 bg-slate-200 rounded-lg px-2 focus:outline-none' />
  <h1>Email:</h1>
  <input type="text" value={email}   name='user_email' onChange={(e)=> setEmail(e.target.value)} className='w-36 border-none text-gray-400 bg-slate-200 rounded-lg px-2 focus:outline-none'/>
  <h1>Mensagem:</h1>
 <InputArea value={message}  name='user_message'  onChange={(e)=> setMessage(e.target.value)}/>

 <button type='submit'  className='bg-sky-700 flex items-center justify-center gap-1 w-28 font-semibold text-slate-300 text-base px-1 py-1 rounded-lg hover:bg-sky-800'>
        Enviar <LuSend/>
      </button>
      </form>
      </div>
<div className='flex flex-col gap-2'>

<h2 className='text-cyan-900 font-bold text-xl mb-5'>Redes Sociais</h2>
<p className='flex items-center gap-2 text-cyan-900 font-bold text-xs sm:text-base'><FaEnvelope /> Meuemail@gmail.com</p>
<button className='flex items-center gap-2 text-cyan-900 font-bold text-xs sm:text-base'><FaLinkedin />Linkedin</button>
<button className='flex items-center gap-2 text-cyan-800 font-bold text-xs sm:text-base'> <FaInstagram/>Instagram</button>
<button className='flex items-center gap-2 text-cyan-800 font-bold text-xs sm:text-base'><FaGithub />Github</button>

</div>
   </div>
   </div>
   </main>
  
  )
}
