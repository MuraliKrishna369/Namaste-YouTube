const useDate = (date) => {
    const publishedDate = new Date(date);
    const now = new Date();
    
    const diffInMilliSeconds = now-publishedDate

    const minInMilliSeconds = 60 * 1000
    const hourInMilliSeconds = 60 * minInMilliSeconds
    const dayInMilliSeconds = 24 * hourInMilliSeconds
    const monthInMilliSeconds = 30 * dayInMilliSeconds
    const yearInMilliSeconds = 365 * dayInMilliSeconds

    const year = Math.floor(diffInMilliSeconds/yearInMilliSeconds)
    if (year >= 1) return `${year} year${year > 1? "s" : ""} ago`

    const month = Math.floor(diffInMilliSeconds/monthInMilliSeconds)
    if (month >= 1) return `${month} month${month > 1? "s" : ""} ago`

    const day = Math.floor(diffInMilliSeconds/dayInMilliSeconds)
    if (day >= 1) return `${day} day${day > 1? "s" : ""} ago`

    const hour = Math.floor(diffInMilliSeconds/hourInMilliSeconds)
    if(hour >= 1) return `${hour} hour${hour > 1? "s" : ""} ago`

    const minute = Math.floor(diffInMilliSeconds/minInMilliSeconds)
    if(minute >= 1) return `${minute} minute${minute > 1? "s" : ""} ago`

    /**
     * Converting MilliSeconds
     * 1000 ms - 1sec in javascript
     * 1min - 60sec * 1000(1sec) = 60000ms
     * 1hour - 60min * (60sec * 1000) = 3600000ms
     * 1day - 24h * (1hour)
     * 1month - 30d * (1day) || 31d * (1day)   approximate
     * 1year - 365days * (1day)  = yearInMilliSeconds
     * 
     * year = diffInMilliSeconds/yearInMilliSeconds
     * 
     * 
     */
    /**
     * calculate the difference in milliseconds it will give more correct answers
     * rathere than individaul year , month etc.
     * how to do that
     * first of all i will get the diff in milli seconds
     * i will turn my year into milliseconds
     * and i divide it then i get the year
     */

    /**
     * What i expect it should show how much time back
     *  like(2 years ago, 1 day ago, 6 days ago 2hours , 12min ago)
     */
    return "Just Now"
};

export default useDate;
