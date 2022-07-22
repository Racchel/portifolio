import * as S from './style'
import { AppContext } from '../../../share'

export const SidebarMenu = ({ toggle }) => {

   return (
      <AppContext.Consumer>
         {context => (
            <S.SidebarMenu>
               {context.navigationListLinks.map((link, index) => (
                  <S.SidebarLink
                     key={index}
                     to={link.to}
                     onClick={toggle}
                  >{link.title}</S.SidebarLink>
               ))}
            </S.SidebarMenu>
         )}
      </AppContext.Consumer>
   )
}