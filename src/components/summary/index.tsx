import { Container } from './styles'
import incomesImg from '../../assets/incomes.svg'
import outcomesImg from '../../assets/outcomes.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomesImg} alt="entrada" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomesImg} alt="saida" />
        </header>
        <strong> R$ 1.259,00</strong>
      </div>

      <div className="total">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </Container>
  )
}
