import {
  ModalBackdrop,
  ModalContainer,
  ModalTitle,
  ModalSelect,
  ModalLabel,
  ModalInfo,
  ModalButtons,
  ModalCancelButton,
  ModalConfirmButton,
} from './style'

interface Props {
  isVisible: boolean
  onClose: () => void
}

export default function ModalAcesso({ isVisible, onClose }: Props) {
  if (!isVisible) {
    return null
  }

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalTitle>Liberação de acessos</ModalTitle>
        <ModalInfo>
          <ModalLabel>Selecione o atleta:</ModalLabel>
          <ModalSelect name="atletas">
            <option value="Matheus Spurio">Matheus Spurio</option>
            <option value="Maria Eduarda">Maria Eduarda</option>
            <option value="Carlos Henrique">Carlos Henrique</option>
          </ModalSelect>
          <ModalLabel>Selecione o tipo de liberação:</ModalLabel>
          <ModalSelect name="tipo">
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </ModalSelect>
        </ModalInfo>
        <ModalButtons>
          <ModalCancelButton onClick={() => onClose()}>
            Cancelar
          </ModalCancelButton>
          <ModalConfirmButton>Liberar</ModalConfirmButton>
        </ModalButtons>
      </ModalContainer>
    </ModalBackdrop>
  )
}
