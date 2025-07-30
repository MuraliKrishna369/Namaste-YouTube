import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { YouTube_Search_Suggestion_Url, YouTubeLogo } from '../utils/constants';
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuItems } from '../utils/appSlice';
import { useEffect, useRef, useState } from 'react';
import { cacheSearchSuuggestions } from '../utils/searchSlice';



const Header  = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [searchSuggestions, setSearchSuggestions] = useState(false)
    const dispatch = useDispatch()
    const searchSuggestionsData = useSelector(store => store.search) // from redux
    const onBlurTimer = useRef(null)
   
    useEffect(()=>{
        // Side effect: Fetch data when the component mounts

        const timer = setTimeout(() =>{
            if (searchQuery === '') return
            if (Object.keys(searchSuggestionsData).includes(searchQuery)){
                setSearchResult(searchSuggestionsData[searchQuery])
            }else{
                 getSearchSuggestions()
            }
           
        } , 200)

        // Optional cleanup function (runs when component unmounts or before next effect)
        return () => {
            clearTimeout(timer)
            clearTimeout(onBlurTimer)
        }
        
    }, [searchQuery])
    const getSearchSuggestions = async () => {
        const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery)
        const json = await data.json()
        // Store the data into redux
        // action.payload and sent that into method
        dispatch(cacheSearchSuuggestions({[searchQuery] : json[1]}))
        setSearchResult(json[1])
    }
    
     
    const handleToggle = () => {
        dispatch(toggleMenuItems())
    }
    const handleInputOnBlur = () => {
        onBlurTimer.current = setTimeout(() => {
            setSearchSuggestions(false)
        }, 500)
    }

    
    return (
        <div className='bg-[#0f0f0f] flex justify-between h-16 p-3 items-center sticky z-1 top-0'>
            <div className='flex items-center ml-[15px]'>
                <MenuIcon onClick={() => handleToggle()} className='cursor-pointer'/>
                <Link to='/'><YouTubeLogo/></Link>
            </div>
            <div className='flex flex-col'>
                <div className="h-10 border w-[450px] flex justify-between items-center rounded-full">
                    <input id="search" onFocus={() => setSearchSuggestions(true)}
                     onBlur={() => handleInputOnBlur()}
                     onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}  className="w-[400px] p-2 border-r rounded-l-full" type='search'/>
                    <button className='w-24 p-2 opacity-50 cursor-pointer'>
                        <SearchOutlinedIcon />
                    </button>
                </div>
           
                {searchQuery !== "" && searchSuggestions?
                    <div className='bg-[#212121] w-[450px] p-2 list-none rounded-lg absolute z-1 top-15 '>
                        {searchResult.map(result => <Link key={uuidv4()} to={"/results?search_query="+result.split(" ").join("+")}  ><li  className='hover:bg-[#2b2b2b] p-1 rounded-lg'><SearchOutlinedIcon /><span className='ml-3'>{result}</span></li></Link>)}
                    </div>
                    : null
                }
            </div>

            <Link to="/results"><button>Result</button></Link>
            <MicIcon/>
            <User/>

        </div>
    )
}
export default Header