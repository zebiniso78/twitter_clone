import './RightSidebar.scss';

//Icons
import Search from '../Lib/Svg/Search';
import Settings from '../Lib/Svg/Settings';
import More from '../Lib/Svg/ThreeDots';

//Images
import Mushtariy from '../../Assets/Images/mushtariy.png';
import Shuhratbek from '../../Assets/Images/shuhratbek.png';

function RightSidebar() {
    return (<div className="right-sidebar">

    <div className="right-sidebar__search-input__wrapper">
        <Search />
        <input type="text" name="search" className="right-sidebar__search-input" placeholder="Search Twitter" />
    </div>
    
    <div className="right-sidebar__trends"> 

        <div className="right-sidebar__setting__wrapper">
            <h1 className="right-sidebar__setting-heading">
            Trends for you
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

        <button className="right-sidebar__show-more-btn">Show more</button>
    
    </div>

    <div className="right-sidebar__followers">
        
        <h1 className="right-sidebar__followers-heading">
            You might like
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

        <button className="right-sidebar__show-more-btn">Show more</button>
    </div>
    
    <div className="additional-info"> 
    <span className="additional">Terms of Service</span>  
    <a href="#link" className="privacy-policy">Privacy Policy</a> 
    <span className="additional">Cookie Policy</span> 
    <span className="additional">Imprint</span>   
    <span className="additional">Ads Info</span>
    <span className="additional">More ···</span>
    <span className="additional">© 2021 Twitter,Inc</span>
    </div>
    </div>);
}

export default RightSidebar;