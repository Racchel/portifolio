import styled from 'styled-components'

export const InfoContainer = styled.div`
   color: ${props => props.theme.colors.text.md};
   background-color: ${props => props.light
      ? props.theme.colors.background.sm
      : props.theme.colors.background.md};

   min-height: 90vh;
   display: flex;
   align-items: center;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      padding: 100px 0;
   }
`

export const InfoContent = styled.div`
   width: 100%;
   max-width: 1100px;
   margin: 0 auto;
`

export const InfoRow = styled.div`
   display: flex;
   flex-direction: ${(props) => props.imgStart ? 'row' : 'row-reverse'};
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
   padding: 10px;
`

export const InfoColumn = styled.div`
   padding: 10px;
`


export const TextContent = styled.div`
   max-width: 560px;
   display: flex;
   flex-direction: column;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      align-items: center;
      padding: 30px 0;
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
`

export const Img = styled.img`
   width: min(60vw, 300px);
   margin: 0 0 10px 0;
   padding-right: 0;
`

export const Button = styled.div``