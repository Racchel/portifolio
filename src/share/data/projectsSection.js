import { AiFillCalculator, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillStopwatchFill } from 'react-icons/bs'
import { MdPets } from 'react-icons/md'
import { ImTarget } from 'react-icons/im'
import { RiSwordFill } from 'react-icons/ri'

const descriptionPT = 'Alguns dos meus projetinhos :3'
const descriptionEn = 'Alguns dos meus projetinhos :3'


const textualDataPT = [
   { id: 1, title: 'Calculadora', description: '' },
   { id: 2, title: 'Cronômetro', description: '' },
   { id: 3, title: 'Contador', description: '' },
   { id: 4, title: 'PetLove', description: '' },
   { id: 5, title: 'ODS', description: '' },
   { id: 6, title: 'Star Wars', description: '' }
]

const textualDataEn = [
   { id: 1, title: 'Calculator', description: '' },
   { id: 2, title: 'Stopwatch', description: '' },
   { id: 3, title: 'Counter', description: '' },
   { id: 4, title: 'PetLove', description: '' },
   { id: 5, title: 'ODS', description: '' },
   { id: 6, title: 'Star Wars', description: '' }
]

const commonData = [
   {
      id: 1,
      mediaType: 'icon',
      media: <AiFillCalculator />,
      link: ''
   },
   {
      id: 2,
      mediaType: 'icon',
      media: <BsFillStopwatchFill />,
      link: ''
   },
   {
      id: 3,
      mediaType: 'icon',
      media: <AiFillPlusCircle />,
      link: ''
   },
   {
      id: 4,
      mediaType: 'icon',
      media: <MdPets />,
      link: ''
   },
   {
      id: 5,
      mediaType: 'icon',
      media: <ImTarget />,
      link: ''
   },
   {
      id: 6,
      mediaType: 'icon',
      media: <RiSwordFill />,
      link: ''
   }
]

function createObjectByLanguage(arrayOfTextualDataByLanguage, commonDataArray) {

   return arrayOfTextualDataByLanguage.map(textualData => {
      let commonDataIndex = commonDataArray.findIndex(item => item.id === textualData.id)

      return {
         id: textualData.id,
         title: textualData.title,
         description: textualData.description,
         mediaType: 'icon',
         media: commonDataArray[commonDataIndex].media,
         link: commonDataArray[commonDataIndex].link,
         buttonLabel: 'ver projeto'
      }
   })
}

export const projectsSection = {
   pt: {
      projects: createObjectByLanguage(textualDataPT, commonData),
      description: descriptionPT
   },
   en: {
      projects: createObjectByLanguage(textualDataEn, commonData),
      description: descriptionEn
   }
}

