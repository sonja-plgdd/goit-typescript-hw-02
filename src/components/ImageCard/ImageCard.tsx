import s from "./ImageCard.module.css";
import { ImageCardProps } from "../../types";

function ImageCard({ image, openModal }: ImageCardProps) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.description}
        className={s.img}
        onClick={() => openModal(image)}
      />
    </div>
  );
}

export default ImageCard;
