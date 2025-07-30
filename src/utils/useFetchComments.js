import { useEffect, useState } from "react"
import { YouTube_Comments_Url } from "./constants"

const useFetchComments = (videoId) => {
    const [comments, setComments] = useState(null)
    useEffect(() => {
        fetchComments()
    }, [])
     const fetchComments = async () => {
        const data = await fetch(YouTube_Comments_Url+videoId)
        const json = await data.json()
        setComments(json.items)
       
    }
    return comments
}
export default useFetchComments