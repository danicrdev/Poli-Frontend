import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import catImage from '../assets/cat.webp';
import dogImage from '../assets/dog.webp';
import facebookLogo from '../assets/facebook.png';
import instagramLogo from '../assets/instagram.png';
import twitterLogo from '../assets/twitter.png';
import './Nosotros.css';

const Nosotros = () => {
  const navigate = useNavigate(); // Inicializa el hook de navegación

  return (
    <div className="outer-container">
      <div className="nosotros-container">
        <header className="header">
          <img src={dogImage} alt="Logo Huellas Peludas" className="logo" />
          <h1 className="title">Sobre Huellas Peludas</h1>
        </header>

        <section className="mission-vision">
          <h2 className="subtitle">Nuestra Misión</h2>
          <p className="text">
            En Huellas Peludas, somos un equipo apasionado de amantes de las
            mascotas que se dedican a cuidar y proteger a nuestros amigos de
            cuatro patas. Creemos que cada animal merece una vida llena de amor
            y atención, y nos esforzamos por hacer de esto una realidad.
          </p>

          <h2 className="subtitle">Nuestra Visión</h2>
          <p className="text">
            Nuestra visión es crear un mundo donde cada animal abandonado tenga
            la oportunidad de encontrar un hogar amoroso. Nos comprometemos a
            educar y concientizar a la comunidad sobre la importancia de la
            adopción y el bienestar animal, fomentando una cultura de respeto y
            cariño hacia todos los seres vivos.
          </p>
        </section>

        <section className="what-we-do">
          <h2 className="subtitle">¿Qué Hacemos?</h2>
          <p className="text">
            Brindamos un refugio seguro y acogedor para aquellos animales que
            han sido abandonados o que necesitan una segunda oportunidad.
            Promovemos la adopción de estos maravillosos seres, asegurando que
            cada uno encuentre un hogar donde se le brinde el amor y cuidado que
            se merece.
          </p>
          <p className="text">
            Además, entendemos que hay familias que, por diversas razones, no
            pueden seguir cuidando de sus mascotas. En estos casos, les animamos
            a considerar la opción de donarlas a familias que estén listas para
            asumir la responsabilidad. Así, encontramos soluciones que
            beneficien tanto a los animales como a las familias involucradas.
          </p>
          <p className="text">
            También ofrecemos la opción de donar para la alimentación y
            manutención de nuestros animales mientras esperan ser adoptados.
            Estas contribuciones son vitales para garantizar que cada mascota
            reciba la atención y el cuidado necesarios durante su estancia con
            nosotros.
          </p>
        </section>

        <img src={catImage} alt="Nuestra misión" className="mission-image" />

        <section className="social-media">
          <h2 className="subtitle">¡Síguenos en nuestras redes sociales!</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </section>

        <section className="call-to-action">
          <p className="text">
            Te invitamos a unirte a nuestra causa y a ser parte de este hermoso
            viaje. ¡Juntos, podemos marcar la diferencia en la vida de muchos
            animales que necesitan nuestro apoyo!
          </p>

          <div className="buttons">
            <button className="button" onClick={() => navigate('/login')}>
              {' '}
              {/* Redirige a /login */}
              ¿Aún no estás registrado?
            </button>
            <button
              className="button adopt-button"
              onClick={() => navigate('/adopta')}
            >
              {' '}
              {/* Redirige a /adopta */}
              ¡Adopta ya!
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;
