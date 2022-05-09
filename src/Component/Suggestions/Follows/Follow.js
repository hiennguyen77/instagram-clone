import { useEffect, useState } from "react";
import axios from "axios";

function Follow() {
  
  const [follows, setFollows] = useState([]);
  

  useEffect(() => {
    const getUserFollow = async () => {
      try {
        const res = await axios.get(
          `https://6266a22263e0f3825684de8d.mockapi.io/api/follows`
        );
        setFollows(res.data);
       
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserFollow();
  },[]);

  const handleFollow =(id)=> {
    const newFollow=follows.map((follow) => {
        if(follow.id === id) {
            follow.following = !follow.following
        }
        console.log(follow)   
        return follow
    })
    setFollows(newFollow)
    
  }
  

  return  (
    <>
    
      <div className="follow_wrap">
        <div className="suggestions_for_you">
          <h4>Suggestion For You</h4>
          <p>See All</p>
        </div>
        {follows.map((follow, key) => (
          <div className="suggestions_follow" key={key}>
            <div className="follow_user">
              <img className="rose_avatar" src={follow.avatar} alt="#" />
              <div className="follow_name">
                <a href="abc" className="follow_name_link">
                  {follow.name}
                </a>
                <h4 className="sub_follow_name">Suggestions For You</h4>
              </div>
            </div>
            <button className={follow.following? 'following_btn': 'follow_btn'}
             onClick ={()=>handleFollow(follow.id)} 
             >{follow.following?'Following' : 'Follow'}
            
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Follow;
