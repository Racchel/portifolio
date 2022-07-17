import * as S from './style'

export const Layout = ({ title, children }) => {
   return (
      <S.Container>
         {children}
      </S.Container>
   )
}