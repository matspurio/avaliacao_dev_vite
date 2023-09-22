import { ArrowLeft } from '@phosphor-icons/react'
import {
  Container,
  FormContainer,
  Title,
  InputWrapper,
  Input,
  SelectWrapper,
  SelectLabel,
  Select,
  CheckboxWrapper,
  CheckboxInput,
  CheckboxLabel,
  ButtonContainer,
  BackButton,
  ButtonCancel,
  ButtonConfirm,
} from './style'

export default function CadastrarAtleta() {
  return (
    <Container>
      <FormContainer>
        <Title>Preencha as informações abaixo:</Title>
        <div>
          <InputWrapper>
            <Input placeholder="Nome completo" type="text" />
          </InputWrapper>
          <SelectWrapper>
            <SelectLabel>Informe o gênero:</SelectLabel>
            <Select name="gender">
              <optgroup label="Gênero">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </optgroup>
            </Select>
          </SelectWrapper>
        </div>
        <CheckboxWrapper>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>Atleta ativo</CheckboxLabel>
        </CheckboxWrapper>
        <ButtonContainer>
          <ButtonConfirm>Cadastrar</ButtonConfirm>
          <ButtonCancel>Cancelar</ButtonCancel>
        </ButtonContainer>
        <div>
          <BackButton href="/">
            <ArrowLeft width={20} height={20} /> Voltar para página principal
          </BackButton>
        </div>
      </FormContainer>
    </Container>
  )
}
