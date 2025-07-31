import { useEffect, useState } from "react"
import { youtubeVideosUrl } from "./constants"
import { useDispatch } from "react-redux"
import { activeDefaultSidebar, toggleSidebar } from "./appSlice"
const useFetchVideos = () => {
    const [videos, setVideos] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(activeDefaultSidebar())
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