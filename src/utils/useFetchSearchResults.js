import { useEffect, useState } from "react"
import { youtubeSearchResultsUrl } from "./constants"


const useFetchSearchResults = (query) => {
    const [searchResults, setSearchResults] = useState(null)
    useEffect(() => {
        fetchSearchResults()
    }, [query])
    const fetchSearchResults = async () => {
        const data = await fetch(youtubeSearchResultsUrl+query)
        const json = await data.json()
        setSearchResults(json.items)
    }
    return searchResults
}
export default useFetchSearchResults