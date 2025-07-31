import MenuIcon from '@mui/icons-material/Menu';
import { YouTubeLogo } from "../utils/constants"
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/appSlice';

const MenuAndLogo = () => {
    const dispatch = useDispatch()
    const handleToggleSlidebar = () => {
        dispatch(toggleSidebar())
    }
    return (
           <div className='flex items-center ml-[15px]'>
                <MenuIcon onClick={() => handleToggleSlidebar()} className='cursor-pointer'/>
                <Link to='/'><YouTubeLogo/></Link>
            </div>
    )
}
export default MenuAndLogo