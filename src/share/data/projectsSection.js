import { AiFillCalculator, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillStopwatchFill } from 'react-icons/bs'
import { MdPets } from 'react-icons/md'
import { ImTarget } from 'react-icons/im'
import { RiSwordFill } from 'react-icons/ri'

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
      icon: <AiFillCalculator />,
      link: ''
   },
   {
      id: 2,
      icon: <BsFillStopwatchFill />,
      link: ''
   },
   {
      id: 3,
      icon: <AiFillPlusCircle />,
      link: ''
   },
   {
      id: 4,
      icon: <MdPets />,
      link: ''
   },
   {
      id: 5,
      icon: <ImTarget />,
      link: ''
   },
   {
      id: 6,
      icon: <RiSwordFill />,
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
         onHover: false,
         icon: commonDataArray[commonDataIndex].icon,
         link: commonDataArray[commonDataIndex].link,
         buttonLabel: 'ver projeto'
      }
   })
}

export const projectsSection = {
   pt: {
      projects: createObjectByLanguage(textualDataPT, commonData)
   },
   en: {
      projects: createObjectByLanguage(textualDataEn, commonData)
   }
}

