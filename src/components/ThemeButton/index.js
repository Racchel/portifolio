import * as S from './style'
import { AppContext } from '../../share'


export const ThemeButton = ({ desktop }) => {

   return (
      <AppContext.Consumer>
         {(context => (
            <S.ThemeButton onClick={context.toggleTheme} desktop={desktop}>
               {context.themeName}
               <S.ArrowsExchange />
            </S.ThemeButton>
         ))}
      </AppContext.Consumer>
   )
}