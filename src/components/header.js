import Button from './button'
import SearchBar from './searchBar'
import Logo from '../misc/sing-a-song-logo.png'
import { Link } from 'react-router-dom'
import { app } from '../firebase-config'
import { signInWithPopup, GoogleAuthProvider, signOut, getAuth } from "firebase/auth";


const Header = (props) => {


    const authentication = getAuth(app)

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
            console.log(re)

            props.setCurrentUser(re["user"]["uid"])
            props.setSignedIn(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    //the block above copy pasted into trackCard

    const signOutOfGoogle = () => {
        signOut(getAuth())
        props.setCurrentUser(null)
        props.setSignedIn(false)
    }

    return (
        <div className="header">
            <Link to='/'> <div className="logo-container">
                <img className="logo" src={Logo} alt="logo"/>
                <span className="logo-title">Sing-a-Song</span>
            </div> </Link>
            <div className="authentication-container">
                { props.signedIn ? (
                    <div className="signed-in-container">
                        <SearchBar apiKey={props.apiKey} musicData={props.musicData} setMusicData={props.setMusicData}/>
                        <Button purpose="Sign out" onClick={()=>signOutOfGoogle()}/>
                        <Link to='/account'> <Button purpose="Account"/> </Link>
                    </div>
                ) : (
                    
                    <Button onClick={()=>signInWithGoogle()} purpose="Sign in"/>
                )}
            </div>
        </div>
    );
};

export default Header;

