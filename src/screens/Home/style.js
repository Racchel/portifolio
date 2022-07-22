import styled from 'styled-components'


export const Content = styled.div`
   width: 80%;
   display: flex;
   justify-content: end;

   @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
      width: 100%;
      justify-content:  center;
      padding: 0 20px 50px 20px;
   }

`