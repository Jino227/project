import "./sidebar.css";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebaritem">
                <span className="sidebartitle">ABOUT ME</span>
                <p>
                    I love to travel and i am happy to share my beautiful experience about my adventures with everyone.
                </p>

            </div>
            <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">Life</li>
                <li className="sidebarlistitem">Music</li>
                 <li className="sidebarlistitem">Style</li>
                <li className="sidebarlistitem">Sports</li>
                <li className="sidebarlistitem">Cinema</li>
                <li className="sidebarlistitem">Tech</li>
            </ul>
            <div className="sidebaritem">
                <span className="sidebartitle">FOLLOW US</span>
                <div className="sidebarsocial">
                <i className="sidebaricon fa-brands fa-facebook"></i>
                <i className="sidebaricon fa-brands fa-instagram"></i>
                <i className="sidebaricon fa-brands fa-twitter"></i>
                <i className="sidebaricon fa-brands fa-pinterest"></i>
                </div>
            </div>

            </div>
        </div>
    )
}
export default Sidebar;