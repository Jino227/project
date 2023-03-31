
import { Link } from "react-router-dom";
import "./topbar.css"
const user=false;
function Topbar() {
    return (
        <div className="top">
            <div className="topleft">
                <i className="topicon fa-brands fa-facebook"></i>
                <i className="topicon fa-brands fa-instagram"></i>
                <i className="topicon fa-brands fa-twitter"></i>
                <i className="topicon fa-brands fa-pinterest"></i>
               
                 </div>
            <div className="topcentre">
                <ul className="toplist">
                    <li className="toplistitem"><Link className="Link" to="/">HOME</Link></li>
                    <li className="toplistitem"><Link className="Link" to="/post/:postid">ABOUT</Link></li>
                    <li className="toplistitem"><Link className="Link" to="/settings">CONTACT</Link></li>
                    <li className="toplistitem"><Link className="Link" to="/write">WRITE</Link></li>
                    <li className="toplistitem">{user && "LOGOUT"}</li>


                </ul>
                
            </div>
            

            <div className="topright">
                {
                    user ?(<img className="topimg" src="../assests/travel1.jpg" alt=""/>

                    ):(
                     <ul className="toplist">
                         <li className="toplistitem"><Link className="Link" to="/login">LOGIN</Link></li>
                    <li className="toplistitem"><Link className="Link" to="/register">REGISTER</Link></li>
                     </ul>
                       
                        
                    )
                }
               
                <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
               <button className="menubutton" onC> <i className=" menubar fa-solid fa-bars"></i></button>
            </div>
            <div className="menu">
                <ul className="toplist">
                    <button className="toplistitem1"><Link className="Link" to="/">HOME</Link></button>
                    <br></br>
                    <button className="toplistitem1"><Link className="Link" to="/post/:postid">ABOUT</Link></button>
                    <button className="toplistitem1"><Link className="Link" to="/settings">CONTACT</Link></button>
                    <button className="toplistitem1"><Link className="Link" to="/write">WRITE</Link></button>
                    {/* <button className="toplistitem1">{user && "LOGOUT"}</button> */}


                </ul>
                
            </div>
        </div>
    )
}
export default Topbar;
