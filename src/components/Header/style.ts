import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #4b5563;
  display: flex;
  padding: 1rem 6rem;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled.p`
  font-size: 1.5rem;
  color: #ccc;
`

export const ContainerLogin = styled.div`
  display: flex;
`

export const LoginButton = styled.a`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 16px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

export const LoginText = styled.p`
  font-size: 1rem;
  color: #ccc;
`

export const GearIcon = styled.div`
  padding: 4px 8px;
  background-color: #333;
  border-radius: 50%;
  transition: transform 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
