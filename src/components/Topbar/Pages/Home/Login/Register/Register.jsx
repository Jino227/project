import "./register.css";
import { Link } from "react-router-dom";
function Register(){
    return(
        <div className="register">
            <span className="registertitle">Register</span>
            <form className="registerform">
            <label>Username</label>
            <input type="text" className="registerinput" placeholder="please enter your Username..."></input>
                <label>Email</label>
            <input type="email" className="registerinput" placeholder="please enter your email..."></input>
            <label>Password</label>
            <input type="password" className="registerinput" placeholder="please enter your password..."></input>
            <button className="registerbutton">Register</button>
            </form>
            <button className="registerloginbutton"><Link className="Link" to="/login">Login</Link></button>
        </div>
    )
}
export default Register;