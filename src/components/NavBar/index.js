import * as S from './style'
import { FaBars } from 'react-icons/fa'
import { AppContext } from '../../share'
import { SocialMediaSection } from '../SocialMediaSection'

export const NavBar = ({ toggle }) => {
   const title = 'racchel.velasco'

   return (
      <AppContext.Consumer>
         {(context => (
            <S.NavContainer>
               <S.NavContent>
                  <S.NavLogo to='/'>{title}</S.NavLogo>
                  <S.MobileIcon onClick={toggle}>
                     <FaBars />
                  </S.MobileIcon>
                  <S.NavMenu>
                     {context.navigationListLinks.map((link, index) => (
                        <S.NavItem>
                           <S.NavLink
                              key={index}
                              to={link.to}
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                           >
                              {link.title}
                           </S.NavLink>
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