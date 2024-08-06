import { useState } from "react";
import Modal from "./modalpopup";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleModalPopup}>Popup</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          body={<div>This is the div part of the pop up</div>}
          header={<div>This is the header part of pop up</div>}
        />
      )}
    </div>
  );
}
