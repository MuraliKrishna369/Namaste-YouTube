import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { cacheSearchSuuggestions } from '../utils/searchSlice';
import { Link, useNavigate } from 'react-router';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuAndLogo from './MenuAndLogo';


const Header  = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [showSearchBar, setShowSearchBar] = useState(false)
    const dispatch = useDispatch()
    const searchSuggestionsData = useSelector(store => store.search) 
    const onBlurTimer = useRef(null)
    const navigate = useNavigate()
   
    useEffect(()=>{
        const timer = setTimeout(() =>{
            if (Object.keys(searchSuggestionsData).includes(searchQuery)){
                setSearchResult(searchSuggestionsData[searchQuery])
            }
            getSearchSuggestions()
           
        } , 200)

        return () => {
            clearTimeout(timer)
            clearTimeout(onBlurTimer)
        }
        
    }, [searchQuery])
    const getSearchSuggestions = async () => {
        const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery)
        const json = await data.json()
        dispatch(cacheSearchSuuggestions({[searchQuery] : json[1]}))
        setSearchResult(json[1])
    }

    const handleInputOnBlur = () => {
        onBlurTimer.current = setTimeout(() => {
            setShowSearchBar(false)
        }, 500)
    }
    const handleSearchButtonClicked = (query) => {
        if (query.replace(/\s+/g, ' ').trim() !== ""){
            navigate("/results?search_query="+ query.replace(/\s+/g, ' ').trim())
        }  
    }

    
    return (
        <div className='flex flex-col items-center  w-full'>
            <div className='w-full bg-[#0f0f0f] grid grid-cols-3 justify-between h-16 p-3 items-center sticky z-1 top-0'>
                <MenuAndLogo/>
                <div className='flex items-center'>
                    <input id="search" 
                        onFocus={() => setShowSearchBar(true)}
                        onBlur={() => handleInputOnBlur()}
                        onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}  className="w-42 sm:w-82 sm:h-7 h-5 p-2 border rounded-l-full" type='search'/>          
                    <button onClick={() => handleSearchButtonClicked(searchQuery)}  className='p-2 opacity-50 cursor-pointer'>
                        <SearchOutlinedIcon />
                    </button>               
                </div>
                    

            </div>
            {showSearchBar === true && searchResult.length > 1 &&
            <div className='bg-[#212121] w-[250px] sm:w-[290px] p-2 list-none rounded-lg absolute z-1 top-15'>
                {searchResult.map(result => <Link key={uuidv4()} to={"/results?search_query="+result.split(" ").join("+")}  ><li  className='hover:bg-[#2b2b2b] p-1 rounded-lg'><SearchOutlinedIcon /><span className='ml-3'>{result}</span></li></Link>)}
            </div>
            }
        </div>
            
    )
}
export default Header