import VideoContainer from "./VideoContainer"
import useFetchVideos from "../utils/useFetchVideos"
import { useEffect } from "react"
const Home = () => {
    const videos = useFetchVideos()
    if (videos === null) return <h1>Loading...</h1>
    return <VideoContainer videos={videos}/>
    
}
export default Home