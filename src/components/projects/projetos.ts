 export interface Projeto {
  image: string; 
  title: string; 
  description: string;
  link?: string;
}

export const projetos: Projeto[] = [
  {
    image: '/notesapp.png',
    title: 'Rocketnotes',
    description: 'Projeto desenvolvido para gerenciamento de filmes',
    link: 'https://rocketseat-note.netlify.app/'
  },
  {
    image: '/204163350-1d4c8a96-f68a-4eb0-aa8e-5343e2681749.png',
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2...',
    link: 'https://food-explorer-ts.netlify.app/'
  },
  
];
