import Header from "./Header"
import Body from "./Body"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"


const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="bg-[#212121] text-white">
                <Header/>
                <Body/>
            </div>
        </Provider>
    )
}
export default AppLayout