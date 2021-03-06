import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTrasactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTranscationModalOpen, setIsNewTranscationModalOpen] = useState(
    false
  );

  function handleOpenNewTranscationModal() {
    setIsNewTranscationModalOpen(true);
  }

  function handleCloseNewTranscationModal() {
    setIsNewTranscationModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransationModal={handleOpenNewTranscationModal} />
      <Dashboard />
      <NewTrasactionModal
        isOpen={isNewTranscationModalOpen}
        onRequestClose={handleCloseNewTranscationModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
