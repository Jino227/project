import "./write.css";
function Write(){
    return(
        <div className="write">
            <img src="./assests/travel3.jpg" alt="" className="writeimg"></img>
       <form className="writeform">
        <div className="writeformgroup">
            <label htmlFor="fileinput">
            <i className="writeicon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}}></input>
            <input type="text" placeholder="Title" className="writeinput" autoFocus={true}></input>
        </div>
        <div className="writeformgroup">
            <textarea type="text" className="writeinput text" placeholder="Tell your story..."></textarea>
        </div>
        <button className="submit">Publish</button>
       </form>
        </div>
    )
}
export default Write;