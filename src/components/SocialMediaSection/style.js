import styled from 'styled-components'

export const SocialMediaContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 15px;

   display: ${(props) => props.desktop ? 'flex' : 'none'};

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: ${(props) => props.desktop ? 'none' : 'flex'};
   }
`

export const SocialMediaLink = styled.a`
   width: fit-content;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: ${(props) => props.bigFont ? '3rem' : '2rem'};
   color: ${props => props.theme.colors.text.md};
`

