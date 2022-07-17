import * as S from './style'
import { FaBars } from 'react-icons/fa'

export const NavBar = () => {
   const links = [
      { title: 'sobre', to: 'about' },
      { title: 'projetos', to: 'projects' },
      { title: 'blog', to: 'blog' }

   ]

   return (
      <S.NavContainer>
         <S.NavContent>
            <S.NavLogo to='/'>racchel</S.NavLogo>
            <S.MobileIcon>
               <FaBars />
            </S.MobileIcon>
            <S.NavMenu>
               {links.map(link => (
                  <S.NavItem>
                     <S.NavLink to={link.to}>{link.title}</S.NavLink>
                  </S.NavItem>
               ))}
            </S.NavMenu>
            <S.NavBtn>
               <S.NavBtnLink href='https://github.com/Racchel'>Github</S.NavBtnLink>
            </S.NavBtn>
         </S.NavContent>
      </S.NavContainer>
   )
}