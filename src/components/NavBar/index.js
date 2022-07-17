import * as S from './style'
import { FaBars } from 'react-icons/fa'
import { AppContext } from '../../share'
import { Button } from '../Button'

export const NavBar = ({ toggle }) => {

   return (
      <AppContext.Consumer>
         {(context => (
            <S.NavContainer>
               <S.NavContent>
                  <S.NavLogo to='/'>racchel</S.NavLogo>
                  <S.MobileIcon onClick={toggle}>
                     <FaBars />
                  </S.MobileIcon>
                  <S.NavMenu>
                     {context.navigationListLinks.map(link => (
                        <S.NavItem>
                           <S.NavLink to={link.to}>{link.title}</S.NavLink>
                        </S.NavItem>
                     ))}
                  </S.NavMenu>
                  <Button navbar />
               </S.NavContent>
            </S.NavContainer>
         ))}
      </AppContext.Consumer>
   )
}