import Spinner from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.loader}>
      <Spinner
        type="Grid"
        color="#ee53b3"
        height={150}
        width={150}
        timeout={1000}
      />
    </div>
  );
}
