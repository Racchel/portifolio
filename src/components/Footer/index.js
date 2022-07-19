import * as S from './style'
import { assets } from '../../assets'

export const Footer = () => {

   const title = `Feito com ${assets.icons.heart} por`
   const author = 'Racchel Velasco'
   const date = 'Julho de 2022'

   return (
      <S.FooterContainer>
         <S.FooterContent>
            <S.FooterTitle>{title}
               <S.FooterAuthor>{author}</S.FooterAuthor>
            </S.FooterTitle>
            <S.FooterSubtitle>{date}</S.FooterSubtitle>
         </S.FooterContent>
      </S.FooterContainer>
   )
}