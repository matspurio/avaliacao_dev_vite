import { Check, PencilLine, X } from '@phosphor-icons/react'
import { Button, GridContainer, GridItem } from './style'
import { useState } from 'react'
import ModalStatusAtivo from '../ModalStatusAtivo'
import ModalStatusInativo from '../ModalStatusInativo'

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
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showModalInativo, setShowModalInativo] = useState<boolean>(false)

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
              <Button
                onClick={() => setShowModal(true)}
                style={{ color: 'green' }}
                title="Ativar"
              >
                <Check size={24} />
              </Button>
            ) : (
              <Button
                onClick={() => setShowModalInativo(true)}
                title="Inativar"
              >
                <X style={{ color: 'red' }} size={24} />
              </Button>
            )}
          </GridItem>
        </>
      ))}
      <ModalStatusAtivo
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
      <ModalStatusInativo
        isVisible={showModalInativo}
        onClose={() => setShowModalInativo(false)}
      />
    </GridContainer>
  )
}
