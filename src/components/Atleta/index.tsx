import { Check, PencilLine, X } from '@phosphor-icons/react'
import { Button, GridContainer, GridItem } from './style'

const atletas = [
  {
    id: '1',
    name: 'Matheus Spurio',
    gender: 'Masculino',
    status: 'Inativo',
  },
  {
    id: '2',
    name: 'Maria Eduarda',
    gender: 'Feminino',
    status: 'Ativo',
  },
  {
    id: '3',
    name: 'José Augusto',
    gender: 'Masculino',
    status: 'Inativo',
  },
]

export default function AtletaCard() {
  return (
    <GridContainer>
      {atletas.map((atleta) => (
        <>
          <GridItem className="col-id">{atleta.id}</GridItem>
          <GridItem className="col-name">{atleta.name}</GridItem>
          <GridItem className="col-gender">{atleta.gender}</GridItem>
          <GridItem className="col-status">{atleta.status}</GridItem>
          <GridItem>
            <Button
              style={{ marginRight: '1rem', color: 'blue' }}
              title="Editar"
            >
              <PencilLine size={24} />
            </Button>
            {atleta.status === 'Inativo' ? (
              <Button style={{ color: 'green' }} title="Ativar">
                <Check size={24} />
              </Button>
            ) : (
              <Button title="Inativar">
                <X style={{ color: 'red' }} size={24} />
              </Button>
            )}
          </GridItem>
        </>
      ))}
    </GridContainer>
  )
}
