import telefonoImage from '../assets/telefono.png';
import emailImage from '../assets/email.png';
import direccionImage from '../assets/direccion.png';
import relojImage from '../assets/reloj.png';
import './Contactenos.css';

const Contactenos = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contactenos</h2>
        <p>
          No dude en ponerse en contacto con nosotros en cualquier momento. Le
          responderemos lo antes posible.
        </p>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="right-section">
        <div className="blue-bar"></div>
        <div className="contact-info">
          <div className="blue-square"></div>
          <h3>Info</h3>
          <div className="info-item">
            <img src={emailImage} alt="Email" />
            <span>info@adopta.com</span>
          </div>
          <div className="info-item">
            <img src={telefonoImage} alt="Phone" />
            <span>01-800-0180779</span>
          </div>
          <div className="info-item">
            <img src={direccionImage} alt="Address" />
            <span>Cl. 57 #3-00, Bogotá</span>
          </div>
          <div className="info-item">
            <img src={relojImage} alt="Hours" />
            <span>08:00 - 17:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactenos;
