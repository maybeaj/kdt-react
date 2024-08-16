import React, {useState} from "react";
import ToolBar from "./ToolBar";

function LandingPage() {
    const [ isLogin, setIsLogin] = useState(false);
    const loginHandler = () => {
        console.log("debug >>> login btn click");
        setIsLogin(!isLogin);
    }
    const logoutHandler = () => {
        console.log("debug >>> logout btn click");
        setIsLogin(!isLogin);
    }
    return(
        <div className="container">
            <ToolBar
                isLogin={isLogin}
                onClickLogin={loginHandler}
                onClickLogout={logoutHandler}/>
            <div style={{ padding : 16 }}>조건부 렌더링을 이용한 페이지 구성</div>
        </div>
    );
}

export default LandingPage ;