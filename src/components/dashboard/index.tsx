import { Summary } from '../summary'
import { Container } from './styles'
import { TransactionsTable } from '../TransactionsTable'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}
