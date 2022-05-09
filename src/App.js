import { useState, createContext } from "react";
import Modal from "./Component/Users/Posts/modal-post/Modal";
import ModalCreatePost from "./Component/Header/ModalCreatePosts/ModalCreatePost";
import { Routes, Route } from "react-router-dom";
import "./Global-Styles/Style.css";
import Login from "./Component/Login/Login";
import HomePage from "./Component/Pages/HomePage/HomePage";
import Message from "./Component/Pages/Messages-pages/Message";
export const open_Modal = createContext();
export const open_Modal_create_post = createContext();

function App() {
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

  return (
    <open_Modal_create_post.Provider value={handleOpenModalCreate}>
      <open_Modal.Provider value={handleOpenModal}>
        <div className="App">
          {openModal && <Modal closeModal={setOpenModal} />}
          {openModalCreate && (
            <ModalCreatePost closeModalCreate={setOpenModalCreate} />
          )}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/inbox" element={<Message />} />
          </Routes>
        </div>
      </open_Modal.Provider>
    </open_Modal_create_post.Provider>
  );
}

export default App;
