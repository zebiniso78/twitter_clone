//Files
import './RightSidebar.scss';
import React from 'react';
import {LanguageContext} from "../../Contex/Language";
import content from "../../Localization/Content";

//Icons
import Search from '../Lib/Svg/Search';
import Settings from '../Lib/Svg/Settings';
import More from '../Lib/Svg/ThreeDots';

//Images
import Mushtariy from '../../Assets/Images/mushtariy.png';
import Shuhratbek from '../../Assets/Images/shuhratbek.png';

function RightSidebar() {
    const {language} = React.useContext(LanguageContext);
    return (
    <div className="right-sidebar">

        <div className="right-sidebar__search-input__wrapper">
            <Search />
            <input type="text" name="search" className="right-sidebar__search-input" placeholder={content[language].search} />
        </div>
        
        <div className="right-sidebar__trends"> 

            <div className="right-sidebar__setting__wrapper">
                <h1 className="right-sidebar__setting-heading">
                {content[language].trends}
                </h1>
                <button className="right-sidebar__setting-btn" width='24px' height='24' >
                <Settings />
                </button>
            </div>

            <div className="right-sidebar__trends__wrapper">
                <hgroup className="right-sidebar__trend">
                    <h2 className='country'>Trending in Germany</h2>
                    <h3 className="revolution">Revolution</h3>
                    <h4 className='stats'><span className="stat-number">50.4K</span >Tweets</h4>
                </hgroup>
                <button className="right-sidebar__more-btn" width='24px' height='24' >
                    <More />
                </button>
                
            </div>

            <div className="right-sidebar__trends__wrapper">
                <hgroup className="right-sidebar__trend">
                    <h2 className='country'>Trending in Germany</h2>
                    <h3 className="revolution">Revolution</h3>
                    <h4 className='stats'><span className="stat-number">50.4K</span>Tweets</h4>
                </hgroup>
                <button className="right-sidebar__more-btn">
                <More />
                </button>
                
            </div>

            <div className="right-sidebar__trends__wrapper">
                <hgroup className="right-sidebar__trend">
                    <h2 className='country'>Trending in Germany</h2>
                    <h3 className="revolution">Revolution</h3>
                    <h4 className='stats'><span className="stat-number">50.4K</span>Tweets</h4>
                </hgroup>
                <button className="right-sidebar__more-btn">
                <More />
                </button>
                
            </div>

            <button className="right-sidebar__show-more-btn">{content[language].show_more}</button>
        
        </div>

        <div className="right-sidebar__followers">
        
            <h1 className="right-sidebar__followers-heading">
            {content[language].more_news}
            </h1>

            <div className="right-sidebar__follower">
                <a href="#link" className="right-sidebar__follower-link">
                <img src={Mushtariy} alt="mushtariy" className="right-sidebar__follower-img" />
                <hgroup>
                    <h2 className="name">Mushtariy</h2>
                    <h3 className="email">@Mushtar56266</h3>
                </hgroup>
                </a>
                <button className="right-sidebar__follow-btn">Follow</button>
            </div>

            <div className="right-sidebar__follower">
                <a href="#link" className="right-sidebar__follower-link">
                <img src={Shuhratbek} alt="mushtariy" className="right-sidebar__follower-img" />
                <hgroup>
                    <h2 className="name">Shuhratbek</h2>
                    <h3 className="email">@mrshukhrat</h3>
                </hgroup>
                </a>
                <button className="right-sidebar__follow-btn">Follow</button>
            </div>

            <button className="right-sidebar__show-more-btn">{content[language].show_more}</button>
        </div>

        <ul className="right-sidebar__list">
            <li className="right-sidebar__item">
                <a href="https://twitter.com/ru/tos" className="right-sidebar__link">{content[language].service}</a>
            </li>

            <li className="right-sidebar__item">
                <a href="https://twitter.com/ru/privacy" className="right-sidebar__link">{content[language].privacy}</a>
            </li>

            <li className="right-sidebar__item">
                <a href="https://help.twitter.com/ru/rules-and-policies/twitter-cookies" className="right-sidebar__link">{content[language].cookie}</a>
            </li>

            <li className="right-sidebar__item">
                <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo" className="right-sidebar__link">{content[language].ads_info}</a>
            </li>

            <li className="right-sidebar__item ">
                <button className="right-sidebar__button">{content[language].more} ···</button>
                <ul className="right-sidebar__dropdown-list">
                    <li className="right-sidebar__dropdown-item">
                        <a href="https://about.twitter.com/en" className="right-sidebar__dropdown-link">About</a>
                    </li>

                    <li className="right-sidebar__dropdown-item">
                        <a href="https://status.twitterstat.us/" className="right-sidebar__dropdown-link">Status</a>
                    </li>
                    
                    <li className="right-sidebar__dropdown-item">
                        <a href="https://business.twitter.com/" className="right-sidebar__dropdown-link">Twitter for Business</a>
                    </li>

                    <li className="right-sidebar__dropdown-item">
                        <a href="https://developer.twitter.com/en" className="right-sidebar__dropdown-link">Developers</a>
                    </li>
                </ul>
            </li>

            <li className="right-sidebar__item">
                <p className="right-sidebar__paragraph">© 2021 Twitter, Inc.</p>
            </li>
        </ul>
    
    </div>);
}

export default RightSidebar;