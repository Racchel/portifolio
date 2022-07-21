/** infoSection */
import { assets } from '../../assets'


const textualDataPT = [
   {
      id: 'about',
      topLine: 'Saiba mais',
      headLine: 'Sobre mim',
      description: [`Oii gente, tudo tranquilo? Eu me chamo Racchel Velasco, sou gaúcha (morando no interior do Amazonas :0), tenho 19 anos e amooo programar.`,
         `Hoje, atuo como desenvolvedora Javascript Frontend e Backend, mas estou sempre aprendendo coisas novas. 
      Enfimmm... sinta-se muito bem-vindo(a) ao meu site! E fica a vontade para entrar em contato!!!`
      ],
      alt: 'Foto da autora.'
   },
   {
      id: 'projects',
      topLine: 'Um pouco sobre',
      headLine: 'Meus projetos',
      description: [`Logo abaixo, você vai encontrar alguns dos projetos que eu desenvolvi ao longo da minha trajetória como desenvolvedora.
      Com o tempo, pretendo melhorar esses projetos! E, caso você quiser contribuir comigo, pode mandar um PR lá no meu Github. ;)`],
      alt: 'Imagem ilustrativa para representar uma mulher realizando seus projetos.',
   },
   {
      id: 'blog',
      topLine: 'Meu futuro',
      headLine: 'Blog',
      description: [`Deixei essa seção especialmente separada para falar do meu futuro blog! Este é um projeto que quero fazer faz bastante tempo.
      Aos poucos, vou construindo e postando vídeos no meu LinkedIn e Instragram sobre o processo de desenvolvimento, passo a passo.
      Espero que gostem! <3`],
      alt: 'Imagem ilustrativa para representar uma mulher escrevendo um post para um blog.',
   }
]

const textualDataEn = [
   {
      id: 'about',
      topLine: 'Learn more',
      headLine: 'About me',
      description: [`Oii gente, tudo tranquilo? Eu me chamo Racchel Velasco, sou gaúcha (morando no interior do Amazonas :0), tenho 19 anos e amooo programar.`,
         `Hoje, atuo como desenvolvedora Javascript Frontend e Backend, mas estou sempre aprendendo coisas novas. 
      Enfimmm... sinta-se muito bem-vindo(a) ao meu site! E fica a vontade para entrar em contato!!!`],
      alt: 'Foto da autora.'
   },
   {
      id: 'projects',
      topLine: 'A little about',
      headLine: 'My projects',
      description: [`Logo abaixo, você vai encontrar alguns dos projetos que eu desenvolvi ao longo da minha trajetória como desenvolvedora.
      Com o tempo, pretendo melhorar esses projetos! E, caso você quiser contribuir comigo, pode mandar um PR lá no meu Github. ;)`],
      alt: 'Imagem ilustrativa para representar uma mulher realizando seus projetos.',
   },
   {
      id: 'blog',
      topLine: 'My future',
      headLine: 'Blog',
      description: [`Deixei essa seção especialmente separada para falar do meu futuro blog! Este é um projeto que quero fazer faz bastante tempo.
      Aos poucos, vou construindo e postando vídeos no meu LinkedIn e Instragram sobre o processo de desenvolvimento, passo a passo.
      Espero que gostem! <3`],
      alt: 'Imagem ilustrativa para representar uma mulher escrevendo um post para um blog.',
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
