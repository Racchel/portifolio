
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
      mediaType: 'image',
      media: {
         width: '100%',
         height: '150px',
         image: 'https://i.pinimg.com/736x/64/76/c4/6476c44d20118215c301c92ba5166d72.jpg'
      },
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
         mediaType: commonDataArray[commonDataIndex].mediaType,
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
