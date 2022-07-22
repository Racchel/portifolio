import * as S from './style'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

export const ProjectCard = ({ project }) => {
   const [hover, setHover] = useState(false)

   const handleOnHover = () => {
      setHover(!hover)
   }

   return (
      <S.Card key={project.id}>
         <S.CardTitleContent>
            {project.icon}
            <S.CardTitle>{project.title}</S.CardTitle>
         </S.CardTitleContent>

         <S.CardDescription>{project.description}</S.CardDescription>
         <S.CardButton
            onMouseEnter={() => handleOnHover()}
            onMouseLeave={() => handleOnHover()}
         >
            {project.buttonLabel}
            {hover ? <AiFillEye /> : <AiFillEyeInvisible />}
         </S.CardButton>
      </S.Card>
   )
}