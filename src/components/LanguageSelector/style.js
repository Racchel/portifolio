import styled from 'styled-components'


export const Select = styled.select`
   width: ${(props) => props.desktop ? 'fit-content' : '100%'};
   margin-bottom: ${(props) => props.desktop ? '0' : '2rem'};
   color: ${props => props.theme.colors.white};  
   background-color: ${props => props.theme.colors.primary.sm};  
   padding: 5px 3px;
   border: none;
   text-align: center;
   text-transform: uppercase;
   cursor: pointer;
   
   @media screen and (max-width: ${props => props.theme.breakpoints.md}){
      display: ${(props) => props.desktop ? 'none' : 'block'};
   }
   
   &:hover {
      background-color: ${props => props.theme.colors.primary.lg};
   }
`

export const Option = styled.option`
   background-color:  ${props => props.theme.colors.primary.lg};  

`