import styled from 'styled-components'

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalTitle = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 0.25rem;
  padding: 1rem;
  width: 20%;
`

export const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ModalSelect = styled.select`
  width: 60%;
  border-radius: 0.25rem;
  padding: 0.25rem;
  margin-bottom: 1rem;
`

export const ModalLabel = styled.label`
  margin-bottom: 0.5rem;
`

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`

export const ModalCancelButton = styled.button`
  padding: 0.5rem;
  background-color: red;
  border-radius: 0.25rem;
  color: white;
  border: none;
  cursor: pointer;
`

export const ModalConfirmButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: green;
  border-radius: 0.25rem;
  color: white;
  border: none;
  cursor: pointer;
`
