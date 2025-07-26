import { useEffect, useState } from "react"
import { YouTube_Vidoes_Url } from "../utils/constants"
import { Link } from "react-router"
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
            <div className="flex flex-wrap">
                {videos.map((video) => <Link  to={"/watch?v="+video.id} key={video.id}><Video info={video}/></Link>)}  
            </div>
        </div>
    )
}
export default MainContainer