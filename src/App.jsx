import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <div>
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </GlobalProvider>
    </>
  );
};

export default App;
