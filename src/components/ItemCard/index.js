import * as S from './style'

export const ItemCard = ({ number, title, icon, handleClick, light }) => {

   return (
      <S.Item onClick={handleClick} light={light} >
         <S.ItemHeader>
            <S.ItemCircle>
               <S.ItemNumber>{number} </S.ItemNumber>
            </S.ItemCircle>
            <S.ItemTitle > {title} </S.ItemTitle>
         </S.ItemHeader>

         <S.ItemIcon >
            {icon}
         </S.ItemIcon>
      </S.Item>
   )
}
