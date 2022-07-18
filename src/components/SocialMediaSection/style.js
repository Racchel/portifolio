import styled from 'styled-components'

export const SocialMediaContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: ${(props) => props.navbar ? 'none' : 'block'};
   }
`

export const SocialMediaLink = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: ${(props) => props.bigFont ? '3rem' : '2rem'};
   color: ${props => props.theme.colors.text.md};
`

