import './Adopta.css';

const Adopta = () => {
  return (
    <div className="container-adopta">
      <h1 className="h1">¿Quieres adoptar?</h1>
      <div className="desc-adopta">
        Debes de saber que es una gran responsabilidad, por ello llena este
        formulario con tus datos y el motivo por el cual quieres adoptar un
        peludito. ¡Nos pondremos en contacto contigo muy pronto!
      </div>
      <div className="formulario-container">
        <form className="formulario-contacto">
          <h2>Formulario de contacto</h2>
          <label htmlFor="nombre">
            Nombre <span className="requerido">(requerido)</span>
          </label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">
            Email <span className="requerido">(requerido)</span>
          </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="asunto">
            Asunto <span className="requerido">(requerido)</span>
          </label>
          <input type="text" id="asunto" name="asunto" required />

          <label htmlFor="mensaje">
            Mensaje <span className="requerido">(requerido)</span>
          </label>
          <textarea id="mensaje" name="mensaje" rows="4" required />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Adopta;
