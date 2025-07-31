const useViewCount = (viewCount) => {
    if (viewCount === undefined) return null
    if (viewCount >= 10000000) return Math.ceil(viewCount/10000000) + "M views."
    if (viewCount >= 1000) return Math.ceil(viewCount/1000) + "K views."
    return viewCount + " views."
    
}
export default useViewCount
