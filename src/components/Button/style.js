import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const ButtonContainer = styled(LinkScroll)`
   border-radius: 50px;
   white-space: nowrap;
   background-color: ${(props) => props.primary
      ? props.theme.colors.main
      : props.theme.colors.background};
   color: ${(props) => props.primary
      ? props.theme.colors.white
      : props.theme.colors.text};
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
      background-color: ${(props) => props.primary
      ? props.theme.colors.white
      : props.theme.colors.text};
      color: ${(props) => props.primary
      ? props.theme.colors.black
      : props.theme.colors.background};
   }
`

