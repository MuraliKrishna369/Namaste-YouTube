import { useSearchParams } from "react-router"
import useFetchSearchResults from "../utils/useFetchSearchResults"
import VideoContainer from "./VideoContainer"


const ResultPage = () => {
    const [searchParam] = useSearchParams()
    const searchResults = useFetchSearchResults(searchParam.get("search_query"))
    if (searchResults === null) return <h1>Loading...</h1>
    return <VideoContainer videos={searchResults}/>
    
}
export default ResultPage