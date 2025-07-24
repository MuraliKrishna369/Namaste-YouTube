import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Search = () => {

    return (
        <div className="h-10 border w-[450px] flex justify-between items-center rounded-full">
            <input className="w-[400px] p-2 border-r rounded-l-full" type='text'/>
            <button className='w-24 p-2 opacity-50 cursor-pointer'>
                <SearchOutlinedIcon />
            </button>
        </div>
    )
}
export default Search