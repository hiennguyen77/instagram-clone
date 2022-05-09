import "./ModalCreatePost.css";
import {BsImages} from "react-icons/bs";

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
          <div >
            <BsImages className="create_icon" />
          </div>
          <h1 className="create_text">Drags photos and videos here</h1>

          <input type="file" name="file" id="file" className="create_input" />
          <label htmlFor="file">Select from computer</label>
        </div>
      </div>
    </>
  );
}
export default ModalCreatePost;
