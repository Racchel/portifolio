import * as S from './style'
import { AppContext } from '../../share'

export const LanguageSelector = ({ desktop }) => {

   return (
      <AppContext.Consumer>
         {context => (
            <S.Select
               desktop={desktop}
               onChange={(e) => context.setLanguage(e.target.value)}
            >
               <S.Option value='pt'>pt-br</S.Option>
               <S.Option value='en'>en</S.Option>
            </S.Select>
         )}
      </AppContext.Consumer>
   )
}