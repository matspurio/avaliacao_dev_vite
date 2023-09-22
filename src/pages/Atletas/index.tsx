import { ArrowRight } from '@phosphor-icons/react'
import {
  Container,
  FirstContainer,
  Grid,
  GridItem,
  ListAccessButton,
  Main,
  NewAthleteButton,
  Title,
} from './style'
import AtletaCard from '../../components/Atleta'

export default function Atletas() {
  return (
    <Main>
      <Container>
        <div>
          <FirstContainer>
            <Title>Listagem de atletas</Title>
            <NewAthleteButton href="/cadastrar">
              Cadastrar novo atleta
            </NewAthleteButton>
          </FirstContainer>
          <div>
            <ListAccessButton href="/acessos">
              Ir para listagem de acessos
              <ArrowRight style={{ marginLeft: '0.2rem' }} size={20} />
            </ListAccessButton>
          </div>
          <Grid>
            <GridItem>ID</GridItem>
            <GridItem>Nome</GridItem>
            <GridItem>Gênero</GridItem>
            <GridItem>Situação</GridItem>
            <GridItem>Ações</GridItem>
          </Grid>
        </div>
        <AtletaCard />
      </Container>
    </Main>
  )
}
