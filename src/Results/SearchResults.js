import React from "react"

export default function SearchResults(props) {
    // console.log(props.searchResult);
    let meaning = props.searchResult.data[0].meanings[0].definitions[0].definition;

    return (
        <div>
            <p>
                {meaning}
            </p>
        </div>
    )
}