import React from 'react'
import * as S from './style'

export const InfoSection = ({
   id, light,
   children
}) => {
   return (
      <>
         <S.InfoContainer light={light} id={id}>
            <S.InfoContent>
               {children}
            </S.InfoContent>
         </S.InfoContainer>
      </>
   )
}

