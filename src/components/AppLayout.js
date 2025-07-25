import Header from "./Header"
import Body from "./Body"
import WatchVideo from "./WatchVideo"
import MainContainer from "./MainContainer"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { createBrowserRouter, RouterProvider } from "react-router"


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>,
        children: [
            {
                path: "/",
                element: <MainContainer/>
            }
            ,
            {
                path: "/watch",
                element: <WatchVideo/>
            }
        ]
    }
])

const AppLayout = () => {
    return (
       
        <Provider store={appStore}> 
            <div className="bg-[#212121] text-white">
            <Header/>
            <RouterProvider router={appRouter}>  
                <Body/>
            </RouterProvider>
            </div>
            
        </Provider>
        
    )
}
export default AppLayout