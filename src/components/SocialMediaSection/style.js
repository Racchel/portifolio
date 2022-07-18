import styled from 'styled-components'

export const SocialMediaContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: ${(props) => props.navbar ? 'none' : 'block'};
   }
`

export const SocialMediaLink = styled.a`
   padding: 5px;
   font-size: ${(props) => props.bigFont ? '3rem' : '2rem'};
   color: ${props => props.theme.colors.text};
`

