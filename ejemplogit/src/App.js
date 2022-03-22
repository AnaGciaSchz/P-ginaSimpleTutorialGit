import logo from './whale.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Nos gustan las ballenas!
        </p>
        <a
          className="App-link"
          href="https://ritsi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sorpresa
        </a>
      </header>
    </div>
  );
}

export default App;
