import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../../types";

function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <ul className={s["img-gallery"]}>
      {images.map((image) => {
        return (
          <li key={image.id} className={s["img-gallery-item"]}>
            <div>
              <ImageCard
                image={image}
                // src={image.urls}
                // alt={image.description}
                openModal={openModal}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
