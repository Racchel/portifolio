import * as S from './style'
import { AppContext } from '../../share'


export const ThemeButton = () => {

   return (
      <AppContext.Consumer>
         {(context => (
            <S.ThemeButton onClick={context.toggleTheme}>
               {context.themeName} mode
               <S.ArrowsExchange />

            </S.ThemeButton>
         ))}
      </AppContext.Consumer>
   )
}