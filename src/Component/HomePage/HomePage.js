import { useState, createContext, memo } from "react";
import Modal from "../Posts/modal-post/Modal";
import Header from "../Header/Header";
import Layout from "../layout/Layout";

export const open_Modal = createContext();

function HomePage() {

    // Handle open modal click
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // ========================= Return ==============================
  return (
    <open_Modal.Provider value={handleOpenModal}>
      <div className="home_page">
        {openModal && <Modal closeModal={setOpenModal} />}
        <Header />
        <Layout />
      </div>
    </open_Modal.Provider>
  );
}

export default memo(HomePage);
