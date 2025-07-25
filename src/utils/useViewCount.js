const useViewCount = (viewCount) => {
    if (viewCount >= 10000000) return Math.ceil(viewCount/10000000) + "M"
    if (viewCount >= 1000) return Math.ceil(viewCount/1000) + "K"
    return viewCount
    
}
export default useViewCount
