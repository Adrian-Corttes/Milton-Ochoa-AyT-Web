import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-section">
          <h3>Milton Ochoa</h3>
          <p>Expertos en Evaluación</p>
          <p>Calle 47D N° 81 - 35</p>
          <p>Sector Floresta, Medellín, Antioquia</p>
          <p>Cra 4 bis 35-05</p>
          <p>Barrio Cadiz, Ibagué, Tolima</p>
          <h4>Canales de atención</h4>
          <p><strong>WhatsApp:</strong>3137992069</p>
          <p><strong>Correo:</strong> soporteoperativo.ayt@miltonochoacolombia.com</p>
          <p><strong>Horario:</strong> Lunes a viernes 7:00 a.m. - 5:00 p.m.</p>
        </div>

        <div className="links-section">
          <h4>Enlaces</h4>
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Portafolio</li>
            <li>Noticias</li>
            <li>Plataformas</li>
            <li>Contáctenos</li>
            <li>Atención al cliente</li>
          </ul>
          <h4>Síguenos en:</h4>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
