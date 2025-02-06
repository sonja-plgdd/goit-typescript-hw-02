import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

function ImageGallery({ images, openModal }) {
  return (
    <ul className={s["img-gallery"]}>
      {images.map((image) => {
        return (
          <li
            key={image.id}
            className={s["img-gallery-item"]}
            // onClick={() => {
            //   openModal(image);
            // }}
          >
            <div>
              <ImageCard
                src={image.urls.small}
                alt={image.description}
                openModal={() => {
                  openModal(image);
                }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
