import MainContent from "./MainContent";
import ThemeContext from "./ThemeContext";
import { useState } from 'react';

function DarkOrLight(){
    const theme = useState('light');
    return(
        <ThemeContext.Provider value= { theme }>
            <MainContent />
        </ThemeContext.Provider>
    
    );
}

export default DarkOrLight ;