//Scss
import './Main.scss';

//Icons
import Mode from '../Lib/Svg/ChangeMode';


function Main() {
    return (
        <>
            <div className="main__top-div">
                <h1 className="main__top-header">Home</h1>
                <Mode />
            </div>
        </>
    );
}

export default Main;