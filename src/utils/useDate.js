const useDate = (date) => {
    const publishedDate = new Date(date)
    const todayDate = new Date()
    const diffInYears = todayDate.getFullYear() - publishedDate.getFullYear() 
    const diffInMonths = todayDate.getMonth() - publishedDate.getMonth() 
    const diffInDays = todayDate.getDay() - publishedDate.getDay() 
    const diffInHours = todayDate.getHours() - publishedDate.getHours()
    const diffInMinutes = todayDate.getMinutes() - publishedDate.getMinutes()
    // i should return year or month or day or hour
    // if video crosses more than one year or equal to one year show the one year
    // if it is not more than one year show the no of months but it should 1 month atleast
    // otherwise show the days and if days also > 1 show them hours

    if (diffInYears > 2) return diffInYears + " years"
    if (diffInMonths > 2) return diffInMonths + " months"
    if (diffInDays > 2) return diffInDays + " days"
    if (diffInHours > 2) return diffInHours + " hours"
    if (diffInMinutes > 2) return diffInMinutes + " minutes"

    return diffInYears
}
export default useDate