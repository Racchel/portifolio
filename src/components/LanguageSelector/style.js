import styled from 'styled-components'


export const Select = styled.select`
   padding: 5px 3px;
   border: none;
   background-color: ${props => props.theme.colors.primary.sm};  
   text-transform: uppercase;
   color: ${props => props.theme.colors.white};  
   cursor: pointer;
   &:hover {
      background-color: ${props => props.theme.colors.primary.lg};
   }
`

export const Option = styled.option`
   background-color:  ${props => props.theme.colors.primary.lg};  

`