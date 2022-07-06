import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './style'

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        {transactions.map(transaction => {
          return (
            <tbody key={transaction.id}>
              <tr>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                    transaction.amount
                  )}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </Container>
  )
}
