import * as S from './style'
import { assets } from '../../assets'
import { useState } from 'react'
import { Button } from '../Button'

export const HeroSection = () => {
   const title = 'Você é a mudança que o mundo precisa!'
   const paragraph = `Meu portifólio ${assets.icons.heart}`
   const buttonLabel = 'Saiba mais'

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
               <Button
                  to='about'
                  primary
                  onHover={onHover}
               >  {buttonLabel}
                  {hover ? <S.ArrowForward /> : <S.ArrowRight />}
               </Button>
            </S.HeroBtnWrapper>
         </S.HeroContent>
      </S.HeroContainer>
   )
}