export interface Image {
  id: number;
  urls: { small: string; regular: string };
  description: string;
  likes: number;
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
}

export interface FetchData {
  results: Image[];
  total_pages: number;
}

export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

export interface ImageCardProps {
  // src: Image["urls"];
  // alt: Image["description"];
  image: Image;
  openModal: (image: Image) => void;
}

export interface ImageModalProps {
  image: Image | null;
  closeModal: () => void;
  modalIsOpen: boolean;
}

export interface LoadMoreProps {
  onClick: () => void;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}
