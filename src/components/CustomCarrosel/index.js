import Carousel from 'react-elastic-carousel';
import * as S from './style'
import { ProjectCard } from '..'

export const CustomCarrosel = ({ projectsList, handleOnHover, }) => {

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
            {projectsList.map((project) => (
               <ProjectCard
                  key={project.id}
                  project={project}
                  handleOnHover={handleOnHover}
               />
            ))}
         </Carousel>
      </S.CarouselContainer>
   )
}