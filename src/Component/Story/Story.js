import { useState, useEffect } from "react";
import "./Story.css";
// import storyNameUser from '../img/nav_user.jpg';

function Story() {
  const [storys, setStory] = useState([]);
  useEffect(() => {
    fetch("https://6266a22263e0f3825684de8d.mockapi.io/api/users")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setStory(result);
      });
  }, []);
  // ============================= Return ============================  
  return (
    <div className="story">
      {storys.map((story, key) => (
        <div className="story_container" key={key}>
          <div className="story_item">
            <img className="story_img" src={story.userAvatar} />
          </div>
          <p className="story_use_name">{story.user_Name}</p>
        </div>
      ))}
    </div>
  );
}

export default Story;
