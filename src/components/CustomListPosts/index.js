import * as S from './style'
import { Card } from '..'

export const CustomListPosts = ({
   dataList,
   cardMediaPosition,
   cardGap
}) => {
   return (
      <S.CardContainer>
         {dataList.map((data) => (
            <Card
               key={data.id}
               data={data}
               gap={cardGap}
               mediaPosition={cardMediaPosition}
               mediaType={data.mediaType}
               buttonType='router'
            />
         ))}
      </S.CardContainer>
   )
}
