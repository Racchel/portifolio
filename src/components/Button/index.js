import * as S from './style'

export const Button = ({ padding, navbar }) => {

   return (
      <S.ButtonContainer navbar={navbar}>
         <S.ButtonLink
            padding={padding}
            navbar={navbar}
            href='https://github.com/Racchel'>Github</S.ButtonLink>
      </S.ButtonContainer>
   )
}