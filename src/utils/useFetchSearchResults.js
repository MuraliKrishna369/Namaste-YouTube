import { useEffect, useState } from "react"
import { youtubeSearchResultsUrl } from "./constants"
import { useDispatch } from "react-redux"
import { activeDefaultSidebar } from "./appSlice"


const useFetchSearchResults = (query) => {
    const [searchResults, setSearchResults] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(activeDefaultSidebar())
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