import Button from './button'
import SearchBar from './searchBar'
import Logo from '../misc/sing-a-song-logo.png'
import { Link } from 'react-router-dom'

const Header = ({apiKey}) => {
    return (
        <div className="header">
            <Link to='/'> <div className="logo-container">
                <img className="logo" src={Logo} alt="logo"/>
                <span className="logo-title">Sing-a-Song</span>
            </div> </Link>
            <div className="authentication-container">
                <Button purpose="Sign in"/>
                <Button purpose="Sign up"/>
            </div>
            {/* <SearchBar/> */}
        </div>
    );
};

export default Header;