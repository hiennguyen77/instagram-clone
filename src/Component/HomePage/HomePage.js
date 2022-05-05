import { useState, createContext, memo } from "react";
import Modal from "../Users/Posts/modal-post/Modal";
import ModalCreatePost from "../Header/ModalCreatePosts/ModalCreatePost";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";

export const open_Modal = createContext();
export const open_Modal_create_post = createContext();

function HomePage() {
  // Handle open modal click
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  // Handle open modal create post
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const handleOpenModalCreate = () => {
    setOpenModalCreate(true);
  };

  // ========================= Return ==============================
  return (
    <open_Modal_create_post.Provider value={handleOpenModalCreate}>
      <open_Modal.Provider value={handleOpenModal}>
        <div className="home_page">
          {openModal && <Modal closeModal={setOpenModal} />}
          {openModalCreate && (
            <ModalCreatePost closeModalCreate={setOpenModalCreate} />
          )}
          <Header />
          <Layout />
        </div>
      </open_Modal.Provider>
    </open_Modal_create_post.Provider>
  );
}

export default memo(HomePage);
