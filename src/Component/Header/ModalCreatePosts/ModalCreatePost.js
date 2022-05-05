import "./ModalCreatePost.css";
import { AiOutlinePicture } from "react-icons/ai";

function ModalCreatePost(props) {
  const { closeModalCreate } = props;
  //HANDLE CLOSE MODAL CREATE
  const handleCloseModalCreate = () => {
    closeModalCreate(false);
  };

  return (
    <>
      <div
        className="modal_create_background"
        onClick={handleCloseModalCreate}
      ></div>
      <div className="create_container">
        <div className="modal_create_heading">
          <h3 className="create_new_post">Create new post</h3>
        </div>
        <div className="modal_create_body">
          <div className="create_icon">
            <AiOutlinePicture />
          </div>
          <h1 className="create_text">Drags photos and videos here</h1>

          <input className="create_input" type="file" />
        </div>
      </div>
    </>
  );
}
export default ModalCreatePost;
