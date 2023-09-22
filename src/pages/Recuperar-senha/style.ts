import styled from 'styled-components'

export const RecuperarWrapper = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RecuperarFormContainer = styled.div`
  background-color: #4b5563;
  padding: 3rem;
  border-radius: 8px;
  width: 60%;
  text-align: center;

  @media (min-width: 768px) {
    background-color: #4b5563;
    padding: 2rem;
    border-radius: 8px;
    width: 60%;
    text-align: center;
  }

  @media (min-width: 640px) {
    background-color: #4b5563;
    padding: 2rem;
    border-radius: 8px;
    width: 40%;
    text-align: center;
  }
`

export const RecuperarTitle = styled.h1`
  font-size: 1.5rem;
  color: #d1d5db;
  margin-bottom: 3rem;
`

export const RecuperarInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #d1d5db;
`

export const RecuperarLabel = styled.label`
  font-size: 1rem;
  color: #d1d5db;
  margin-bottom: 8px;
  text-align: start;
`

export const RecuperarInput = styled.input`
  background: transparent;
  width: 100%;
  border: none;
  color: #d1d5db;
  font-size: 1rem;
  padding: 4px 0;
`

export const RecuperarButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 4px;
  width: 40%;
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  margin-top: 3rem;
  cursor: pointer;
`

export const RecuperarLink = styled.a`
  font-size: 1rem;
  color: #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  text-decoration: none;

  svg {
    fill: #d1d5db;
    margin-right: 4px;
  }
`
