import Header from "./Header"
import Body from "./Body"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { createBrowserRouter, Outlet } from "react-router"
import WatchPage from "./WatchPage"
import Home from "./Home"
import ResultPage from "./ResultPage"






const AppLayout = () => {
    return (
        <Provider store={appStore}> 
            <div className="bg-[#0f0f0f] text-white">
                <Header/>
                <Outlet/>
            </div>   
        </Provider>
        
    )
}

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
                children: [
                    {
                        path: "/",
                        element: <Home/>
                    },
                    {
                        path: "/results",
                        element: <ResultPage/>
                    },
                    {
                        path: "/watch",
                        element: <WatchPage/>
                    },
                    
                        
                ]
            }
        ]
    }
])

export default AppLayout