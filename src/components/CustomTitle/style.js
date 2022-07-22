import styled from 'styled-components'
import { assets } from '../../assets'

export const Title = styled.h2`   
   line-height: 1.1;
   font-weight: 400;
   font-size: ${props => props.sizeDefault};
   color: ${props => props.color};
   font-family: ${props => props.theme.fonts.secondary};
   
   border-bottom: ${props => props.borderBottom
      ? `2px solid ${props.theme.colors.primary.sm}`
      : ''
   };
   border-top: ${props => props.borderTop
      ? `2px solid ${props.theme.colors.primary.sm}`
      : ''
   };


   margin-bottom: ${props => props.borderBottom ? '1.5rem' : 0} ;
   margin-top: ${props => props.borderTop ? '1.5rem' : 0} ;
   
   padding-bottom:  ${props => props.borderBottom ? '5px' : 0} ;
   padding-bottom:  ${props => props.borderTop ? '5px' : 0} ;

   ::after {
      position: absolute;
      content: '${assets.icons.heart}';
      font-size: 1rem;
      transform: rotate(30deg);
   }

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
      font-size:  ${props => props.sizeMobile};
   }

`