import { useEffect, useState } from "react";
import { fetchImagesWithQuery } from "./images-api";
import ReactModal from "react-modal";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import "./App.css";
import { Image, FetchData } from "./types";

ReactModal.setAppElement("#root");

function App() {
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      if (!query) return;
      try {
        setLoader(true);
        setError(false);
        const data: FetchData = await fetchImagesWithQuery(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setLoader(false);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {loader && <Loader />}

      <ImageModal
        image={selectedImage}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {totalPages > page && <LoadMoreBtn onClick={handleChangePage} />}
    </div>
  );
}

export default App;
