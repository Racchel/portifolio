/** infoSection */
import { assets } from '../../assets'


/** portugues */
const ptOne = {
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


const ptTwo = {
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


const ptThree = {
   id: 'blog',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'Meu blog',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   buttonLabel: 'Vamo ver',
   imgStart: false,
   img: assets.images.blog,
   alt: 'Imagem de mulher',
}

/** ingles */

const enOne = {
   id: 'about',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'About me',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   buttonLabel: 'Vamo ver',
   imgStart: false,
   img: assets.images.racchel,
   alt: 'Imagem de mulher'
}


const enTwo = {
   id: 'projects',
   light: true,
   topLine: 'ainda não sei',
   headLine: 'My projects',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   buttonLabel: 'Vamo ver',
   imgStart: true,
   img: assets.images.projects,
   alt: 'Imagem de mulher',
}


const enThree = {
   id: 'blog',
   light: false,
   topLine: 'ainda não sei',
   headLine: 'My blog',
   description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
   buttonLabel: 'Vamo ver',
   imgStart: false,
   img: assets.images.blog,
   alt: 'Imagem de mulher',
}


export const infoSection = {
   pt: {
      one: ptOne,
      two: ptTwo,
      three: ptThree
   },
   en: {
      one: enOne,
      two: enTwo,
      three: enThree
   },
}