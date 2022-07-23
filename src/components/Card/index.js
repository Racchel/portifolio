import { useState } from 'react'
import * as S from './style'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { ButtonExternalLink, ButtonRouter, CustomImage } from '..'

export const Card = ({ data, mediaPosition = 'top', mediaType = 'icon', gap, subtitle, buttonType }) => {
   const [hover, setHover] = useState(false)

   const handleOnHover = () => setHover(!hover)

   function getMediaType() {
      if (mediaType === 'icon') {
         return data.media
      }

      if (mediaType === 'image') {
         return (
            <CustomImage
               width={data.media.width}
               height={data.media.height}
               image={data.media.image}
            />
         )
      }
   }

   function getButtonType() {
      if (buttonType === 'link') {
         return (
            <ButtonExternalLink
               link={data.link}
               onHover={handleOnHover}
            >
               {data.buttonLabel}
               {hover ? <AiFillEye /> : <AiFillEyeInvisible />}
            </ButtonExternalLink>
         )
      }

      if (buttonType === 'router') {
         return (
            <ButtonRouter
               to={data.link}
               onHover={handleOnHover}
               primary='true'
            >
               {data.buttonLabel}
               {hover ? <AiFillEye /> : <AiFillEyeInvisible />}
            </ButtonRouter>
         )
      }
   }

   return (
      <S.Card key={data.id} gap={gap}>

         <S.CardTitleContent>
            {data?.subtitle && (
               <S.CardSubtitle>{data?.subtitle}</S.CardSubtitle>
            )}

            {mediaPosition === 'top' && getMediaType()}
            <S.CardTitle>{data.title}</S.CardTitle>
         </S.CardTitleContent>

         {mediaPosition === 'middle' && getMediaType()}

         <S.CardDescription>{data.description}</S.CardDescription>

         {mediaPosition === 'bottom' && getMediaType()}

         {getButtonType()}
      </S.Card>
   )
}