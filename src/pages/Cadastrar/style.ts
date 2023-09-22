import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e7eb;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  background-color: #4b5563;
  padding: 2rem;
  width: 33.33%;
  border-radius: 0.375rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #d1d5db;
  text-align: center;
`

export const InputWrapper = styled.div`
  border-bottom: 2px solid #d1d5db;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  background: transparent;
  outline: none;
  color: #d1d5db;
  width: 100%;
  border: none;
  padding: 5px 0;
  font-size: 1rem;

  &::placeholder {
    color: #c0c0c0;
  }
`

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

export const SelectLabel = styled.p`
  color: #d1d5db;
  margin-right: 1rem;
  font-size: 18px;
`

export const Select = styled.select`
  background: transparent;
  border: 2px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  color: #d1d5db;
  padding: 0.3rem;
  font-size: 1rem;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const CheckboxInput = styled.input`
  width: 1.125rem;
  height: 1.125rem;
`

export const CheckboxLabel = styled.label`
  color: #d1d5db;
  margin-left: 0.25rem;
  font-size: 18px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`

export const ButtonConfirm = styled.button`
  background-color: green;
  color: #ffffff;
  padding: 0.25rem 1rem;
  width: 40%;
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
`

export const ButtonCancel = styled.button`
  background-color: red;
  color: #ffffff;
  padding: 0.25rem 1rem;
  width: 40%;
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
`

export const BackButton = styled.a`
  color: #d1d5db;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-top: 2rem;
`

export const ArrowLeft = styled.svg`
  fill: #d1d5db;
  margin-right: 0.25rem;
`
