import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 0.1rem;
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
  padding: 2rem;
  border-radius: 0.375rem;
  width: 100%;

  @media (min-width: 768px) {
    border: 2px solid #d1d5db;
    padding: 3rem;
    border-radius: 0.375rem;
    width: 100%;
  }
`

export const FirstContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Header = styled.div``

export const Title = styled.h1`
  font-size: 1.875rem;
`

export const NewAthleteButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: 2px solid green;
  border-radius: 1rem;
  background-color: green;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.1s ease-in-out;
  font-size: 16px;

  &:hover {
    transform: scale(1.03);
  }
`

export const ListAccessButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #000000;
  text-decoration: underline;
  margin-bottom: 0.5rem;
`

export const ArrowRight = styled.svg`
  width: 1.375rem;
  height: 1.375rem;
  fill: #000000;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0.25rem;
  border: 2px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #4b5563;
  margin-bottom: 1rem;
`

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d1d5db;
  padding: 0.5rem;
`
