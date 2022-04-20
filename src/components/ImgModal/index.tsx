import React, { useState } from "react";
import Modal from "react-modal";
import { Image } from "@adobe/react-spectrum";
import "./styles.css";

Modal.setAppElement("#root");
export default function ImgModal({ pic }: ImgProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <span className="img-span" onMouseEnter={() => setIsOpen(true)}>
        <Image src={pic} alt="breeds" />
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Img dialog"
        className="img-modal"
        overlayClassName="img-overlay"
        closeTimeoutMS={500}
      >
        <Image src={pic} alt="breeds" />
        <span className="x-button" onClick={() => setIsOpen(false)}>&#88;</span>
      </Modal>
    </div>
  );
}

interface ImgProps {
  pic: string;
}
