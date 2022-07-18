import React from 'react'
import * as S from './style'
// import { Button } from '../Button'

export const InfoSection = ({
   id, light, imgStart,
   topLine,
   headLine,
   description,
   buttonLabel,
   img, alt
}) => {
   return (
      <>
         <S.InfoContainer light={light} id={id}>
            <S.InfoContent>
               <S.InfoRow imgStart={imgStart}>
                  <S.InfoColumn>
                     <S.TextContent>
                        <S.TopLine>{topLine}</S.TopLine>
                        <S.Heading light={light}>{headLine}</S.Heading>
                        <S.Subtitle light={light}>{description}</S.Subtitle>
                        {/* <S.BtnContent>
                           <Button primary to='home'>{buttonLabel}</Button>
                        </S.BtnContent> */}
                     </S.TextContent>
                  </S.InfoColumn>
                  <S.InfoColumn>
                     <S.ImgContent>
                        <S.Img src={img} alt={alt} />
                     </S.ImgContent>
                  </S.InfoColumn>
               </S.InfoRow>
            </S.InfoContent>
         </S.InfoContainer>
      </>
   )
}
