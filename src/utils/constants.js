
export const filteredButtons = ["All", "Shorts", "Videos", "Latest", "Watched", "Unwatched", "Live", "Movies", "Music", "Sports", "News", "Programming", "React", "Workout", "Philosophy", "Explore", "Spirituality"]



export const youtubeVideosUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=20&key=" + process.env.API_KEY
export const YouTube_Search_Suggestion_Url = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const youtubeSearchResultsUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&regionCode=IN&relevanceLanguage=TE&maxResults=15&key="+ process.env.API_KEY + "&q="



