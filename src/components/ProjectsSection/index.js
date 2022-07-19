import React, { useState } from 'react'
import * as S from './style'
import Carousel from 'react-elastic-carousel';
import { AiFillCalculator, AiFillPlusCircle, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BsFillStopwatchFill } from 'react-icons/bs'
import { MdPets } from 'react-icons/md'
import { ImTarget } from 'react-icons/im'
import { RiSwordFill } from 'react-icons/ri'

export const ProjectsSection = () => {


   const projects = [
      { id: 1, onHover: false, icon: <AiFillCalculator />, title: 'Calculadora', description: 'is simply dummy text of the printing and typesetting industry. has been the standard dummy text ever since the 1500s', link: '' },
      { id: 2, onHover: false, icon: <BsFillStopwatchFill />, title: 'Cronômetro', description: 'is simply dummy text of the printing and typesetting industry. has been the standard dummy text ever since the 1500s', link: '' },
      { id: 3, onHover: false, icon: <AiFillPlusCircle />, title: 'Contador', description: 'is simply dummy text of the printing and typesetting industry. has been the standard dummy text ever since the 1500s', link: '' },
      { id: 4, onHover: false, icon: <MdPets />, title: 'PetLove', description: 'is simply dummy text of the printing and typesetting industry. has been the standard dummy text ever since the 1500s', link: '' },
      { id: 5, onHover: false, icon: <ImTarget />, title: 'ODS', description: 'is simply dummy text of the printing and typesetting industry. has been the standard dummy text ever since the 1500s', link: '' },
      { id: 6, onHover: false, icon: <RiSwordFill />, title: 'Star Wars', description: 'is simply dummy text of the printing and typesetting industry. has been the standard dummy text ever since the 1500s', link: '' }
   ]

   const [projectsList, setProjectsList] = useState(projects)

   const buttonLabel = 'ver projeto'

   const breakpoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
   ]

   function toggleOnHover(id) {
      const newProjectsList = [...projectsList]
      const index = newProjectsList.findIndex(project => project.id === id)
      newProjectsList[index].onHover = !newProjectsList[index].onHover
      setProjectsList(newProjectsList)
   }

   return (
      <>
         <S.ProjectsContainer>
            <S.ProjectsContent>
               <Carousel
                  breakPoints={breakpoints}
               >
                  {projectsList.map((project, index) => (
                     <S.Card key={index}>

                        <S.CardTitleContent>
                           {project.icon}
                           <S.CardTitle>{project.title}</S.CardTitle>
                        </S.CardTitleContent>

                        <S.CardDescription>{project.description}</S.CardDescription>
                        <S.CardButton
                           onMouseEnter={() => toggleOnHover(project.id)}
                           onMouseLeave={() => toggleOnHover(project.id)}
                        >
                           {buttonLabel}
                           {project.onHover ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </S.CardButton>
                     </S.Card>
                  ))}
               </Carousel>
            </S.ProjectsContent>
         </S.ProjectsContainer>
      </>
   )
}
