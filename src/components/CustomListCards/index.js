import * as S from './style'
import { ProjectCard } from '..'

export const CustomListCards = ({ projectsList, handleOnHover, }) => {
   return (
      <S.CardContainer>
         {projectsList.map((project) => (
            <ProjectCard
               key={project.id}
               project={project}
               handleOnHover={handleOnHover}
            />
         ))}
      </S.CardContainer>
   )
}
