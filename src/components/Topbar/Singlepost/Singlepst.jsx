import "./singlepst.css";

function Singlepst(){
    return(
        <div className="singlepst">
          <div className="singlepostwrapper">
            <img className="singlepostimg" src="../assests/travel6.jpg" alt="hghi"></img>
          </div>
          <h1 className="singleposttitle">MY FAVOURITE
          <div className="singlepostedit">
          <i className="singleposticon fa-solid fa-heart"></i>
                <i className="singleposticon fa-solid fa-thumbs-down"></i>
            </div></h1>
            <div className="singlepostinfo">
                <span className="singlepostauthor">Author :<b>Jino</b></span>
            </div>
        </div>
    )
}
export default Singlepst;