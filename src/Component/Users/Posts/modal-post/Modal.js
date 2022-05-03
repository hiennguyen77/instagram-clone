import "./Modal.css";

function Modal({ closeModal }) {

    // Handle close modal click
  const handleCloseModal = () => {
    closeModal(false);
  };
// ============================= Return =====================================
  return (
    <>
      <div className="modal_background" onClick={handleCloseModal}></div>
      <div className="modal_container">
        <button className="modal report">Report</button>
        <button className="modal un_follow">Unfollow</button>
        <button className="modal go_to_post">Go to post</button>
        <button className="modal share">Share to..</button>
        <button className="modal copy_link">Copy link</button>
        <button className="modal embed">Embed</button>
        <button className="modal cancel" onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    </>
  );
}
export default Modal;
