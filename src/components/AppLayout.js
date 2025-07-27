import Header from "./Header"
import Body from "./Body"
import WatchPage from "./WatchPage"
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
                element: <WatchPage/>
            }
        ]
    }
])

const AppLayout = () => {
    return (
       
        <Provider store={appStore}> 
            <div className="bg-[#0f0f0f] text-white">
            <Header/>
            <RouterProvider router={appRouter}>  
                <Body/>
            </RouterProvider>
            </div>
            
        </Provider>
        
    )
}
export default AppLayout