import React, { useState } from "react"   
import axios from "axios";
import "./DictionarySearch.css";


export default function DictionarySearch(props) {
    // setting and resetting input value
    let [inputValue, setInputValue] = useState("");

    // result of axios dictionary search request to get word meanings
    const handleResponse = (response) => {
    //    let meaning = response.data[0].meanings[0].definitions[0].definition;
       props.getSearchResults(response);
    }
    
    // setting and resetting input value from search bar on each change that is made
    const handleSearchInputValueChange = (e) => {
        setInputValue(e.target.value)
    }

    // using current input value to search dictionary api for word meaning
    const searchDictionary = (e) => {
        e.preventDefault();
        // documentation of api: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;

        axios.get(apiUrl)
        .then(handleResponse)
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    return (
        <div className="dictionary-search text-center">
            <form onSubmit={searchDictionary}>
                <input type="search" onChange={handleSearchInputValueChange}>
                </input>
            </form>
        </div>
    )
}