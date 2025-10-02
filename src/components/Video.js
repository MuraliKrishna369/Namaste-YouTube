
import useDate from "../utils/useDate"
import useViewCount from "../utils/useViewCount"


const Video = ({info}) => {
    const {title, channelTitle, thumbnails, publishedAt} = info.snippet
    const publishedDate =  useDate(publishedAt)
   
   
    const totalViewCount = useViewCount(info?.statistics?.viewCount)
    
    return (
        <div className="max-w-[340px] sm:max-w-[250px]  text-xs m-2 cursor-pointer border-2 border-blue-300">          
            <img className="rounded-lg w-full " alt="video-thumnail" src={thumbnails.medium.url}/>            
            <div className="my-2">
                <div className="flex items-center my-1">
                    <div className="w-11 h-6 sm:w-14 sm:h-8 bg-gray-500 rounded-full flex justify-around items-center">
                        <span className="font-medium">{channelTitle.slice(0,1)}</span>
                    </div>
                    <h1 className="font-medium sm:text-sm ml-2 w-[400px]">{title}</h1>
                </div>
                <div className="ml-[39px] text-gray-300">
                    <p>{channelTitle}</p>
                    <p>{totalViewCount}  {publishedDate}</p>
                </div>
            </div>
        </div>
    )
}
export default Video