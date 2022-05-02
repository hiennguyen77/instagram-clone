import { useState, useContext, memo, useEffect, createContext } from "react";
import axios from 'axios'
import { open_Modal } from "../HomePage/HomePage";

// import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import "./Post.css";
import Comment from "./comment/Comment";
import { RiMoreFill } from "react-icons/ri";

import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

// import axios from 'axios'

function Post() {
  const openModal = useContext(open_Modal);
  const [posts, setPosts] = useState([]);
  

  //Call Api
  useEffect(()=> {
    const getPost = async ()=> {
      try {
        const res = await axios.get(
          'https://6266a22263e0f3825684de8d.mockapi.io/api/posts'
        )
        setPosts(res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getPost()
  }, [])
  //HANDLE LIKES
  const handleLike = (id) => {
    const newLike = posts.map((post) => {
      if (post.id === id) post.like_status = !post.like_status;
      return post;
    });
    setPosts(newLike);
  };

  
  
// ============================== Return ===================================
  return (
    <>
      {posts.map((post, key) => (
        <div className="Post_wrap" key={key}>
          <div className="post_header">
            <div className="post_header_container">
              <div className="post_avatar">
                <img src={post.avatar} />
              </div>
              <h6 className="post_user_name">{post.user_name}</h6>
            </div>
            <div className="post_header_icon" onClick={openModal}>
              {<RiMoreFill />}
            </div>
          </div>
          <div className="post_img_wrap">
            <img className="post_img" src={post.post_img} />
          </div>
          <div className="post_action">
            <div className="action_icon" onClick={() => handleLike(post.id)}>
              {post.like_status ? <FcLike /> : <FiHeart />}
            </div>
            <div className="action_icon">{<BsChat/>}</div>
            <div className="action_icon">{<FiSend />}</div>
            <div className="action_icon_book">{<BsBookmark />}</div>
          </div>
          <div className="post_content">
            <h5> 999 likes</h5>
            <a href="#">nguyen_chi_hien</a> <span>{post.post_status}</span>
            <p>View all comment</p>
            <Comment postId={post.id}/>
          </div>
        </div>
      ))}
    </>
  );
}
export default memo(Post);
