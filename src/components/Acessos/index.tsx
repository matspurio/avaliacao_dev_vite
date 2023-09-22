import React from 'react'
import { AcessoGrid, AcessoItem } from './style'

const acessos = [
  {
    name: 'Matheus Spurio',
    type: 'Entrada',
    hour: '13:30',
  },
  {
    name: 'Carlos Henrique',
    type: 'Saída',
    hour: '16:32',
  },
  {
    name: 'Maria Eduarda',
    type: 'Entrada',
    hour: '21:16',
  },
  {
    name: 'Matheus Spurio',
    type: 'Saída',
    hour: '15:21',
  },
  {
    name: 'Carlos Henrique',
    type: 'Entrada',
    hour: '07:43',
  },
  {
    name: 'Maria Eduarda',
    type: 'Saída',
    hour: '23:07',
  },
]

export default function AcessoCard() {
  return (
    <AcessoGrid>
      {acessos.map((acesso, index) => (
        <React.Fragment key={index}>
          <AcessoItem>
            <p>{acesso.name}</p>
          </AcessoItem>
          <AcessoItem>
            <p>{acesso.type}</p>
          </AcessoItem>
          <AcessoItem>
            <p>{acesso.hour}</p>
          </AcessoItem>
        </React.Fragment>
      ))}
    </AcessoGrid>
  )
}
