import React, { useState } from "react"   
import axios from "axios";
import "./DictionarySearch.css";


export default function DictionarySearch(props) {
    // setting and resetting input value
    let [inputValue, setInputValue] = useState("");

    // result of axios dictionary search request to get word meanings
    const handleResponse = (response) => {
        const result = {
            word: response.data[0].word,
            phonetic: response.data[0].phonetic,
            audio: response.data[0].phonetics[0].audio,
            origin: response.data[0].origin,
            partOfSpeech: response.data[0].meanings[0].partOfSpeech,
            definition: response.data[0].meanings[0].definitions[0].definition,
            example: response.data[0].meanings[0].definitions[0].example,
            synonyms: response.data[0].meanings[0].definitions[0].synonyms,
            antonyms: response.data[0].meanings[0].definitions[0].antonyms,
        }

        props.getSearchResults(result);
    }
    
    // setting and resetting input value from search bar on each change that is made
    const handleSearchInputValueChange = (e) => {
        setInputValue(e.target.value)
    }

    // HELPER FUNCTIONS
    //checking for an empty input value entered by user
    const isEmpty = (str ) => {
            return str.trim().length < 1;
    }
    
    // using current input value to search dictionary api for word meaning
    const searchDictionary = (e) => {
        e.preventDefault();

        if (isEmpty(inputValue)) {
           // alert('empty search')
        }  else {
           //documentation of api: https://dictionaryapi.dev/
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;

            axios.get(apiUrl)
            .then(handleResponse)
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    }

    return (
        <div className="dictionary-search">
            <h1>Dictionary App</h1>
            <h2>What word do you want to look up?</h2>
            <form onSubmit={searchDictionary} className="form-inline">
                <div className="form-row align-items-center">
                    <div className="search-input col-8">
                        <input type="search" className="form-control" placeholder="Search..." onChange={handleSearchInputValueChange}>
                        </input>    
                    </div>    
                    <button type="submit" className="btn btn-primary ms-1"><i className="fas fa-search"></i></button>         
                </div>
            </form>
        </div>
    )
}