import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/appSlice';

const MenuAndLogo = () => {
    const dispatch = useDispatch()
    const handleToggleSlidebar = () => {
        dispatch(toggleSidebar())
    }
    return (
           <div className='flex items-center justify-between sm:justify-around  w-25 sm:w-40'>
                <MenuIcon fontSize='medium' onClick={() => handleToggleSlidebar()} className='cursor-pointer'/>
                <Link to="/"><img className='w-16 sm:w-24' src='https://res.cloudinary.com/dtbojznp3/image/upload/v1758730388/YouTube_2024__white_text_ozxsar.svg'/></Link>
            </div>
    )
}
export default MenuAndLogo