import { useEffect, useState } from "react"
import { youtubeVideosUrl } from "./constants"
const useFetchVideos = () => {
    const [videos, setVideos] = useState(null)
    useEffect(() => {
        fetchVideos()
    }, [])
    const fetchVideos = async () => {
        const data = await fetch(youtubeVideosUrl)
        const json = await data.json()
        setVideos(json.items)
    }
    return videos
    
}
export default useFetchVideos