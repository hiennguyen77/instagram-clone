import { useState, memo, useRef } from "react";
import "./Comment.css";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

function Comment(props) {
  const { postId, userId } = props;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const ref = useRef();

  //CALL API
  const handleShowComment = () => {
    const getComment = async () => {
      try {
        const res = await axios.get(
          `https://6266a22263e0f3825684de8d.mockapi.io/api/users/${userId}/posts/${postId}/comments`
        );

        setComments(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getComment();
  };

  // HANDLE POST COMMENT
  const handlePostComment = (e) => {
    e.preventDefault();
    const postComment = async (comment) => {
      try {
        const res = await axios.post(
          `https://6266a22263e0f3825684de8d.mockapi.io/api/users/${userId}/posts/${postId}/comments`,
          {
            comment: comment,
            user_name: "nguyen_chi_hien",
          }
        );
        if (comment) {
          const newComment = [...comments, res.data];

          setComments(newComment);
          setComment("");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    postComment(comment);
  };  
  // HANDLE DELETE COMMENT

  const handleDelete = (id) => {
    const deletePost = async (id) => {
      try {
        await axios.delete(
          `https://6266a22263e0f3825684de8d.mockapi.io/api/users/${userId}/posts/${postId}/comments/${id}`
        );
        const newComment = comments.filter((comment) => comment.id !== id);

        setComments(newComment);
      } catch (error) {
        console.log(error.message);
      }
    };
    deletePost(id);
  };

  
  // ============================== Return ==========================
  // refactor
  return (
    <>
      <p
        className={comment ? "active_view_comment" : "view_comment"}
        onClick={handleShowComment}
      >
        View all comment
      </p>

      {comments.map((comment, key) => (
        <div key={key}>
          <div className="comment_wrap">
            <div className="comment_container">
              <h4 className="comment_name">{comment.user_name}</h4>
              <h4 className="comment_time">1 giây</h4>
            </div>
            <span className="comment_content">{comment.comment}</span>
            <div
              className="delete_content"
              onClick={() => handleDelete(comment.id)}
            >
              <i>{<AiOutlineClose />}</i>
            </div>
          </div>
        </div>
      ))}
      <div className="post_comment">
        <div>{<BsEmojiSmile />}</div>
        <form onSubmit={handlePostComment}>
          <input
            value={comment}
            className="comment_input"
            placeholder="Add a comment.."
            onChange={(e) => setComment(e.target.value)}
            ref={ref}
          />
          <button className={comment ? "active" : "comment_btn"}>Post</button>
        </form>
      </div>
    </>
  );
}
export default memo(Comment);
