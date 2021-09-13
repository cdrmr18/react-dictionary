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
        <div className="row text-center">
          <div className="col-sm-12 col-md-6">
            <h1>Dictionary App</h1>
            <h2>What word do you want to look up?</h2>
            <DictionarySearch getSearchResults={retrieveSearchResults} />
            <footer className="text-center">
              <p>Coded by Kathy Tavia | <a href="https://github.com/cdrmr18">My Github</a></p>
            </footer>
          </div>

          <div className="col-sm-12 col-md-6">
            <SearchResults {...result} />
          </div>  
        </div> 
      </div>
    </div>
  );
}

