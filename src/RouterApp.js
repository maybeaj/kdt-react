import { Route, Routes } from 'react-router-dom';
import BoardPage from './pages/BoardPage';

function RouterApp() {
    return(
        <div className="container">
            <Routes>
                <Route path='/board' element={<BoardPage/>}></Route>
            </Routes>
        </div>
    );
}

export default RouterApp;