import React from "react"
import "./Results.css"

export default function SearchResults(props) {
    console.log(props.word)
    return (
        <div className="results-container">
            {/* <p><i class="fas fa-volume-up"></i>{props.audio}</p> */}
            <h2>{props.word}</h2>
            <h3>{props.phonetic}</h3>
            

            <p>{props.partOfSpeech}</p>
            <p>{props.definition}</p>

            <p>{props.origin}</p>
            <p>{props.example}</p>

            {/* <p>{props.synonyms}</p>
            <p>{props.antonyms}</p> */}
        </div>
    )
}