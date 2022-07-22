import * as S from './style'
import { Card } from '..'

export const CustomListCards = ({ dataList }) => {
   return (
      <S.CardContainer>
         {dataList.map((data) => (
            <Card
               key={data.id}
               data={data}
            />
         ))}
      </S.CardContainer>
   )
}
