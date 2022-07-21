import styled from 'styled-components'

export const TextCardContainer = styled.div`
   display: flex;
   flex-direction: ${(props) => props.imgStart ? 'row' : 'row-reverse'};
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
   padding: 10px;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      padding: 80px 0;
   }
`

export const TextContent = styled.div`
   max-width: 560px;
   display: flex;
   flex-direction: column;
   padding: 10px;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      align-items: center;
      padding: 30px 60px;
      text-align: center;
   }
`

export const TopLine = styled.p`
   color: ${props => props.theme.colors.primary.sm};
   font-size: 1rem;
   line-height: 1rem;
   font-weight: 700;
   letter-spacing: 1.4px;
   text-transform: uppercase;
   margin-bottom: 1rem;
`

export const InfoDescription = styled.p`
   max-width: 500px;
   margin-bottom: 35px;
   font-size: 18px;
   line-height: 1.6rem;
   color: ${props => props.light
      ? props.theme.colors.text.sm
      : props.theme.colors.text.md
   };
`

export const BtnContent = styled.div`
   display: flex;
   justify-content: flex-start;
`

export const ImgContent = styled.div`
   width: fit-content;
   height: 100%;
   padding: 10px;
`

export const Img = styled.img`
   width: min(60vw, 300px);
   margin: 0 0 10px 0;
   padding-right: 0;
`

export const Button = styled.div``