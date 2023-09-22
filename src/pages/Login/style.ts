import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e7eb;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  background-color: #4b5563;
  padding: 2rem;
  width: 30%;
  border-radius: 0.5rem;
`

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d1d5db;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`
export const LoginText = styled.span`
  color: black;
  margin-left: 0.2rem;
`

export const InputLabel = styled.label`
  font-size: 1rem;
  color: #d1d5db;
`

export const InputInfo = styled.div`
  background: transparent;
  border-bottom: 1px solid;
  color: #d1d5db;
  outline: none;
  width: 100%;
  margin-bottom: 1.5rem;
`

export const InputData = styled.input`
  background: transparent;
  border: none;
  color: #d1d5db;
  outline: none;
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;

  input[type='checkbox'] {
    width: 0.875rem;
    height: 0.875rem;
  }

  label {
    font-size: 1rem;
    color: #d1d5db;
    margin-left: 0.25rem;
  }
`

export const CheckboxInfo = styled.div`
  display: flex;
  align-items: center;
`

export const ForgotPassword = styled.a`
  text-decoration: underline;
  font-size: 1rem;
  background: none;
  border: none;
  color: #d1d5db;
  cursor: pointer;
`

export const LoginButton = styled.button`
  background-color: #dc2626;
  color: #ffffff;
  padding: 0.25rem 1rem;
  width: 40%;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
`

export const BackPage = styled.a`
  font-size: 1rem;
  color: #d1d5db;
  background: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-top: 3rem;
`
