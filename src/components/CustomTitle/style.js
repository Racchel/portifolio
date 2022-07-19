import styled from 'styled-components'
import { assets } from '../../assets'

export const Title = styled.h2`   
   margin-bottom: 1.5rem;
   font-family: ${props => props.theme.fonts.secondary};
   padding-bottom: 5px;
   border-bottom: 2px solid ${props => props.theme.colors.primary.sm};
   font-size: 3rem;
   line-height: 1.1;
   font-weight: 400;
   color: ${props => props.light
      ? props.theme.colors.text.sm
      : props.theme.colors.text.md
   };

   ::after {
      position: absolute;
      content: '${assets.icons.heart}';
      font-size: 1rem;
      transform: rotate(30deg);
   }

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size: 2rem;
   }

`