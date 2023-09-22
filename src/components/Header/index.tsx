import { Barbell, Gear, UserCircle } from '@phosphor-icons/react'
import {
  HeaderContainer,
  LogoContainer,
  LogoText,
  LoginButton,
  LoginText,
  GearIcon,
  ContainerLogin,
} from './style'

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Barbell style={{ marginRight: '0.6rem' }} size={44} />
        <LogoText>RAC Gym</LogoText>
      </LogoContainer>
      <ContainerLogin>
        <LoginButton href="/login">
          <UserCircle
            style={{ color: '#ccc', marginRight: '0.4rem' }}
            size={26}
          />
          <LoginText>Login</LoginText>
        </LoginButton>
        <GearIcon>
          <Gear style={{ color: '#ccc' }} size={26} />
        </GearIcon>
      </ContainerLogin>
    </HeaderContainer>
  )
}
