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
            {dataList.map((project) => (
               <Card
                  key={project.id}
                  data={project}
                  buttonType='link'
               />
            ))}
         </Carousel>
      </S.CarouselContainer>
   )
}