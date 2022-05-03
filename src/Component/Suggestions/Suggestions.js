import "./Suggestions.css";
import userAvatar from "../../img/nav_user.jpg";
import userFollowAvatar from "../../img/rose.jpg";

function Suggestions() {

// ========================== Return ================================  
  return (
    <>
      <div className="suggestions_wrap">
        <div className="suggestions_user">
          <img className="suggestions_avatar" src={userAvatar} />
          <div className="suggestions_user_container">
            <a href="#" className="suggestions_name">
              nguyen_chi_hien
            </a>
            <h4 className="sub_user_name">HienNguyen</h4>
          </div>
          <button className="switch_btn">Switch</button>
        </div>
        <div className="suggestions_for_you">
          <h4>Suggestion For You</h4>
          <p>See All</p>
        </div>

        <div className="suggestions_follow">
          <img className="rose_avatar" src={userFollowAvatar} />
          <div className="follow_name">
            <a href="#" className="follow_name_link">
              Rose_black_pink
            </a>
            <h4 className="sub_follow_name">Rose_</h4>
          </div>
          <button className="follow_btn">Follow</button>
        </div>
        <div className="suggestions_follow">
          <img className="rose_avatar" src={userFollowAvatar} />
          <div className="follow_name">
            <a href="#" className="follow_name_link">
              Rose_black_pink
            </a>
            <h4 className="sub_follow_name">Rose_</h4>
          </div>
          <button className="follow_btn">Follow</button>
        </div>
        <div className="suggestions_follow">
          <img className="rose_avatar" src={userFollowAvatar} />
          <div className="follow_name">
            <a href="#" className="follow_name_link">
              Rose_black_pink
            </a>
            <h4 className="sub_follow_name">Rose_</h4>
          </div>
          <button className="follow_btn">Follow</button>
        </div>
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
