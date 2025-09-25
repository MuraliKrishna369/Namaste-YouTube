
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HistoryIcon from '@mui/icons-material/History';
import ListIcon from '@mui/icons-material/List';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';


const NonDefaultSidebar = () =>  {
    return (
        <div className="bg-[#0f0f0f] absolute z-1">
            <div className='w-[200px] p-2'>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <HomeIcon/>
                    <span className='ml-6'>Home</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <PlayCircleOutlineIcon/>
                    <span className='ml-6'>Shorts</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <SubscriptionsIcon/>
                    <span className='ml-6'>Subscriptions</span>
                </a>
            
                <hr className='my-3'/>

                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <span className='text-lg'>{"You >"}</span>             
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <HistoryIcon/>
                    <span className='ml-6'>History</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <ListIcon/>
                    <span className='ml-6'>Playlists</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <WatchLaterOutlinedIcon/>
                    <span className='ml-6'>Watch later</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <ThumbUpOutlinedIcon/>
                    <span className='ml-6'>Liked videos</span>
                </a>
                <hr className='my-3'/>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <span className='text-lg'>Explore</span>             
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <ShoppingBagOutlinedIcon/>
                    <span className='ml-6'>Shopping</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <MusicNoteOutlinedIcon/>
                    <span className='ml-6'>Music</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <TheatersIcon/>
                    <span className='ml-6'>Movies</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <LiveTvIcon/>
                    <span className='ml-6'>Live</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <SportsEsportsIcon/>
                    <span className='ml-6'>Gaming</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <NewspaperIcon/>
                    <span className='ml-6'>News</span>
                </a>
                <hr className='my-3'/>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <span className='text-lg'>More form YouTube</span>             
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <YouTubeIcon className='bg-red-500 rounded-lg p-1'/>
                    <span className='ml-6'>YoutTube Premium</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <PlayCircleOutlineIcon className='bg-red-500 rounded-lg p-1'/>
                    <span className='ml-6'>YouTube Music</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <ChildCareIcon className='bg-red-500 rounded-lg p-1'/>
                    <span className='ml-6'>YouTube Kids</span>
                </a>
                <hr className='my-6'/>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <SettingsIcon/>
                    <span className='ml-6'>Settings</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <FlagOutlinedIcon/>
                    <span className='ml-6'>Report History</span>
                </a>
                <a className='hover:bg-gray-700 flex ml-2 p-2 rounded-lg cursor-pointer'>
                    <ContactSupportOutlinedIcon/>
                    <span className='ml-6'>Help</span>
                </a>
                <hr className='my-6'/>
                <div className='flex flex-wrap text-xs font-medium'>
                    <span className='p-2'>About</span> 
                    <span className='p-2'>Press</span> 
                    <span className='p-2'>Copyright</span> 
                    <span className='p-2'>Contact Us</span> 
                    <span className='p-2'>Creators</span> 
                    <span className='p-2'>Devlopers</span>         
                </div>
            </div>

        </div>



    )
}

export default NonDefaultSidebar