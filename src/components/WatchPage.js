//import useDate from "../utils/useDate"
import { useEffect, useState } from "react"
import { YouTube_Comments_Url } from "../utils/constants"
import { useSearchParams } from "react-router"
import { useDispatch } from "react-redux"
import { closeSlidebar } from "../utils/appSlice"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';





const WatchPage = () => {
    const [comments, setComments] = useState(null)
    const dispatch = useDispatch()
    const [searchParam] = useSearchParams();
    const videoId = searchParam.get("v")
    

    useEffect(() => {
        dispatch(closeSlidebar())
        fetchComments()
        
    }, [])
    const fetchComments = async () => {
        const data = await fetch(YouTube_Comments_Url+videoId)
        const json = await data.json()
        setComments(json.items[0])
        console.log(comments)
       
    }
    if (comments === null) return null
    const {authorDisplayName,authorProfileImageUrl,updatedAt,authorChannelId,textDisplay} = comments.snippet.topLevelComment.snippet
    //const commentPostedDate = useDate(updatedAt)

    return (
        <div>
            <div>
                <iframe width="480" height="270" src={"https://www.youtube.com/embed/" + videoId}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div>
                <h1>Comments</h1>
                <div>
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex justify-around items-center">
                        <span className="font-medium">{authorDisplayName[1]}</span>
                    </div>
                    <div>
                        <p>{authorDisplayName} <span className="text-xs text-gray-300">{}</span></p>
                        <p>{textDisplay}</p>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <ThumbUpOutlinedIcon className="ml-3 hover:bg-[#2b2b2b] p-1 rounded-full cursor-pointer"/>
                                <span className="ml-1 text-xs">5.2k</span>
                            </div>

                            <ThumbDownOutlinedIcon className="ml-3 hover:bg-[#2b2b2b] p-1 rounded-full cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WatchPage