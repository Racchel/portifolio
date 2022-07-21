import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../share'
import { CustomCarrosel, CustomListCards } from '..'
import * as S from './style'

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
      <AppContext.Consumer>
         {context => (
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
               <S.ProjectsDescription>{context.projectsSectionData.description}</S.ProjectsDescription>
            </S.ProjectsContainer>
         )}
      </AppContext.Consumer>
   )
}


