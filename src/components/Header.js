import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { YouTube_Search_Suggestion_Url, YouTubeLogo } from '../utils/constants';
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuItems } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { cacheSearchSuuggestions } from '../utils/searchSlice';

const Header  = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [searchSuggestions, setSearchSuggestions] = useState(false)
    const dispatch = useDispatch()
    const searchSuggestionsData = useSelector(store => store.search) // from redux
   
    
    useEffect(()=>{
        // Side effect: Fetch data when the component mounts


        // If the url path is not / clear the input value

        

        // If the api call has made < 200ms  decline that api call
        // If it is > 200ms make that api call because user needs search suggestions immedialtly.
        

        const timer = setTimeout(() =>{
           

            if (Object.keys(searchSuggestionsData).includes(searchQuery)){
                setSearchResult(searchSuggestionsData[searchQuery])
            }else{
                 getSearchSuggestions()
            }
           
        } , 200)

        // Optional cleanup function (runs when component unmounts or before next effect)
        return () => {
            clearTimeout(timer)
        }
        
    }, [searchQuery])
    const getSearchSuggestions = async () => {
        const data = await fetch(YouTube_Search_Suggestion_Url+searchQuery)
        const json = await data.json()
        // Store the data into redux
        // action.payload and sent that into method
        dispatch(cacheSearchSuuggestions({[searchQuery] : json[1]}))
        setSearchResult(json[1])
    }
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
    const handleToggle = () => {
        dispatch(toggleMenuItems())
    }
    return (
        <div className='bg-[#0f0f0f] flex justify-between h-16 p-3 items-center sticky z-1 top-0'>
            <div className='flex items-center ml-[15px]'>
                <MenuIcon onClick={() => handleToggle()} className='cursor-pointer'/>
                <a href='/'><YouTubeLogo/></a>
            </div>
            <div className='flex flex-col'>
                <div className="h-10 border w-[450px] flex justify-between items-center rounded-full">
                    <input onFocus={() => setSearchSuggestions(true)}
                     onBlur={() => setSearchSuggestions(false)}
                     onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}  className="w-[400px] p-2 border-r rounded-l-full" type='search'/>
                    <button className='w-24 p-2 opacity-50 cursor-pointer'>
                        <SearchOutlinedIcon />
                    </button>
                </div>
                {searchSuggestions && 
                    <div className='bg-[#212121] w-[450px] p-2 list-none rounded-lg absolute z-1 top-15 '>
                        {searchResult.map((result, index) => <li key={index} className='hover:bg-[#2b2b2b] p-1 rounded-lg'><SearchOutlinedIcon /><span className='ml-3'>{result}</span></li>)}
                        
                    </div>
                }
            </div>
            <MicIcon/>
            <User/>

        </div>
    )
}
export default Header