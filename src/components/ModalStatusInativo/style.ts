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

export const ModalContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 0.25rem;
  padding: 1rem;
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 640px) {
    width: 30%;
  }
`

export const ModalTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 1rem;
`
export const ModalInfo = styled.p`
  font-size: 14px;
  text-align: center;
`
export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`
export const CancelButton = styled.button`
  padding: 0 1rem;
  border-radius: 5px;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
`
export const ConfirmButton = styled.button`
  padding: 0 1.5rem;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  cursor: pointer;
`
