import {useState} from 'react';
import './Header.css';
import Notification from '../Notification/Notification'
import logoHeader from '../img/Instagram_logo.svg.png';
import navUserAvatar from '../img/nav_user.jpg'
import {AiOutlineHome} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {FiPlusSquare} from 'react-icons/fi'
import {ImCompass2} from 'react-icons/im'
import {FiHeart} from 'react-icons/fi'
import {Link} from 'react-router-dom'
// import {CgSearch} from 'react-icons/cg';


function Header() {

    //Handle Notification click
    const [openNotification, setOpenNotification] = useState(false);
    const handleNotification = ()=> {
        setOpenNotification(openNotification === true ? false : true);
    }
    
// =========================== Return ====================================
    return (
        <div className='header'>
            <div className='header_container'>
            <div className='header_logo'>
                <a href='/home'><img className='logo_ins' src={logoHeader}/></a>
            </div>
            <div className='header_input'>
                {/* <a className='input_icon' href='/'><CgSearch/></a> */}
                <input className='search_input' placeholder='Search'/>
            </div>
            <div className='header_navbar'>
                <div className='icon_item'>
                    <Link className='home_icon' to='/home'><AiOutlineHome/></Link>
                    <Link className='message_icon' to='/inbox'><RiMessengerLine/></Link>
                    <a className='create_icon' href='/'><FiPlusSquare/></a>
                    <a className='trend_icon' href='/'><ImCompass2/></a>
                    <a className='notification_icon' onClick ={handleNotification}><FiHeart/></a>
                    {openNotification && <Notification />}
                    
                </div>
                <div className='nav_user'>
                    <img className='nav_user_avatar' src={navUserAvatar}/>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Header;