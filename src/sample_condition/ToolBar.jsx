import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const styles = {
	wrapper: {
		padding: 16,
		display: "flex",
		flexDirection: "row",
		borderBottom: "1px solid grey",
	},
	greeting: {
		marginRight: 8,
	},
};

// isLogin 값을 판단하여 false이면 로그인 버튼이 보여지고
// true 이면 'xxxx님 환영합니다' 라는 메시지와 로그아웃 버튼이 보여진다.
function ToolBar(props) {
	const { isLogin, onClickLogin, onClickLogout } = props;
	return (
		<div style={styles.wrapper}>
			{isLogin && <span style={styles.greeting}>섭섭해님 환영합니다.</span>}
			{isLogin ? (
				<LogoutButton onClick={onClickLogin} />
			) : (
				<LoginButton onClick={onClickLogout} />
			)}
		</div>
	);
}

export default ToolBar;
