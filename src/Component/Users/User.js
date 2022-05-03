import { useState, useEffect, memo } from "react";
import axios from "axios";

import Post from "./Posts/Post";
function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `https://6266a22263e0f3825684de8d.mockapi.io/api/users`
        );
        setUsers(res.data);
        // console.log(res.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {users.map((user, key) => (
        <div id="user_wrap" key={key}>
          <div className="layout_post">
            <Post userId={user.id} />
          </div>
        </div>
      ))}
    </>
  );
}

export default memo(User);
