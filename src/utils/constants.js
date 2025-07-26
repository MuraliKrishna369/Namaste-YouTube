


export const YouTubeLogo =  () => {
    return (
        <div className="ml-6 flex  items-center">
            <img className="max-h-8" src="https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144_v2.png"/>
            <span className="font-medium text-xl ml-1">YouTube</span>
        </div>
    )
}

export const YouTube_Vidoes_Url = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=30&key="+ process.env.PARCEL_APP_GOOGLE_API_KEY 
export const YouTube_Clicked_Video_Url = "https://www.googleapis.com/youtube/v3/videos?part=player&regionCode=IN&maxResults=30&key="+ process.env.PARCEL_APP_GOOGLE_API_KEY 



