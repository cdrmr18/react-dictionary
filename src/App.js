import './App.css';
import React, { useState } from "react"
import DictionarySearch from './DictionarySearch/DictionarySearch'
import SearchResults from './Results/SearchResults';

export default function App() {
  let [result, setResult] = useState("");

  const retrieveSearchResults = (result) => { 
      setResult(result);
  }

  return (
    <div className="App">
      <div className="container text-center">
        <header className="App-header text-center">
        Dictionary App
        </header>
        <main> 
          <DictionarySearch getSearchResults={retrieveSearchResults} />
          <SearchResults {...result} />
        </main>
        <footer className="text-center">
          Coded by Kathy Tavia | <a href="https://github.com/cdrmr18">My Github</a>
        </footer>
      </div>
    </div>
  );
}

