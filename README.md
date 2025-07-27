# Tech Stack
    - Parcel
    - Tailwind
    - Meterail-UI
    - React
    - Redux
    - React-Router_DOM
    - React Testing Library & Jest
    
# Setup The Project From Scratch
    1. Intialise git and keep push your code to GitHub.
    2. Intailise Your Project using `npm inti`
    3. Install Parcel in Dev dependencies using `npm i -D parcel`
    4. Install react and react-dom using `npm i react react-dom`
    5. Setup TailwindCSS 
    6. Structure Our Application

# Planning
- AppLayout
    - Header
        - Hamburger icon, YouTube Logo, Search Bar , Default UserButton
    - Body
        - Side Bar
        - Main Container
            - Filtered Buttons
            - Videos

bg color `#212121`
border color `#acacac`
youtube logo `https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144_v2.png`

# useDate function logic

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

# Using Debouncing & Cacheing Rendering Search Suggestions

// If the api call has made < 200ms  decline that api call
// If it is > 200ms make that api call because user needs search suggestions immedialtly.

/**
     * What I expect
     * while typing it should show the search suggestions over my page
     * searchQuery is linked to input value
     * whenever searchQuery is updated i will re-render my component
     * but my useEffect will be called and make an api call in debouncing way.
     * 
     * i
     * searchQuery is updated => component re-render
     * It will destroy the previous component values in useEffect return
     * useEffect will be called
     * it make an api call after 200ms and we get the data and we store it state variable 
     * and Displaying it
     * ip
     * searchQuery is updated => component re-render
     * It will destroy the previous component values in useEffect return
     * useEffect will be called
     * it make an api call after 200ms and we get the data and we store it state variable 
     * and Displaying it
     * .....
     */
/**


* What I expect over here is caching
     * I will store fetched data(search suggestions) in my redux
     * when the user types the same input i won't make a new api call 
     * i just have to show the stored date in my redux
     * this caching. make performant api calls
     */
    
