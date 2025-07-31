
import { useSelector } from 'react-redux';
import DefaultSidebar from './DefaultSidebar';
import NonDefaultSidebar from './NonDefaultSidebar';


const Sidebar = () => {

    const isMenuItemsOpen = useSelector(store => store.app.isMenuItemsOpen) 
  
    return ( isMenuItemsOpen ?
        <DefaultSidebar/>
        :
        <NonDefaultSidebar/>
    )
}
export default Sidebar