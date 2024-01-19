 export interface Projeto {
  image: string; 
  title: string; 
  description: string;
  link?: string;
}

export const projetos: Projeto[] = [
  {
    image: '/todo-list.png',
    title: 'To-do list',
    description: 'Aplicativo web e mobile de lista de tarefas',
    link: 'https://todo-list-phi-sandy.vercel.app/'
  },
  
  {
    image: '/Screenshot from 2024-01-16 21-07-44.png',
    title: 'THSC Links',
    description: 'Links úteis para potencializar seu Instagram!',
    link: 'https://thsclinks.netlify.app/'
  },
  {
    image: '/204163350-1d4c8a96-f68a-4eb0-aa8e-5343e2681749.png',
    title: 'Food explorer',
    description: 'Sistema de cardápio e pedidos para restaurante',
    link: 'https://food-explorer-ts.netlify.app/'
  },
  {
    image: '/notesapp.png',
    title: 'Rocket notes',
    description: 'Projeto desenvolvido para gerenciamento de filmes',
    link: 'https://rocketseat-note.netlify.app/'
  }
  
 
  
];
