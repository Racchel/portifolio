import * as S from './style'
import { FaBars } from 'react-icons/fa'
import { SocialMediaSection } from '..'
import { NavMenu } from './NavMenu'

export const NavBar = ({ toggle, navMenu }) => {
   const title = 'racchel.velasco'

   return (
      <S.NavContainer>
         <S.NavContent>
            <S.NavLogo to='/'>{title}</S.NavLogo>
            <S.MobileIcon onClick={toggle}>
               <FaBars />
            </S.MobileIcon>
            {navMenu && (
               <NavMenu />
            )}
            <SocialMediaSection desktop />
         </S.NavContent>
      </S.NavContainer>
   )
}