import './App.css';
import DictionarySearch from './DictionarySearch/DictionarySearch'
import SearchResults from './Results/SearchResults';

export default function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <header className="App-header text-center">
        Dictionary App
        </header>
        <main> 
          <DictionarySearch />
          <SearchResults />
        </main>
        <footer className="text-center">
        Coded by Kathy Tavia | <a href="https://github.com/cdrmr18">My Github</a>
      </footer>
      </div>
    </div>
  );
}

