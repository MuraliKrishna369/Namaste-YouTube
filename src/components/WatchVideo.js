import { useEffect, useState } from "react"
import { YouTube_Clicked_Video_Url } from "../utils/constants"
import { useSearchParams } from "react-router"
import { useDispatch } from "react-redux"
import { closeSlidebar } from "../utils/appSlice"

const WatchVideo = () => {
    const dispatch = useDispatch()
    const [searchParam, setSearchParam] = useSearchParams();
    const videoId = searchParam.get("v")
    

    useEffect(() => {
        dispatch(closeSlidebar())
        fetchVideoData()
        
    }, [])
    const fetchVideoData = async () => {
        const data = await fetch(YouTube_Clicked_Video_Url + "&id="+videoId)
        const json = await data.json()
       
    }
    return (
        <div>
            <div>
                <iframe width="480" height="270" src={"https://www.youtube.com/embed/" + videoId}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default WatchVideo