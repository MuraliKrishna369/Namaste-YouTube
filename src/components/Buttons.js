import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import {useState } from 'react';
import { Link } from 'react-router';
import { filteredButtons } from '../utils/constants';


const Buttons = () => {
    const [displayedButtons, setDisplayedButtons] = useState(filteredButtons)
    
    const handleNextButton = () => {  
        // 4 more buttons to display but my screen size has limit so i remove the first 4 btns
        setDisplayedButtons(prev => [...prev.slice(4)])
    }
    const handlePreviousButton = () => {
       // 4buttons+displayedButtons
       // find first displayed button start index in filtered buttons

       const firstDisplayedButtonIndex = filteredButtons.indexOf(displayedButtons[0])
       if (firstDisplayedButtonIndex === 8) return setDisplayedButtons([...filteredButtons.slice(4, firstDisplayedButtonIndex) , ...displayedButtons])
       setDisplayedButtons([...filteredButtons.slice(0, firstDisplayedButtonIndex) , ...displayedButtons])
    }
    return (
        <div className="flex"> 
            {filteredButtons.length > displayedButtons.length &&
                <button onClick={() => handlePreviousButton()}  className="fixed bg-[#0f0f0f] p-1 rounded-full cursor-pointer hover:border-2 hover:border-gray-100"><KeyboardArrowLeftOutlinedIcon/></button>   
            }    
            <div className='ml-3 flex items-center'>
                {displayedButtons.map(button => <Link to={"/results?search_query="+button.split(" ").join("+")} key={button}><button  className="text-sm font-medium mx-3 px-3 cursor-pointer py-2 rounded-lg hover:bg-white hover:text-black bg-[#212121]">{button}</button></Link>)}
            </div>
            {displayedButtons.length > 9 && 
                <button onClick={() => handleNextButton()} className="fixed right-0 bg-[#0f0f0f] p-1 rounded-full cursor-pointer hover:border-2 hover:border-gray-100"><KeyboardArrowRightOutlinedIcon/></button>
            }
        </div>
    )
}
export default Buttons