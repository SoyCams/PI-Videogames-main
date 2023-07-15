import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css';

const Landingpage = () => {
  return (
    <div className={styles.contenedor}>
      <img
        src="https://res.cloudinary.com/djyx9jath/image/upload/v1687989736/Videogames/video-games-window-League-of-Legends-glass-pattern-mosaic-91940-wallhere.com_w6zsx9.jpg"
        alt="videojuego"
      />
      <Link to="/home">Ingresar</Link>
    </div>
  );
};

export default Landingpage;
