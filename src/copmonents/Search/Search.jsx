import { useState } from "react"
import "./Search.css"
import searchsvg from "/header/search.svg"
import { products } from "/data";
import { NavLink } from "react-router-dom";
import SearchProduct from "../SearchProduct/SearchProduct";

export default function Search(){


    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

  

    const handleSearch = (event) =>{
        const term = event.target.value
        setSearchTerm(term)

        if(term.trim() == ""){
            setSearchResults([])
        }else{
            const results = products.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        )
            setSearchResults(results)
        }

    }

    return(
        <>
        <div className="searchform">
            <input type="text" className="search" placeholder="поиск" value={searchTerm} onChange={handleSearch} />

            { searchResults.length > 0 && (
            <ul className="searchresults">
                {searchResults.map((result) => (
                    <NavLink className="searchlink" to={`/product/${result.id}`}><SearchProduct key={result.id} searchproduct={result} /></NavLink>
                ))}
            </ul>
            )}
        </div>
        
        </>
    )
}