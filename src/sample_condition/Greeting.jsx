import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";


function Greeting(props) {
    const isLogin = props.isLogin ;
    if(isLogin){
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

export default Greeting;