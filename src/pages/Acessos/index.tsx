import { ArrowLeft } from '@phosphor-icons/react'
import {
  Main,
  Header,
  Container,
  BackButton,
  TitleContainer,
  Title,
  LiberateButton,
  Grid,
  GridItem,
  DataLabel,
  InputData,
} from './style'
import AcessoCard from '../../components/Acessos'
import ModalAcesso from '../../components/Modal'
import { useState } from 'react'

export default function Acessos() {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <Main>
      <Header />
      <Container>
        <BackButton href="/">
          <ArrowLeft style={{ marginRight: '0.3rem' }} size={20} />
          Voltar para listagem de atletas
        </BackButton>
        <TitleContainer>
          <Title>Listagem de acessos</Title>
          <LiberateButton onClick={() => setShowModal(true)}>
            Liberação de atletas
          </LiberateButton>
        </TitleContainer>
        <DataLabel>Selecione a data desejada:</DataLabel>
        <InputData type="date" />
        <Grid>
          <GridItem>Nome do Atleta</GridItem>
          <GridItem>Entrada/Saída</GridItem>
          <GridItem>Horário</GridItem>
        </Grid>
        <AcessoCard />
      </Container>
      <ModalAcesso isVisible={showModal} onClose={() => setShowModal(false)} />
    </Main>
  )
}
