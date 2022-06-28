import { Container } from './style'

export function TransactionsTable() {
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

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">- R$ 59,00</td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Aluguel de apartamento</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Casa</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$ 5.400,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
