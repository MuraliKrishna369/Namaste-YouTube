
import { Link } from "react-router"
import Video from "./Video"


const VideoContainer = ({videos}) => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-wrap justify-center mt-2 p-2 w-full border-2 border-green-400">
                {videos?.map((video) => <Link key={typeof video.id === "string"? video.id : video.id.videoId}  to={`/watch?v=${typeof video.id === "string"? video.id : video.id.videoId}`} ><Video info={video}/></Link>)}  
            </div>
        </div>
    )
}
export default VideoContainer