import './App.css';
import React, { useState } from "react"
import DictionarySearch from './DictionarySearch/DictionarySearch'
import SearchResults from './Results/SearchResults';
import Footer from './Footer';

export default function App() {
  let [result, setResult] = useState("");

  const retrieveSearchResults = (result) => { 
      setResult(result);
  }

  return (
    <div className="App container">
        <div className="row main">
          <div className="search-side col-sm-12 col-md-6 text-center">
            <DictionarySearch getSearchResults={retrieveSearchResults} />
            <Footer />
          </div>

          <div className="search-results col-sm-12 col-md-6 p-4">
            <SearchResults {...result} />
          </div>  
        </div> 
    </div>
  );
}

