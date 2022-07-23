import Carousel from 'react-elastic-carousel';
import * as S from './style'
import { Card } from '..'

export const CustomCarrosel = ({ dataList }) => {

   const breakpoints = [
      { width: 1, itemsToShow: 1 },
      { width: 750, itemsToShow: 2 },
      { width: 950, itemsToShow: 3 },
   ]

   return (
      <S.CarouselContainer>
         <Carousel
            breakPoints={breakpoints}
         >
            {dataList.map((data) => (
               <Card
                  key={data.id}
                  data={data}
                  mediaType={data.mediaType}
                  buttonType='link'
               />
            ))}
         </Carousel>
      </S.CarouselContainer>
   )
}