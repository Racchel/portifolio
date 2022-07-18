import * as S from './style'
import { assets } from '../../assets'
import { useState } from 'react'

export const HeroSection = () => {
   const title = 'Você é a mudança que o mundo precisa'
   const paragraph = 'testeee'

   const [hover, setHover] = useState(false)
   const onHover = () => setHover(!hover)

   return (
      <S.HeroContainer>
         <S.HeroBg>
            <S.VideoBg autoPlay loop muted src={assets.videos.background} type='video/mp4' />
         </S.HeroBg>
         <S.HeroContent>
            <S.HeroH1>{title}</S.HeroH1>
            <S.HeroP>{paragraph}</S.HeroP>
            <S.HeroBtnWrapper to='about'>
               <S.Button
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
               >
                  {hover ? <S.ArrowForward /> : <S.ArrowRight />}
               </S.Button>
            </S.HeroBtnWrapper>
         </S.HeroContent>
      </S.HeroContainer>
   )
}