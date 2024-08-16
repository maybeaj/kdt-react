import React, { useState } from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function UserHome(props) {
	const [flag, setFlag] = useState(false);
    const loginHandler = () =>{
        setFlag(true);
        console.log(" debug >>> loginHandler Click")
    }
    const logoutHandler = () =>{
        setFlag(false);
        console.log(" debug >>> logoutHandler Click")
    }
	let btn;
	if (flag) {
		btn = <LoginButton onClick={loginHandler}/>;
	} else {
		btn = <LogoutButton onClick={logoutHandler}/>;
	}
	return (
		<div className = "container">
			<Greeting isLogin={flag} />
            {btn}
		</div>
	);
}

export default UserHome;
