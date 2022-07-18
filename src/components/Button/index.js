import * as S from './style'

export const Button = ({ to, primary, big, onHover, children }) => {

   return (
      <S.ButtonContainer
         to={to}
         smooth={true}
         duration={500}
         spy={true}
         exact='true'
         offset={-80}

         primary={primary}
         big={big}
         onMouseEnter={onHover}
         onMouseLeave={onHover}


      >{children}</S.ButtonContainer>
   )
}