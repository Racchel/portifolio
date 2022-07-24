import styled from 'styled-components'

export const Item = styled.div`
   width: 200px;
   height: 200px;
   background-color: ${props => props.light
      ? props.theme.colors.primary.sm
      : props.theme.colors.primary.lg
   };

   color: ${props => props.theme.colors.white};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px 15px;
   gap: 20px;
   justify-content: space-between;
   cursor: pointer;
   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`

export const ItemTitle = styled.h3`
   font-weight: 600;
   font-size: 1.1rem;
   text-transform: uppercase;
`

export const ItemNumber = styled.p`
   font-weight: 600;
   font-size: 1.1rem;
`

export const ItemHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   gap: 20px;
`

export const ItemIcon = styled.div`
   font-size: 6rem;   
`

export const ItemCircle = styled.div`
   width: 30px;
   height: 30px;
   background-color: ${props => props.theme.colors.text.md};
   color: ${props => props.theme.colors.background.md};
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
`