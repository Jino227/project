import "./post.css";
function Post(){
    return(
        <div className="post">
        <div className="posts">
        <img className="postimg" src="./assests/travel6.jpg" alt="">
            </img>
            <div className="postinfo">
                <div className="postcats">
                    <span className="posttitle">adventure</span>
                   
                    <hr></hr>
                    <span className="posttime">1 hr ago</span>
                </div>
            </div>
        </div>
        <div className="posts">
        <img className="postimg" src="./assests/travel4.jpg" alt="">
            </img>
            <div className="postinfo">
                <div className="postcats">
                    <span className="posttitle">nature</span>
                   
                    <hr></hr>
                    <span className="posttime">1 day ago</span>
                </div>
            </div>
        </div>
        <div className="posts">
        <img className="postimg" src="./assests/travel1.jpg" alt="">
            </img>
            <div className="postinfo">
                <div className="postcats">
                    <span className="posttitle">lonely</span>
                   
                    <hr></hr>
                    <span className="posttime">1 week ago</span>
                </div>
            </div>
        </div>
        <div className="posts">
        <img className="postimg" src="./assests/travel5.jpg" alt="">
            </img>
            <div className="postinfo">
                <div className="postcats">
                    <span className="posttitle">Ready to cycle</span>
                   
                    <hr></hr>
                    <span className="posttime">3 days ago</span>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Post;