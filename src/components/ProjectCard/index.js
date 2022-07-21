import * as S from './style'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export const ProjectCard = ({ project, handleOnHover }) => {
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