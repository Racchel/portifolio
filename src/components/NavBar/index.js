import * as S from './style'
import { FaBars } from 'react-icons/fa'
import { AppContext } from '../../share'
import { SocialMediaSection } from '../SocialMediaSection'

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
                     {context.navigationListLinks.map((link, index) => (
                        <S.NavItem>
                           <S.NavLink key={index} to={link.to}>{link.title}</S.NavLink>
                        </S.NavItem>
                     ))}
                  </S.NavMenu>
                  <SocialMediaSection navbar />
               </S.NavContent>
            </S.NavContainer>
         ))}
      </AppContext.Consumer>
   )
}