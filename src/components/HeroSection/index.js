import * as S from './style'
import { assets } from '../../assets'
import { useState } from 'react'
import { Button } from '../Button'
import { AppContext } from '../../share'

export const HeroSection = () => {

   const [hover, setHover] = useState(false)
   const onHover = () => setHover(!hover)

   return (
      <AppContext.Consumer>
         {context => (
            <S.HeroContainer id='home'>
               <S.HeroBg>
                  <S.VideoBg autoPlay loop muted src={assets.videos.background} type='video/mp4' />
               </S.HeroBg>
               <S.HeroContent>
                  <S.HeroH1>{context.heroSectionData.title}</S.HeroH1>
                  <S.HeroSubtitle>({context.heroSectionData.subtitle})</S.HeroSubtitle>
                  <S.HeroP>{context.heroSectionData.paragraph}</S.HeroP>
                  <S.HeroBtnWrapper to='about'>
                     <Button
                        to='about'
                        primary='true'
                        onHover={onHover}
                     >  {context.heroSectionData.buttonLabel}
                        {hover ? <S.ArrowForward /> : <S.ArrowRight />}
                     </Button>
                  </S.HeroBtnWrapper>
               </S.HeroContent>
            </S.HeroContainer>
         )}
      </AppContext.Consumer>
   )
}