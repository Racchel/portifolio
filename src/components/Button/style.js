import styled from 'styled-components'

export const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: ${(props) => props.navbar ? 'none' : 'block'};
   }
`

export const ButtonLink = styled.a`
   border-radius: 50px;
   white-space: nowrap;
   font-size: 1rem;
   outline: none;
   border: none;
   cursor: pointer;
   text-decoration: none;
   transition: all 0.2s ease-in-out;
   padding: ${(props) => props.navbar ? '10px 22px' : '16px 64px'};
   color: ${props => props.theme.colors.white};
   background-color: ${props => props.theme.colors.main};

   &:hover {
      transition: all 0.2s ease-in-out;
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.mainLight};
   }
`

