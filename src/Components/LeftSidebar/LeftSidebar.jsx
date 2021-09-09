//Files
import React from 'react';
import "./LeftSidebar.scss";
//import { Context } from '../../Contex/Theme';
import {LanguageContext} from "../../Contex/Language";
import content from "../../Localization/Content";

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

    //const { theme } = React.useContext(Context);
    const {language} = React.useContext(LanguageContext);

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
                        <p className="nav__link-paragraph">{content[language].home}</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Explore />
                        <p className="nav__link-paragraph">{content[language].explore}</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Notifications />
                        <p className="nav__link-paragraph">{content[language].notif}</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Messages />
                        <p className="nav__link-paragraph">{content[language].message}</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Bookmarks />
                        <p className="nav__link-paragraph">{content[language].bookmark}</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Lists />
                        <p className="nav__link-paragraph">{content[language].lists}</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <Profile />
                        <p className="nav__link-paragraph">{content[language].profile}</p>
                    </a>
                </li>

                <li className="navbar__item">
                    <a href="#link" className="navbar__link">
                        <More />
                        <p className="nav__link-paragraph">{content[language].more}</p>
                    </a>
                </li>
            </ol>

            <button className="leftsidebar__button">{content[language].twitter}</button>

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