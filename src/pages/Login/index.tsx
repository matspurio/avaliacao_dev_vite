import { ArrowLeft, Barbell } from '@phosphor-icons/react'
import {
  BackPage,
  Card,
  CheckboxContainer,
  CheckboxInfo,
  Container,
  ForgotPassword,
  InputData,
  InputInfo,
  InputLabel,
  LoginButton,
  LoginText,
  Title,
} from './style'

export default function Login() {
  return (
    <Container>
      <Card>
        <Title>
          <Barbell
            style={{ marginRight: '0.5rem', color: 'black' }}
            size={40}
          />
          <p>
            RAC Gym <LoginText>Login</LoginText>
          </p>
        </Title>
        <InputInfo>
          <InputLabel>Usuário</InputLabel>
          <InputData type="text" />
        </InputInfo>
        <InputInfo>
          <InputLabel>Senha</InputLabel>
          <InputData type="password" />
        </InputInfo>
        <CheckboxContainer>
          <CheckboxInfo>
            <input style={{ marginRight: '0.2rem' }} type="checkbox" />
            <label>Manter-me conectado</label>
          </CheckboxInfo>
          <ForgotPassword href="/recuperar-senha">
            Esqueci minha senha
          </ForgotPassword>
        </CheckboxContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <LoginButton>Login</LoginButton>
        </div>
        <BackPage href="/">
          <ArrowLeft style={{ marginRight: '0.5rem' }} size={20} /> Voltar para
          a página principal
        </BackPage>
      </Card>
    </Container>
  )
}
