import React from 'react'
import SearchButton from './SearchButton'

const SearchBar = () => {
    const searchBarStyle = {
        display: "flex",
        flexGrow: "2"
    }

    const wrapperStyle = {
        border: "2px solid #343434",
        width: "350px",
        display: "flex",
        justifyContent:" space-between",
        borderRadius: "5px"
    }

  return (
    <div style={wrapperStyle}>
        <div style={searchBarStyle}>
            <input style={{
                height: "38px",
                padding: "0 0 0 2px",
                margin: 0,
                width: "100%",
                border: "none",
                outline: 0,
                fontWeight: "600",
                letterSpacing: "1.4px",
                borderRadius: "5px"
            }} />
        </div>
            <SearchButton/>
    </div>
  )
}

export default SearchBar