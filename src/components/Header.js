import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import { YouTubeLogo } from '../utils/constants';
import Search from './Search';
import User from './User';

const Header  = () => {
    return (
        <div className='flex justify-between p-3 items-center'>
            <div className='flex items-center ml-[15px]'>
                <MenuIcon className='cursor-pointer'/>
                <YouTubeLogo/>
            </div>
            <Search/>
            <MicIcon/>
            <User/>

        </div>
    )
}
export default Header