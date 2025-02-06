import s from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div className={s["btn-wrapper"]}>
      <button type="button" onClick={onClick} className={s.loadbtn}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
