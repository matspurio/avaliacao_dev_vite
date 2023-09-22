import { ArrowLeft } from '@phosphor-icons/react'
import { useRef } from 'react'
import {
  RecuperarWrapper,
  RecuperarFormContainer,
  RecuperarTitle,
  RecuperarLabel,
  RecuperarInput,
  RecuperarButton,
  RecuperarLink,
  RecuperarInfo,
} from './style'

export default function RecuperarSenha() {
  const inputEmail = useRef<HTMLInputElement>(null)

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault()
    const email = inputEmail.current?.value
    alert(`\nAs instruções foram enviadas para o e-mail:\n${email}`)
  }

  return (
    <RecuperarWrapper>
      <RecuperarFormContainer>
        <RecuperarTitle>Informe seu e-mail:</RecuperarTitle>
        <RecuperarInfo>
          <RecuperarLabel>E-mail</RecuperarLabel>
          <RecuperarInput ref={inputEmail} type="text" />
        </RecuperarInfo>
        <div>
          <RecuperarButton type="submit" onClick={sendEmail}>
            Enviar
          </RecuperarButton>
        </div>
        <div>
          <RecuperarLink href="/login">
            <ArrowLeft size={20} weight="thin" />
            Voltar para página de Login
          </RecuperarLink>
        </div>
      </RecuperarFormContainer>
    </RecuperarWrapper>
  )
}
