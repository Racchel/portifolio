import { assets } from '../../assets'

const one = {
   id: 'about',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'Sobre mim',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   buttonLabel: 'Vamo ver',
   imgStart: false,
   img: assets.images.racchel,
   alt: 'Imagem de mulher'
}


const two = {
   id: 'projects',
   light: true,
   topLine: 'ainda não sei',
   headLine: 'Meus projetos',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   buttonLabel: 'Vamo ver',
   imgStart: true,
   img: assets.images.projects,
   alt: 'Imagem de mulher',
}


const three = {
   id: 'blog',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'Blog',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   buttonLabel: 'Vamo ver',
   imgStart: false,
   img: assets.images.blog,
   alt: 'Imagem de mulher',
}

const infoSection = {
   one,
   two,
   three
}

export const Data = {
   infoSection
}