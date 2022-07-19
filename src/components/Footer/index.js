import * as S from './style'
import { AppContext } from '../../share'

export const Footer = () => {

   return (
      <AppContext.Consumer>
         {context => (
            <S.FooterContainer>
               <S.FooterContent>
                  <S.FooterTitle>{context.footerData.title}
                     <S.FooterAuthor>{context.footerData.author}</S.FooterAuthor>
                  </S.FooterTitle>
                  <S.FooterSubtitle>{context.footerData.date}</S.FooterSubtitle>
               </S.FooterContent>
            </S.FooterContainer>
         )}
      </AppContext.Consumer>
   )
}