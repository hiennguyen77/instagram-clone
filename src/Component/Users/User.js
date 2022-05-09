import { useState, useEffect, memo } from "react";
import axios from "axios";
import Story from "./Storys/Story";
import Post from "./Posts/Post";
import Loading from "../Loading/Loading"


function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `https://6266a22263e0f3825684de8d.mockapi.io/api/users`
        );
        setUsers(res.data);
        setLoading(false)
        // console.log(res.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);



  return(
    <>
      {loading && <Loading />} 
      <div className="layout_story">
        <Story  />
      </div>

      {users.map((user, key) => (
        <div id="user_wrap" key={key}>
          <div className="layout_post">
            <Post
              userId={user.id}
              userName={user.user_Name}
              userAvatar={user.userAvatar}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default memo(User);
