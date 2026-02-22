import "./App.css";
import Header from "./components/Header/Header";
import ProteinTable from "./components/ProteinTable/ProteinTable";
import ProteinForm from "./components/ProteinForm/ProteinForm";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ProteinForm />
    </div>
  );
}

export default App;
