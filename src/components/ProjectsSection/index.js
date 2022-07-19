import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel';
import { AppContext } from '../../share'
import * as S from './style'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export const ProjectsSection = () => {
   const { projectsSectionData } = useContext(AppContext)
   const [projectsList, setProjectsList] = useState(projectsSectionData.projects)

   useEffect(() => {
      setProjectsList(projectsSectionData.projects)
   }, [projectsSectionData])


   function toggleOnHover(id) {
      const newProjectsList = [...projectsList]
      const index = newProjectsList.findIndex(project => project.id === id)
      newProjectsList[index].onHover = !newProjectsList[index].onHover
      setProjectsList(newProjectsList)
   }

   return (
      <S.ProjectsContainer>
         <S.ProjectsContent>
            <CustomCarrosel
               projectsList={projectsList}
               handleOnHover={toggleOnHover}
            />
            <CustomListCards
               projectsList={projectsList}
               handleOnHover={toggleOnHover}
            />
         </S.ProjectsContent>
      </S.ProjectsContainer>
   )
}


const CustomCarrosel = ({ projectsList, handleOnHover, }) => {

   const breakpoints = [
      { width: 1, itemsToShow: 1 },
      { width: 750, itemsToShow: 2 },
      { width: 950, itemsToShow: 3 },
   ]

   return (
      <S.CarouselContainer>
         <Carousel
            breakPoints={breakpoints}
         >
            {projectsList.map((project) => (
               <Card
                  key={project.id}
                  project={project}
                  handleOnHover={handleOnHover}
               />
            ))}
         </Carousel>
      </S.CarouselContainer>
   )
}

const CustomListCards = ({ projectsList, handleOnHover, }) => {
   return (
      <S.CardContainer>
         {projectsList.map((project) => (
            <Card
               key={project.id}
               project={project}
               handleOnHover={handleOnHover}
            />
         ))}
      </S.CardContainer>
   )
}


const Card = ({ project, handleOnHover }) => {
   return (
      <S.Card key={project.id}>

         <S.CardTitleContent>
            {project.icon}
            <S.CardTitle>{project.title}</S.CardTitle>
         </S.CardTitleContent>

         <S.CardDescription>{project.description}</S.CardDescription>
         <S.CardButton
            onMouseEnter={() => handleOnHover(project.id)}
            onMouseLeave={() => handleOnHover(project.id)}
         >
            {project.buttonLabel}
            {project.onHover ? <AiFillEye /> : <AiFillEyeInvisible />}
         </S.CardButton>
      </S.Card>
   )
}