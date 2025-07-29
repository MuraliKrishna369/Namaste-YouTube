import { RouterProvider } from "react-router"
import { appRouter } from "./components/AppLayout"

function App () {
    return (
        <RouterProvider router={appRouter}/>
    )
}

export default App

