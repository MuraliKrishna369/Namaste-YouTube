
import useDate from "../utils/useDate"
import useViewCount from "../utils/useViewCount"


const Video = ({info}) => {
    const {title, channelTitle, thumbnails, publishedAt} = info.snippet
    const publishedDate =  useDate(publishedAt)
    const totalViewCount = useViewCount(info.statistics.viewCount)
    return (
        <div  className="w-[450px]  text-xs m-2 cursor-pointer">          
            <img className="rounded-lg w-full " alt="video-thumnail" src={thumbnails.medium.url}/>            
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