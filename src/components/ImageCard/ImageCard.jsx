import s from "./ImageCard.module.css";

function ImageCard({ src, alt, openModal }) {
  return (
    <div>
      <img src={src} alt={alt} className={s.img} onClick={openModal} />
    </div>
  );
}

export default ImageCard;
