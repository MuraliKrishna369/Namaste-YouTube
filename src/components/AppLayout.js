import Header from "./Header"
import Body from "./Body"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { createBrowserRouter, Outlet } from "react-router"
import MainContainer from "./MainContainer"
import WatchPage from "./WatchPage"
import ResultSearchPage from "./ResultSearchPage"





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
                        element: <MainContainer/>
                    },
                    {
                        path: "/watch",
                        element: <WatchPage/>
                    },
                    {
                        path: "/results",
                        element: <ResultSearchPage/>
                    }
                        
                ]
            }
        ]
    }
])

export default AppLayout