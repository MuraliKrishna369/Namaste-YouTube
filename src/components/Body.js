import { Outlet } from "react-router"
import Sidebar from "./Sidebar"

const Body = () => {
    return (
        <div className="flex relative">
            <Sidebar/>
            <Outlet/>  
        </div>
    )
}
export default Body