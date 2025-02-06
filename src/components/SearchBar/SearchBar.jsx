import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = e.target.elements.topic.value;
    onSearch(query);
    form.reset();
    if (query.trim() === "") {
      toast("Please try to search for images!");
    }
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s["search-form"]}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
        />
        <button type="submit" className={s["submit-btn"]}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}

export default SearchBar;
