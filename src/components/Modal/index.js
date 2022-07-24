import * as S from './style'

export const Modal = ({ data, handleClickOnClose }) => {
   return (
      <S.ModalContainer>
         <S.ModalClose>
            <S.IconClose onClick={() => handleClickOnClose()} />
         </S.ModalClose>
         <S.ModalIcon>
            {data.icon}
         </S.ModalIcon>
         <S.ModalTitle>
            {data.title}
         </S.ModalTitle>
         <S.ModalDescription>
            <S.ModalTag>{data.problem.tag} </S.ModalTag>
            {data.problem.description}
         </S.ModalDescription>
         <S.ModalDescription>
            <S.ModalTag>{data.solution.tag}  </S.ModalTag>
            {data.solution.description}
         </S.ModalDescription>
      </S.ModalContainer>
   )
}