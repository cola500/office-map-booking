import MapContainer from "./components/MapContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Boka arbetsplats</h1>
        <p>Klicka på en arbetsplats för att boka</p>
      </header>
      <MapContainer />
      <div className="legend">
        <span className="legend__item"><span className="legend__dot legend__dot--available" /> Ledig</span>
        <span className="legend__item"><span className="legend__dot legend__dot--busy" /> Upptagen</span>
      </div>
    </div>
  );
}

export default App;
