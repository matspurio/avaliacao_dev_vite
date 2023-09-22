import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  padding: 2px;
`

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  text-align: center;
  font-size: 14px;
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
