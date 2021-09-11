import React from "react"

export default function SearchResults(props) {
    // setting dictinary vars from props with search result data being passed from a App.js function
    let meaning = props.resultData.data[0].meanings[0].definitions[0].definition;

    return (
        <div>
            <p>
                {meaning}
            </p>
        </div>
    )
}