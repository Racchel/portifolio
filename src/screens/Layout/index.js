import * as S from './style'
import { NavBar } from '../../components'

export const Layout = ({ title, children }) => {
   return (
      <S.Container>
         <NavBar />
         {children}
      </S.Container>
   )
}