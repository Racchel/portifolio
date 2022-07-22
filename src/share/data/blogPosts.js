// import { CustomImage } from '../../components'

const textualDataPT = [
   {
      id: 1,
      title: 'ODS',
      subtitle: 'Data: 22/07/2022 | Autora: Racchel Velasco',
      description: `
      Primeiro post do blog! Vamos falar sobre alguns objetivos de desenvolvimento
      sustentável para a cidade de Presidente Figueiredo.`,
      buttonLabel: 'ver post',
   },
]

const textualDataEn = [
   {
      id: 1,
      title: 'ODS',
      subtitle: 'Data: 22/07/2022 | Autora: Racchel Velasco',
      description: `
      Primeiro post do blog! Vamos falar sobre alguns objetivos de desenvolvimento
      sustentável para a cidade de Presidente Figueiredo.`,
      buttonLabel: 'ver post',

   }
]

const commonData = [
   {
      id: 1,
      media: '',
      link: '/blog/post/1',
   }
]

function createObjectByLanguage(arrayOfTextualDataByLanguage, commonDataArray) {

   return arrayOfTextualDataByLanguage.map(textualData => {
      let commonDataIndex = commonDataArray.findIndex(item => item.id === textualData.id)

      return {
         id: textualData.id,
         title: textualData.title,
         subtitle: textualData.subtitle,
         description: textualData.description,
         buttonLabel: textualData.buttonLabel,
         media: commonDataArray[commonDataIndex].media,
         link: commonDataArray[commonDataIndex].link
      }
   })
}

const dataPT = createObjectByLanguage(textualDataPT, commonData)
const dataEn = createObjectByLanguage(textualDataEn, commonData)

export const blogPosts = {
   pt: {
      posts: dataPT,
   },
   en: {
      posts: dataEn,
   },
}
