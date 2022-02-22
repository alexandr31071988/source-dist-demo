import React from "react"

import './style.css'

const Search = ({searchTitle, handleSearch}) => {

  return <input className="search-field" placeholder="Поиск" value={searchTitle} onChange={handleSearch}/>
}

export default Search