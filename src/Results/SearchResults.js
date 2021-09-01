import React from "react"

export default function SearchResults(props) {
    // console.log(props.resultData);
    let meaning = props.resultData.data[0].meanings[0].definitions[0].definition;

    return (
        <div>
            <p>
                {meaning}
            </p>
        </div>
    )
}