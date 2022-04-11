import React, { useReducer, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
    const [value, setValue] = useState('')

    const debounceSearch = useDebounce(search, 500)

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
    }

    return (
        <div>
            <input type='text' value={value} onChange={e => {
                setValue(e.target.value)
                debounceSearch(e.target.value)
            }} />
        </div>
    )
}

export default Search