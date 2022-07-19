/** infoSection */
import { assets } from '../../assets'


/** portugues */
const ptAbout = {
   id: 'about',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'Sobre mim',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   imgStart: false,
   img: assets.images.racchel,
   alt: 'Foto da autora'
}


const ptProjects = {
   id: 'projects',
   light: true,
   topLine: 'ainda não sei',
   headLine: 'Meus projetos',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   imgStart: true,
   img: assets.images.projects,
   alt: 'Imagem ilustrativa para representar uma mulher realizando seus projetos',
}


const ptBlog = {
   id: 'blog',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'Meu blog',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   imgStart: false,
   img: assets.images.blog,
   alt: 'Imagem ilustrativa para representar uma mulher escrevendo um post para um blog',
}

/** ingles */

const enAbout = {
   id: 'about',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'About me',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   imgStart: false,
   img: assets.images.racchel,
   alt: 'Foto da autora'
}


const enProjects = {
   id: 'projects',
   light: true,
   topLine: 'ainda não sei',
   headLine: 'My projects',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   imgStart: true,
   img: assets.images.projects,
   alt: 'Imagem ilustrativa para representar uma mulher realizando seus projetos',
}


const enBlog = {
   id: 'blog',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'My blog',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   imgStart: false,
   img: assets.images.blog,
   alt: 'Imagem ilustrativa para representar uma mulher escrevendo um post para um blog',
}


export const infoSection = {
   pt: {
      about: ptAbout,
      projects: ptProjects,
      blog: ptBlog
   },
   en: {
      about: enAbout,
      projects: enProjects,
      blog: enBlog
   },
}
