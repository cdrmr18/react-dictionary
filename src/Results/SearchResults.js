import React, { useState } from "react"

export default function SearchResults() {
let [result, setResult] = useState("");

const retrieveSearchResults = (result) => {
    setResult(result);
}
    return (
        <div>
            <p>
                {result}
            </p>
        </div>
    )
}