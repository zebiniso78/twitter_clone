//Files
import React from 'react';
import './Main.scss';
//import changeTheme from '../../Hooks/SetTheme';
import {LanguageContext} from "../../Contex/Language";
import content from "../../Localization/Content";


//Icons
import Mode from '../Lib/Svg/ChangeMode';

//Icons of new post
import Image from '../Lib/Svg/NewPostImage';
import Gif from '../Lib/Svg/NewPostGif';
import Schedule from '../Lib/Svg/NewPostSchedule';
import Smile from '../Lib/Svg/NewPostSmile';
import Stats from '../Lib/Svg/NewPostStats';

//Icons of reacting to post
import Comment from '../Lib/Svg/ReactionComment';
import Like from '../Lib/Svg/ReactionLike';
import Retweet from '../Lib/Svg/ReactionRetweet';
import Share from '../Lib/Svg/ReactionShare';
import Statistics from '../Lib/Svg/ReactionStatistics';

//Images
import User from "../../Assets/Images/profile-photo.png";
import UserTwo from "../../Assets/Images/UserTwo.png";
import UserThree from "../../Assets/Images/UserThree.png";
import UserFour from "../../Assets/Images/UserFour.png";
import SharedPhoto from "../../Assets/Images/lunch.png";


function Main() {

    //const [theme, setTheme] = changeTheme();
    const {language, setLanguage} = React.useContext(LanguageContext);

    return (
        <>
            <div className="main">
                <div className="main__top-div">
                    <h1 className="main__top-header">{content[language].home}</h1>
                    <div className="changes-wrapper">
                    <button className="mode-button">
                    <Mode />
                    </button>
                    {/* <select
                        className="change"
                        value={theme}
                        onChange={(evt) => {
                        setTheme(evt.target.value);
                        }}
                    >
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                    </select>  */}

                    <select  
                    className="change"
                    value={language}
                    onChange={(evt) => {
                        setLanguage(evt.target.value)
                    }}
                    >
                        <option value="en">ENG</option>
                        <option value="ru">RU</option>

                    </select>
                    </div>
                </div>

                <div className="new-post__div">
                    <div className="new-post">
                        <img
                        className="new-post__user-image" 
                        src={User} 
                        alt="User Profile"  />

                        <input
                        className="new-post__input" 
                        type="text" 
                        placeholder={content[language].type_here}/>
                    </div>

                    <div className="new-post__box">
                    <ul className="new-post__list">
                        <li className="new-post__item">
                            <button className="new-post__button">
                                <Image />
                            </button>
                        </li>

                        <li className="new-post__item">
                            <button className="new-post__button">
                                <Gif />
                            </button>
                        </li>

                        <li className="new-post__item">
                            <button className="new-post__button">
                                <Stats />
                            </button>
                        </li>

                        <li className="new-post__item">
                            <button className="new-post__button">
                                <Smile />
                            </button>
                        </li>

                        <li className="new-post__item">
                            <button className="new-post__button">
                                <Schedule />
                            </button>
                        </li>
                    </ul>

                    <button className="new-post-tweet__button">Tweet</button>
                </div>
                </div>

                <ul className="posts__list">
                    <li className="posts__item">
                        <img
                        className="posts-user__div-img"
                        src={UserTwo}
                        alt="User Profile" />

                        <div className="posts-info">
                            <h2 className="posts-user-name">Designsta <span className="posts-user__span">@inner · 25 min</span></h2>
                            <p className="posts-user-comment">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                            <ul className="reaction__list">
                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Comment />
                                    </button>
                                    <span className="reaction__span">10</span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Retweet />
                                    </button>
                                    <span className="reaction__span">1</span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Like />
                                    </button>
                                    <span className="reaction__span">8</span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Share />
                                    </button>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Statistics />
                                    </button>
                                </li>
                            </ul>
                        </div>


                    </li>

                    <li className="posts__item">
                        <img
                        className="posts-user__div-img"
                        src={UserThree}
                        alt="User Profile" />

                        <div className="posts-info">
                            <h2 className="posts-user-name">cloutexhibition <span className="posts-user__span">@RajLahoti · 22m</span></h2>
                            <p className="posts-user-comment">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
                            <ul className="reaction__list">
                                <li className="reaction__item">
                                    <button className="reaction__button ">
                                        <Comment />
                                    </button>
                                    <span className="reaction__span"></span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Retweet />
                                    </button>
                                    <span className="reaction__span">5</span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Like />
                                    </button>
                                    <span className="reaction__span">9</span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Share />
                                    </button>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Statistics />
                                    </button>
                                </li>
                            </ul>
                        </div>


                    </li>

                    <li className="posts__item">
                        <img
                        className="posts-user__div-img"
                        src={UserFour}
                        alt="User Profile" />

                        <div className="posts-info">
                            <h2 className="posts-user-name">CreativePhoto <span className="posts-user__span">@cloutexhibition · 1h</span></h2>
                            <p className="posts-user-comment">Обетда..... <br />Кечиринглар</p>
                            <img
                            className="posts-user__share" 
                            src={SharedPhoto} 
                            alt="User shared post" 
                            width="679"
                            height="453" />
                            <ul className="reaction__list">
                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Comment />
                                    </button>
                                    <span className="reaction__span">10</span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Retweet />
                                    </button>
                                    <span className="reaction__span">1</span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Like />
                                    </button>
                                    <span className="reaction__span">8</span>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Share />
                                    </button>
                                </li>

                                <li className="reaction__item">
                                    <button className="reaction__button">
                                        <Statistics />
                                    </button>
                                </li>
                            </ul>
                        </div>


                    </li>
                </ul>

            </div>
        </>
    );
}

export default Main;