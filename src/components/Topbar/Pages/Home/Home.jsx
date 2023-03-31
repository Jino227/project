import Header from "../../header/Header";
import Post from "../../Post/Post";
import Sidebar from "../../Sidebar/Sidebar";
import "./home.css"
function Home(){
    return(
        <div>
            <Header/>
            <div className="home">
                <Post/>
                <Sidebar/>
            </div>
        </div>
    )
}
export default Home;