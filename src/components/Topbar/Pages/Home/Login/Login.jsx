import "./login.css";
//import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="login">
            <span className="logintitle">Login</span>
            <form className="loginform">
                <label>Email</label>
            <input type="email" className="logininput" placeholder="please enter your email..."></input>
            <label>Password</label>
            <input type="password" className="logininput" placeholder="please enter your password..."></input>
            <button className="loginbutton">Login</button>
            </form>
            <button className="loginregisterbutton">
            REGISTER</button>
        </div>
    )
}
export default Login;