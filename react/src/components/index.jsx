import Signup from "./signup";
import Login from "./login";
import { useState } from "react";

function Index() {
    const [isLogin, setIsLogin] = useState(true);

    const updateState = (newState) => {
        setIsLogin(newState);
    }
    return (
        <>
            {isLogin && <Login setLogin={updateState} />}
            {!isLogin && <Signup setLogin={updateState} />}

        </>
    )
}
export default Index;