import "./App.css";
import Header from "./components/Header/Header";
import ProteinForm from "./components/ProteinForm/ProteinForm";

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="app-content">
        <ProteinForm />
      </div>
    </div>
  );
}

export default App;
