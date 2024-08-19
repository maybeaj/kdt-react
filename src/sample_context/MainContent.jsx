import { useContext } from 'react' ;
import ThemeContext from './ThemeContext';

function MainContent(props) {
    const { theme, themeHandler } = useContext(ThemeContext);
    console.log("debug >>> ", theme);
    
    return(
        <div className="container" 
        style={{
            width : "100vw",
            height : "100vh",
            backgroundColor : theme === 'light' ? 'white' : 'black',
            color : theme === 'light' ? 'black' : 'white'
        }}>
        <p>안녕하세요, 컨텍스트를 이용한 테마 변경 코드 입니다.</p>
        <button onClick={themeHandler}>Dark OR Light Theme Change</button>
        </div>
    );
}

export default MainContent ;