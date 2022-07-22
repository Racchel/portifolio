import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'


export const ButtonScrollContainer = styled(LinkScroll)`
   border-radius: 50px;
   white-space: nowrap;
   background-color: ${(props) => props.primary
      ? props.theme.colors.primary.md
      : props.theme.colors.background.md};
   color: ${(props) => props.primary
      ? props.theme.colors.white
      : props.theme.colors.text.md};
   padding: ${(props) => props.big
      ? '14px 48px'
      : '12px 30px'};
   font-size: ${(props) => props.big
      ? '1.25rem'
      : '1rem'};
   outline: none;
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;

   &:hover {
      transition: all 0.2s ease-in-out;
      background-color: ${(props) => props.theme.colors.primary.lg};
   }
`

export const ButtonRouterContainer = styled(LinkRouter)``

export const ButtonExternalLinkContainer = styled.a`
   background-color: ${props => props.theme.colors.black};
   color: ${props => props.theme.colors.white};
   border: none;
   padding: 10px;
   border-radius: 20px;
   font-size: 1rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   text-decoration: none;

   &:hover {
      background-color: ${props => props.theme.colors.primary.md};
   }
`