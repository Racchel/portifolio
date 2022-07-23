import * as S from './style'
import { assets } from '../../assets'
import { useState } from 'react'
import { ButtonScroll } from '..'

export const HeroSection = ({ data }) => {

   const [hover, setHover] = useState(false)
   const onHover = () => setHover(!hover)

   return (

      <S.HeroContainer id='home'>
         <S.HeroBg>
            <S.VideoBg autoPlay loop muted src={assets.videos.background} type='video/mp4' />
         </S.HeroBg>
         <S.HeroContent>
            <S.HeroH1>{data.title}</S.HeroH1>
            <S.HeroSubtitle>({data.subtitle})</S.HeroSubtitle>
            <S.HeroP>{data.paragraph}</S.HeroP>
            <S.HeroBtnWrapper to={data.link}>
               <ButtonScroll
                  to={data.link}
                  primary='true'
                  onHover={onHover}
               >  {data.buttonLabel}
                  {hover ? <S.ArrowForward /> : <S.ArrowRight />}
               </ButtonScroll>
            </S.HeroBtnWrapper>
         </S.HeroContent>
      </S.HeroContainer>
   )
}