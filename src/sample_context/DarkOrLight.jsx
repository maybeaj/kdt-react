import MainContent from "./MainContent";
import ThemeContext from "./ThemeContext";
import { useState } from 'react';

function DarkOrLight(){
    const [ theme, setTheme ] = useState('light');
    const themeHandler = () => {
        if ( theme ==='light') {
            setTheme('dark');

        } else {
            setTheme('light');
        }
    }
    return(
        <ThemeContext.Provider value= {{ theme, themeHandler }}>
            <MainContent />
        </ThemeContext.Provider>
    
    );
}

export default DarkOrLight ;