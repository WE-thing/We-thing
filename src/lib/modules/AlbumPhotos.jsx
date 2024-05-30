import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

export default function AlbumPhotos({ picUrls, start, end }) {
  const [modalShow, setModalShow] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState("");

  const handleClose = (e) => {
    setModalShow(false);
  };
  const handleOpen = (e) => {
    setModalShow(true);
  };

  const rows = [];
  for (let i = 0; i < end; i += 3) {
    rows.push(picUrls.slice(i, i + 3));
  }

  return (
    <div className="photos-container p-3">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="photo-row  flex justify-center mb-1 gap-1"
        >
          {row.map((src, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${src})` }}
              className="bg-cover bg-center w-1/3 aspect-square"
              onClick={() => {
                setModalImgUrl(src);
                handleOpen();
              }}
            ></div>
          ))}
        </div>
      ))}
      <Modal
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        show={modalShow}
        onHide={handleClose}
        centered
      >
        <Modal.Body style={{ padding: 0 }}>
          <img src={modalImgUrl} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

AlbumPhotos.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};
