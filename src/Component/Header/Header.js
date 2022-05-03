import { useState } from "react";
import "./Header.css";
import Notification from "../Notification/Notification";
import Recent from "../RecentSearch/Recent";
import logoHeader from "../../img/Instagram_logo.svg.png";
import navUserAvatar from "../../img/nav_user.jpg";
import { AiOutlineHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

// import {FaFacebookMessenger} from 'react-icons/fa'
// import {CgSearch} from 'react-icons/cg';

function Header() {
  const [openNotification, setOpenNotification] = useState(false);
  const [openRecent, setOpenRecent] = useState("");

  //Handle Notification click
  const handleNotification = () => {
    setOpenNotification(openNotification === true ? false : true);
  };
  //Handle recentSearch
  const handleOpenRecent = (e) => {
    setOpenRecent(e.target.value);
  };
  //handleSubmitSearchInput
  const handleSubmitSearchInput = (e) => {
    e.preventDefault();
  };

  // =========================== Return ====================================
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_logo">
          <a href="/home">
            <img className="logo_ins" src={logoHeader} />
          </a>
        </div>
        <form onSubmit={handleSubmitSearchInput}>
          <div className="header_input">
            {/* <a className='input_icon' href='/'><CgSearch/></a> */}
            <input
              className="search_input"
              value={openRecent}
              placeholder="Search"
              onChange={handleOpenRecent}
            />
            {openRecent && <Recent openRecent={openRecent} />}
          </div>
        </form>
        <div className="header_navbar">
          <div className="icon_item">
            <Link className="home_icon" to="/home">
              <AiOutlineHome />
            </Link>
            <Link className="message_icon" to="/inbox">
              <RiMessengerLine />
            </Link>
            <a className="create_icon" href="/">
              <FiPlusSquare />
            </a>
            <a className="trend_icon" href="/">
              <ImCompass2 />
            </a>
            <a className="notification_icon" onClick={handleNotification}>
              {openNotification ? <FaHeart /> : <FiHeart />}
            </a>
            {openNotification && <Notification />}
          </div>
          <div className="nav_user">
            <img className="nav_user_avatar" src={navUserAvatar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
