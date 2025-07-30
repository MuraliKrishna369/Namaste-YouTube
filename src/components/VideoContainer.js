
import { Link } from "react-router"
import Video from "./Video"
import Buttons from "./Buttons"


const VideoContainer = ({videos}) => {
    return (
        <div className="flex flex-col w-full">
            <Buttons/>
            <div className="flex flex-wrap">
    
                {videos?.map((video) => <Link key={typeof video.id === "string"? video.id : video.id.videoId}  to={`/watch?v=${typeof video.id === "string"? video.id : video.id.videoId}`} ><Video info={video}/></Link>)}  
            </div>
        </div>
    )
}
export default VideoContainer