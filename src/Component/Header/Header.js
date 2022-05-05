import { useState, useContext } from "react";
import "./Header.css";
import { open_Modal_create_post } from "../HomePage/HomePage";
import Notification from "../Notification/Notification";
import TableProfile from "./TableProfile/TableProfile";
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
  const openModalCreate = useContext(open_Modal_create_post);

  const [openNotification, setOpenNotification] = useState(false);
  const [openTableProfile, setOpenTableProfile] = useState(false);
  const [openRecent, setOpenRecent] = useState("");

  //Handle Notification click
  const handleNotification = () => {
    setOpenNotification(openNotification === true ? false : true);
  };
  //handleOpenTableProfile
  const handleOpenTableProfile = () => {
    setOpenTableProfile(openTableProfile === true ? false : true);
  };
  //Handle recentSearch
  const handleOpenRecent = (e) => {
    setOpenRecent(e.target.value);
  };
  //handleSubmitSearchInput
  const handleSubmitSearchInput = (e) => {
    e.preventDefault();
    //chua xu lí logic
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
            <div className="create_icon" onClick={openModalCreate}>
              <FiPlusSquare />
            </div>
            <a className="trend_icon" href="/">
              <ImCompass2 />
            </a>
            <div className="notification_icon" onClick={handleNotification}>
              {openNotification ? <FaHeart /> : <FiHeart />}
            </div>
            {openNotification && <Notification />}
          </div>
          <div className="nav_user" onClick={handleOpenTableProfile}>
            <img
              className={
                openTableProfile ? "nav_user_avatar_active" : "nav_user_avatar"
              }
              src={navUserAvatar}
            />
          </div>
          {openTableProfile && <TableProfile />}
        </div>
      </div>
    </div>
  );
}

export default Header;
