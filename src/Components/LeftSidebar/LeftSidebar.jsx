//Scss
import "./LeftSidebar.scss"

//Images
import Logo from "../../Assets/Images/twitter-logo.png";
import User from "../../Assets/Images/profile-photo.png";

//Icons
import Home from "../Lib/Svg/Home";
import Explore from "../Lib/Svg/Explore"; 
import Notifications from "../Lib/Svg/Notifications";
import Messages from "../Lib/Svg/Messages";
import Bookmarks from "../Lib/Svg/Bookmarks";
import Lists from "../Lib/Svg/Lists";
import Profile from "../Lib/Svg/Profile";
import More from "../Lib/Svg/More";
import ThreeDots from "../Lib/Svg/ThreeDots";

function LeftSidebar() {
    return(
        <nav className="navbar">
            <img
            className="logo__image" 
            src={Logo} 
            alt="Icon of Logo"  />

            <ol className="navbar__list">
                <li className="navbar__item">
                    <a href="index.html" className="navbar__link">
                        <Home />
                        <p className="nav__link-paragraph">Home</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Explore />
                        <p className="nav__link-paragraph">Explore</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Notifications />
                        <p className="nav__link-paragraph">Notifications</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Messages />
                        <p className="nav__link-paragraph">Messages</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Bookmarks />
                        <p className="nav__link-paragraph">Bookmarks</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Lists />
                        <p className="nav__link-paragraph">Lists</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Profile />
                        <p className="nav__link-paragraph">Profile</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <More />
                        <p className="nav__link-paragraph">More</p>
                    </a>
                </li>
            </ol>

            <button className="leftsidebar__button">Tweet</button>

            <div className="user__div">
                <img
                className="user__div-img"
                src={User}
                alt="User Profile" />

                <div className="user-info">
                <p className="user__name">Bobur</p>
                <a href="@bobur_mavlonov" className="user__email">@bobur_mavlonov</a>
                </div>

               <ThreeDots />

            </div>
        </nav>
    );
}

export default LeftSidebar;