import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import { YouTubeLogo } from '../utils/constants';
import Search from './Search';
import User from './User';
import { useDispatch } from 'react-redux';
import { toggleMenuItems } from '../utils/appSlice';

const Header  = () => {
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch(toggleMenuItems())
    }
    return (
        <div className='flex justify-between p-3 items-center'>
            <div className='flex items-center ml-[15px]'>
                <MenuIcon onClick={() => handleToggle()} className='cursor-pointer'/>
                <a href='/'><YouTubeLogo/></a>
            </div>
            <Search/>
            <MicIcon/>
            <User/>

        </div>
    )
}
export default Header