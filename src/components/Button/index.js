import * as S from './style'

export const Button = ({ primary, big, onHover, children }) => {

   return (
      <S.ButtonContainer
         primary={primary}
         big={big}
         onMouseEnter={onHover}
         onMouseLeave={onHover}

      >{children}</S.ButtonContainer>
   )
}