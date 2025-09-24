import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';

const DefaultSidebar = () => {
    return (
        <div className='hidden sm:block p-1 sticky top-[64px] h-100  bg-[#0f0f0f]'>
            <a className='h-16 flex flex-col justify-center items-center text-xs  rounded-lg hover:bg-[#2b2b2a] cursor-pointer '>
                <HomeIcon/>
                <p>Home</p>
            </a>
            <a className='h-16 flex flex-col justify-center items-center text-xs  rounded-lg hover:bg-[#2b2b2a] cursor-pointer '>
                <SubscriptionsIcon/>
                <p>Shorts</p>
            </a>
            <a className='h-16 flex flex-col justify-center items-center text-xs rounded-lg hover:bg-[#2b2b2a] cursor-pointer '>
                <YouTubeIcon/>
                <p>Subscriptions</p>
            </a>
            <a className='h-16 flex flex-col justify-center items-center text-xs rounded-lg hover:bg-[#2b2b2a] cursor-pointer '>
                <AccountCircleIcon/>
                <p>You</p>
            </a>
            
           
        </div>
    )
}
export default DefaultSidebar