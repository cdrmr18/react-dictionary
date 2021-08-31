import React, { useState } from "react"   
import "./DictionarySearch.css";

export default function DictionarySearch() {
    // setting and resetting input value
    let [inputValue, setInputValue] = useState("");

    // setting and resetting input value from search bar on each change that is made
    const handleSearchInputValueChange = (e) => {
        setInputValue(e.target.value)
    }

    // using current input value to search dictionary api for word meaning
    const searchDictionary = (e) => {
        e.preventDefault();
        alert(`Searching for definition of ${inputValue}`);
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