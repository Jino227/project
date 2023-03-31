import "./settings.css";
import Sidebar from "../../../Sidebar/Sidebar"

function Settings(){
    return(
        <div className="settings">
            <div className="settingswrapper">
             <div className="settingstitle">
                <span className="settingsupdatetitle">Update Your Account</span>
                <span className="settingsdeletetitle">Delete  Account</span>
                </div>   
                <form className="settingsform">
                    <label>Profile Picture</label>
                    <div className="settingspp">
                        <img src="./assests/travel.jpg" alt=""></img>
                        <label className="settingsppicon" htmlFor="fileinput">
                        <i className="settingsppicon fa-solid fa-user"></i>
                        </label>
                        <input type="file " id="inputfile" style={{display:"none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Jino"></input>
                    <label>Email</label>
                    <input type="email" placeholder="jino22799@gmail.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingssubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
export default Settings;