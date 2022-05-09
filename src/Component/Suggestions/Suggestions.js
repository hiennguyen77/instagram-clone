import "./Suggestions.css";
import Follow from './Follows/Follow'
import userAvatar from "../../img/nav_user.jpg";
import userFollowAvatar from "../../img/rose.jpg";

function Suggestions() {

// ========================== Return ================================  
  return (
    <>
      <div className="suggestions_wrap">
        <div className="suggestions_user">
          <img className="suggestions_avatar" src={userAvatar} alt='#' />
          <div className="suggestions_user_container">
            <a href="abc" className="suggestions_name">
              nguyen_chi_hien
            </a>
            <h4 className="sub_user_name">HienNguyen</h4>
          </div>
          <button className="switch_btn">Switch</button>
        </div>
          <Follow/>
        
        
        <div className="footer_wrap">
          <p>About.Help.Press.Api.Jobs.Privacy.Terms.</p>
          <p>Locations. Top Account.Hashtags.Language</p>
          <h4>2022 INSTAGRAM FROM META</h4>
        </div>
      </div>
    </>
  );
}

export default Suggestions;
