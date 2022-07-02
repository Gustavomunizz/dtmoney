import { useState } from 'react'
import { Dashboard } from './components/dashboard'
import { Header } from './components/header'
import { NewTransactionModal } from './components/NewTransactionsModal'
import { GlobalStyle } from './styles/global'

export function App() {
  const [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsOpenTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setIsOpenTransactionModal(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isOpenTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  )
}
