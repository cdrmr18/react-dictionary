import './App.css';
import DictionarySearch from './DictionarySearch/DictionarySearch'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        Dictionary App
        </header>
        <main> 
          <DictionarySearch />
        </main>
        <footer className="text-center">
        Coded by Kathy Tavia | <a href="https://github.com/cdrmr18">My Github</a>
      </footer>
      </div>
    </div>
  );
}

