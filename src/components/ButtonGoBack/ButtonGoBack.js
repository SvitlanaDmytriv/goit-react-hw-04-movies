import s from './ButtonGoBack.module.css';

export default function ButtonGoBack({ onClick }) {
  return (
    <div className={s.btnContainer}>
      <button type="button" onClick={onClick} className={s.btn}>
        <span className={s.btnText}>BACK</span>
      </button>
    </div>
  );
}
