import React, { useContext } from 'react'
import { AppContext } from '../../share'
import { CustomCarrosel, CustomListCards } from '..'
import * as S from './style'

export const ProjectsSection = () => {
   const { projectsSectionData } = useContext(AppContext)

   return (
      <AppContext.Consumer>
         {context => (
            <S.ProjectsContainer>
               <S.ProjectsContent>
                  <CustomCarrosel
                     dataList={projectsSectionData.projects}
                  />
                  <CustomListCards
                     dataList={projectsSectionData.projects}
                  />
               </S.ProjectsContent>
               <S.ProjectsDescription>{context.projectsSectionData.description}</S.ProjectsDescription>
            </S.ProjectsContainer>
         )}
      </AppContext.Consumer>
   )
}


