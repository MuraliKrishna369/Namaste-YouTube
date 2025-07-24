import { useEffect, useState } from "react"
import { YouTube_Vidoes_Url } from "../utils/constants"
import Video from "./Video"

const MainContainer = () => {
    const [videos, setVidoes] = useState(null)
    useEffect(()=> {
        fetchVideos()
    },[])
    const fetchVideos = async () => {
        const data = await fetch(YouTube_Vidoes_Url)
        const json = await data.json()
        setVidoes(json.items)
    }
    if (videos === null) return <h1>Loading...</h1>
    return (
        <div>
            <h1>Button Lists</h1>
            <div>
                <Video info={videos[0]}/>
            </div>
        </div>
    )
}
export default MainContainer