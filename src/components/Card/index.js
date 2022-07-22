import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import * as S from './style'
import { ButtonExternalLink } from '..'

export const Card = ({ data, mediaPosition = 'top', gap, subtitle }) => {
   const [hover, setHover] = useState(false)

   const handleOnHover = () => {
      setHover(!hover)
   }

   return (
      <S.Card key={data.id} gap={gap}>

         <S.CardTitleContent>
            {data?.subtitle && (
               <S.CardSubtitle>{data?.subtitle}</S.CardSubtitle>
            )}

            {mediaPosition === 'top' && (
               data.media
            )}
            <S.CardTitle>{data.title}</S.CardTitle>
         </S.CardTitleContent>

         {mediaPosition === 'middle' && (
            data.media
         )}

         <S.CardDescription>{data.description}</S.CardDescription>

         {mediaPosition === 'bottom' && (
            data.media
         )}

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