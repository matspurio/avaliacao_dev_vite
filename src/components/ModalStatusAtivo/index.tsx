import {
  CancelButton,
  ConfirmButton,
  ModalBackdrop,
  ModalButtons,
  ModalContainer,
  ModalInfo,
  ModalTitle,
} from './style'

interface Props {
  isVisible: boolean
  onClose: () => void
}

export default function ModalStatusAtivo({ isVisible, onClose }: Props) {
  if (!isVisible) {
    return null
  }

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalTitle>Alterar Status</ModalTitle>
        <ModalInfo>Deseja alterar o status deste atleta para ativo?</ModalInfo>
        <ModalButtons>
          <CancelButton onClick={() => onClose()}>Cancelar</CancelButton>
          <ConfirmButton>Alterar</ConfirmButton>
        </ModalButtons>
      </ModalContainer>
    </ModalBackdrop>
  )
}
