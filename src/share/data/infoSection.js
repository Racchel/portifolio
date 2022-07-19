/** infoSection */
import { assets } from '../../assets'


const textualDataPT = [
   {
      id: 'about',
      topLine: 'ainda não sei',
      headLine: 'Sobre mim',
      description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
      alt: 'Foto da autora'
   },
   {
      id: 'projects',
      topLine: 'ainda não sei',
      headLine: 'Meus projetos',
      description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
      alt: 'Imagem ilustrativa para representar uma mulher realizando seus projetos',
   },
   {
      id: 'blog',
      topLine: 'ainda não sei',
      headLine: 'Meu blog',
      description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
      alt: 'Imagem ilustrativa para representar uma mulher escrevendo um post para um blog',
   }
]

const textualDataEn = [
   {
      id: 'about',
      topLine: 'ainda não sei',
      headLine: 'About me',
      description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
      alt: 'Foto da autora'
   },
   {
      id: 'projects',
      topLine: 'ainda não sei',
      headLine: 'My projects',
      description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
      alt: 'Imagem ilustrativa para representar uma mulher realizando seus projetos',
   },
   {
      id: 'blog',
      topLine: 'ainda não sei',
      headLine: 'My blog',
      description: `is simply dummy text of the printing and typesetting industry. 
   has been the industry's standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
   It has survived not only five centuries, but also the leap into electronic typesetting, remaining `,
      alt: 'Imagem ilustrativa para representar uma mulher escrevendo um post para um blog',
   }
]

const commonData = [
   {
      id: 'about',
      light: false,
      imgStart: false,
      img: assets.images.racchel,
   },
   {
      id: 'projects',
      light: true,
      imgStart: true,
      img: assets.images.projects,
   },
   {
      id: 'blog',
      light: false,
      imgStart: false,
      img: assets.images.blog,
   }
]

function createObjectByLanguage(arrayOfTextualDataByLanguage, commonDataArray) {

   return arrayOfTextualDataByLanguage.map(textualData => {
      let commonDataIndex = commonDataArray.findIndex(item => item.id === textualData.id)

      return {
         id: textualData.id,
         topLine: textualData.topLine,
         headLine: textualData.headLine,
         description: textualData.description,
         img: commonDataArray[commonDataIndex].img,
         alt: textualData.alt,
         imgStart: commonDataArray[commonDataIndex].imgStart,
         light: commonDataArray[commonDataIndex].light,
      }
   })
}

const dataPT = createObjectByLanguage(textualDataPT, commonData)
const dataEn = createObjectByLanguage(textualDataEn, commonData)

export const infoSection = {
   pt: {
      about: dataPT.find(item => item.id === 'about'),
      projects: dataPT.find(item => item.id === 'projects'),
      blog: dataPT.find(item => item.id === 'blog')
   },
   en: {
      about: dataEn.find(item => item.id === 'about'),
      projects: dataEn.find(item => item.id === 'projects'),
      blog: dataEn.find(item => item.id === 'blog')
   },
}
