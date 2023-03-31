import "./single.css";
import Sidebar from "../../../../../components/Topbar/Sidebar/Sidebar"
import Singlepst from "../../../Singlepost/Singlepst";
function Single(){
    return(
        <div className="single">
            <Singlepst/>
          <Sidebar/>
        </div>
    )
}
export default Single;