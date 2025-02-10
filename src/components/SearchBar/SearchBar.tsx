import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { FormEvent } from "react";
import { SearchBarProps } from "../../types";

function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryInput = e.currentTarget.elements.namedItem(
      "topic"
    ) as HTMLInputElement;

    const query = queryInput.value.trim();

    form.reset();
    if (query === "") {
      toast("Please try to search for images!");
      return;
    }
    onSearch(query);
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
