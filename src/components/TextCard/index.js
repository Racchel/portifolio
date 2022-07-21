import React from 'react'
import { CustomTitle } from '..'
import * as S from './style'

export const TextCard = ({
   light,
   imgStart,
   topLine,
   headLine,
   description,
   img, alt
}) => {

   return (
      <S.TextCardContainer imgStart={imgStart}>
         <S.TextContent>
            <S.TopLine>{topLine}</S.TopLine>
            <CustomTitle light={light} title={headLine} />
            {description.map(item => (
               <S.InfoDescription light={light}>{item}</S.InfoDescription>
            ))}
         </S.TextContent>
         <S.ImgContent>
            <S.Img src={img} alt={alt} />
         </S.ImgContent>
      </S.TextCardContainer>
   )
}