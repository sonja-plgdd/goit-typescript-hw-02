import ReactModal from "react-modal";
import s from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

function ImageModal({ image, closeModal, modalIsOpen }) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(5px)",
        },
        content: {
          maxWidth: "1100px",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          height: "fit-content",
        },
      }}
    >
      <div key={image.id}>
        <img
          src={image.urls.regular}
          alt={image.description}
          className={s.img}
        />
        <ul className={s["img-info"]}>
          <li className={s["img-info-item"]}>
            <h4>Likes</h4>
            <p>{image.likes}</p>
          </li>
          <li className={s["img-info-item"]}>
            <h4>Description</h4>
            <p>{image.description}</p>
          </li>
          <li className={s["img-info-item"]}>
            <h4>Author</h4>
            <div className={s["author-img"]}>
              <p>{image.user.name}</p>
              <img
                src={image.user.profile_image.small}
                alt={image.user.name}
                style={{
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                }}
              />
            </div>
          </li>
        </ul>
      </div>
      <button type="button" onClick={closeModal} className={s["close-btn"]}>
        <IoMdClose
          style={{
            color: "#000",
            width: "12px",
            height: "12px",
          }}
        />
      </button>
    </ReactModal>
  );
}

export default ImageModal;
