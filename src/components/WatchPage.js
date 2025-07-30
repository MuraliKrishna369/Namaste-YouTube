import { useEffect } from "react"
import { useSearchParams } from "react-router"
import { useDispatch } from "react-redux"
import { closeSlidebar } from "../utils/appSlice"

const WatchPage = () => {
    const dispatch = useDispatch()
    const [searchParam] = useSearchParams();
    const videoId = searchParam.get("v")
    
    useEffect(() => {
        dispatch(closeSlidebar())
    }, [])
   
    return (
        <div>
            <div>
                <iframe width="480" height="270" src={"https://www.youtube.com/embed/" + videoId}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default WatchPage