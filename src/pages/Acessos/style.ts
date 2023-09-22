import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 7rem 0.2rem;
  background-color: #e5e7eb;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 6rem;
    background-color: #e5e7eb;
    width: 100%;
  }

  @media (min-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 7rem 6rem;
    background-color: #e5e7eb;
    width: 100%;
  }
`

export const Container = styled.div`
  padding: 0.2rem;
  width: 100%;

  @media (min-width: 768px) {
    border: 2px solid #d1d5db;
    padding: 3rem;
    border-radius: 0.375rem;
    width: 100%;
  }
`

export const Header = styled.div``

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  color: #000000;
  text-decoration: underline;
  margin-bottom: 1rem;
`

export const ArrowLeft = styled.svg`
  width: 1.375rem;
  height: 1.375rem;
  fill: #000000;
  margin-right: 0.5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`

export const Title = styled.h1`
  font-size: 1.875rem;
`

export const DataLabel = styled.label`
  margin-right: 0.5rem;
`

export const InputData = styled.input`
  background: none;
  border-radius: 5px;
  padding: 5px;
  border: 2px solid #808080;
`

export const LiberateButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: green;
  border: none;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    transform: scale(1.05);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.25rem;
  border: 2px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #4b5563;
  margin-bottom: 1rem;
  margin-top: 1rem;
`

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d1d5db;
  padding: 0.5rem;
`
