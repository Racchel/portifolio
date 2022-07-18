import styled from 'styled-components'


import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
   background-color: ${props => props.theme.colors.background};
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 30px;
   height: 590px;
   position: relative;
   z-index: 1;
`

export const HeroBg = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;

   ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.colors.opacity};

   }
`

export const VideoBg = styled.video`
   width: 100%;
   height: 100%;
   -o-object-fit: cover;
   object-fit: cover;
   background-color: ${(props) => props.theme.colors.main};
`

export const HeroContent = styled.div`
   z-index: 3;
   max-width: 1200px;
   position: absolute;
   padding: 8px 24px;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const HeroH1 = styled.h1`
   font-size: 3rem;
   justify-content: center;
   align-items: center;
   text-align: center;
   color: ${(props) => props.theme.colors.white};

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      font-size: 2.5rem;
   }

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: 2rem;
   }
`

export const HeroP = styled.p`
   max-width: 600px;
   margin-top: 1.5rem;
   font-size: 1.5rem;
   justify-content: center;
   align-items: center;
   text-align: center;
   
   color: ${(props) => props.theme.colors.white};
   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      font-size: 1.5rem;
   }

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: 1.2rem;
   }
`

export const HeroBtnWrapper = styled.div`
   margin-top: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Button = styled.div`
`

export const ArrowForward = styled(MdArrowForward)`
   margin-left: 8px;
   font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left: 8px;
   font-size: 20px;
`
