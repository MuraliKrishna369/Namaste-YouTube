
import { useEffect, useRef, useState } from "react"
import useDate from "../utils/useDate"
import useViewCount from "../utils/useViewCount"


const Video = ({info}) => {
    const [videoAutoPlayed, setVideoAutoPlayed] = useState(false)
    const timerId = useRef(null)
    const {title, channelTitle, thumbnails, publishedAt} = info.snippet
    const publishedDate =  useDate(publishedAt)
    const totalViewCount = useViewCount(info.statistics.viewCount)
    
    useEffect(() => {
        // This useEffect clears the timeout whenever videoAutoPlayed changes,
        // which is good for stopping the timer if the user leaves the element
        // before the timeout fires or after the video starts playing.
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
    }, [videoAutoPlayed])
    const handleMouseEnter = () => { 
    // Only set the timeout if a video is not already autplaying
        if (!videoAutoPlayed) {
            timerId.current = setTimeout(() => {
                setVideoAutoPlayed(true); // This will cause a re-render and display the iframe
            }, 10000); // 10 seconds
        }
    }
    const handleMouseLeave = () => {
        if (timerId.current) {
            clearTimeout(timerId.current);
            timerId.current = null; // Reset the ref
        }
            setVideoAutoPlayed(false); // Hide the iframe and show the thumbnail again
            console.log(info.id + " setTimeout cleared");
        }

    return (
        <div onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} className="w-[450px]  text-xs m-2 cursor-pointer">
            {videoAutoPlayed ? 
                <iframe width={450} height={250}  src={"https://www.youtube.com/embed/" + info.id + "?autoplay=1&mute=1"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                :
                <img className="rounded-lg w-full " alt="video-thumnail" src={thumbnails.medium.url}/>
            }
            
            <div className="my-2">
                <div className="flex items-center my-1">
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex justify-around items-center">
                        <span className="font-medium">M</span>
                    </div>
                    <h1 className="font-medium text-sm ml-2 w-[400px]">{title}</h1>
                </div>
                <div className="ml-[39px] text-gray-300">
                    <p>{channelTitle}</p>
                    <p>{totalViewCount} views. {publishedDate} ago</p>
                </div>
            </div>
        </div>
    )
}
export default Video