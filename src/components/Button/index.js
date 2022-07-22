import * as S from './style'

export const ButtonScroll = ({ to, primary, big, onHover, children }) => {

   return (
      <S.ButtonScrollContainer
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


      >{children}</S.ButtonScrollContainer>
   )
}

export const ButtonRouter = ({ to, children }) => {
   return (
      <S.ButtonRouterContainer href={to}>
         {children}
      </S.ButtonRouterContainer>
   )
}

export const ButtonExternalLink = ({ link, children, onHover }) => {
   return (
      <S.ButtonExternalLinkContainer
         href={link}
         onMouseEnter={() => onHover()}
         onMouseLeave={() => onHover()}
      >
         {children}
      </S.ButtonExternalLinkContainer>
   )
}