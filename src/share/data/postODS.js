import { GiHealthNormal } from 'react-icons/gi'

const titleDataPT = 'Objetivos de Desenvolvimento Sustentável'
const titleDataEn = titleDataPT

const descriptionDataPT = [
   `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non enim vitae augue lacinia maximus at a magna. 
      Nullam id massa ullamcorper, bibendum neque sed, ultrices nulla. Etiam velit libero, porta ac dolor quis, eleifend 
      consequat libero. Nulla pharetra eu augue vel finibus. Suspendisse pulvinar libero sit amet eleifend semper. 
      Etiam sed mattis purus. Cras nec viverra felis, vel faucibus velit. Maecenas eget turpis eu nisi porttitor interdum. 
      Morbi a nulla quis dui euismod luctus. Sed tincidunt facilisis metus id elementum. Quisque malesuada purus sed nibh laoreet, 
      at volutpat sapien euismod. Quisque hendrerit dignissim metus, sit amet mattis metus iaculis at.`,
   `Aenean vehicula lacus justo, in consequat nibh condimentum eu. Vestibulum tincidunt turpis vitae arcu vestibulum, 
      quis bibendum leo vestibulum. Phasellus dictum augue eget ipsum volutpat, fringilla consequat tellus molestie.
      Suspendisse aliquam sem sed sodales placerat. Donec euismod neque ac felis tristique condimentum. Vestibulum eleifend 
      dictum dui eget pulvinar. Aenean aliquet id ante sit amet viverra. Cras luctus eros eu est tempus aliquet. 
      Nullam condimentum malesuada orci et imperdiet. Sed eget feugiat ligula.`
]

const descriptionDataEn = descriptionDataPT

const textualDataPT = [
   {
      id: 1,
      title: 'Saúde',
      problem: {
         tag: 'Problema:',
         description: 'aaaa'
      },
      solution: {
         tag: 'Solução:',
         description: 'aaaa'
      }
   },
   {
      id: 2,
      title: 'Educação',
      problem: {
         tag: 'Problema:',
         description: 'aaaa'
      },
      solution: {
         tag: 'Solução:',
         description: 'aaaa'
      }
   },
   {
      id: 3,
      title: 'Trabalho',
      problem: {
         tag: 'Problema:',
         description: 'aaaa'
      },
      solution: {
         tag: 'Solução:',
         description: 'aaaa'
      }
   },
   {
      id: 4,
      title: 'Saúde',
      problem: {
         tag: 'Problema:',
         description: 'aaaa'
      },
      solution: {
         tag: 'Solução:',
         description: 'aaaa'
      }
   }
]


const textualDataEn = textualDataPT

const commonData = [
   {
      id: 1,
      icon: <GiHealthNormal />,
      light: false
   },
   {
      id: 2,
      icon: <GiHealthNormal />,
      light: true
   },
   {
      id: 3,
      icon: <GiHealthNormal />,
      light: false
   },
   {
      id: 4,
      icon: <GiHealthNormal />,
      light: true
   }
]

function createObjectByLanguage(arrayOfTextualDataByLanguage, commonDataArray) {

   return arrayOfTextualDataByLanguage.map(textualData => {
      let commonDataIndex = commonDataArray.findIndex(item => item.id === textualData.id)

      return {
         id: textualData.id,
         title: textualData.title,
         problem: textualData.problem,
         solution: textualData.solution,
         icon: commonDataArray[commonDataIndex].icon,
         light: commonDataArray[commonDataIndex].light
      }
   })
}

const dataPT = createObjectByLanguage(textualDataPT, commonData)
const dataEn = createObjectByLanguage(textualDataEn, commonData)

export const postODS = {
   pt: {
      posts: dataPT,
      title: titleDataPT,
      description: descriptionDataPT
   },
   en: {
      posts: dataEn,
      title: titleDataEn,
      description: descriptionDataEn
   },
}















