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
            <CustomTitle
               light={light}
               title={headLine}
               borderBottom
               sizeDefault='3rem'
               sizeMobile='2rem'
            />

            {description.map((item, index) => (
               <S.InfoDescription key={index} light={light}>{item}</S.InfoDescription>
            ))}
         </S.TextContent>
         <S.ImgContent>
            <S.Img src={img} alt={alt} />
         </S.ImgContent>
      </S.TextCardContainer>
   )
}