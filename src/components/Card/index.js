import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import * as S from './style'
import { ButtonExternalLink } from '..'

export const Card = ({ data }) => {
   const [hover, setHover] = useState(false)

   const handleOnHover = () => {
      setHover(!hover)
   }

   return (
      <S.Card key={data.id}>
         <S.CardTitleContent>
            {data.media}
            <S.CardTitle>{data.title}</S.CardTitle>
         </S.CardTitleContent>

         <S.CardDescription>{data.description}</S.CardDescription>
         <ButtonExternalLink
            link={data.link}
            onHover={handleOnHover}
         >
            {data.buttonLabel}
            {hover ? <AiFillEye /> : <AiFillEyeInvisible />}
         </ButtonExternalLink>
      </S.Card>
   )
}