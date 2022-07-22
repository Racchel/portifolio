import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import * as S from './style'
import { ButtonExternalLink, ButtonRouter } from '..'

export const Card = ({ data, mediaPosition = 'top', gap, subtitle, buttonType }) => {
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

         {buttonType === 'link' && (
            <ButtonExternalLink
               link={data.link}
               onHover={handleOnHover}
            >
               {data.buttonLabel}
               {hover ? <AiFillEye /> : <AiFillEyeInvisible />}
            </ButtonExternalLink>
         )}

         {buttonType === 'router' && (
            <ButtonRouter
               to={data.link}
               onHover={handleOnHover}
            >
               {data.buttonLabel}
               {hover ? <AiFillEye /> : <AiFillEyeInvisible />}
            </ButtonRouter>
         )}
      </S.Card>
   )
}