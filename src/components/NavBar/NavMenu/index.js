import * as S from './style'
import { AppContext } from '../../../share'

export const NavMenu = () => {

   return (
      <AppContext.Consumer>
         {(context => (

            <S.NavMenu>
               {context.navigationListLinks.map((link, index) => (
                  <S.NavItem key={index}>
                     <S.NavLink
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

         ))}
      </AppContext.Consumer>
   )
}