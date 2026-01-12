import React from "react";
import "./Modal.css";
import MainModal from "./MainModal";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [offerAccepted, setOfferAccepted] = React.useState(false);

  const handleModalToggle = () => {
    console.log("Modal toggle clicked. Current state:", isModalOpen);
    setIsModalOpen(!isModalOpen);
  };


  const handleAcceptOffer = () => {
    setOfferAccepted(true);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="modal-overlay">
        {!isModalOpen && !offerAccepted && (
          <button className="modal-button" onClick={handleModalToggle}>
            Show Offer
          </button>
        )}

        <MainModal isModalOpen={isModalOpen}>
          <p>Click the button below to accept the amazing offer!</p>
          <button className="modal-button" onClick={handleAcceptOffer}>
            Accept Offer
          </button>
        </MainModal>

        {offerAccepted && (
          <p className="offer-accepted-message">
            Thank you for accepting the offer!
          </p>
        )}
      </div>
    </>
  );
};

export default Modal;
