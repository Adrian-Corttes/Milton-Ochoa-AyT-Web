import "./styles/footer.css";
import Footer_img from "../assets/Milton-Ochoa@4x.png";
import Location_icon from "../assets/location-icon.svg";
import Ceinfes_img from "../assets/ceinfes-16.png";
import KPData_img from "../assets/kp-data.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Footer_img} alt="Milton Ochoa Logo" />
          <div className="footer-partners">
            <h4>Empresas Aliadas</h4>
            <div className="partners-logos">
              <img src={Ceinfes_img} alt="Logo Ceinfes" />
              <img src={KPData_img} alt="Logo KPData" />
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <p>Calle 47D N° 81 - 35 , Sector Floresta, Medellín, Antioquia.</p>
          <p>Cra 4 bis 35-05, Barrio Cadiz, Ibagué, Tolima</p>
          <p>
            <strong>Canales de atención:</strong>
          </p>
          <p>
            <strong>Línea WhatsApp:</strong> 313 799 2069
          </p>
          <p>
            <strong>Correo:</strong>{" "}
            soporteoperativo.ayt@miltonochoacolombia.com
          </p>
          <p>
            <strong>Horario de atención:</strong>
          </p>
          <p>Lunes a viernes: 7:00 a.m. – 5:00 p.m.</p>
          <p>Sábados: 7:00 a.m. – 12:00 m.</p>
        </div>
        <div className="footer-location">
          <a
            href="https://www.google.com/maps/place/Milton+Ochoa+-+Expertos+en+Evaluaci%C3%B3n,+regional+Antioquia/@6.2586798,-75.6014827,17z/data=!3m1!4b1!4m6!3m5!1s0x8e442972bde6d285:0x1702246b4505e4f7!8m2!3d6.2586745!4d-75.5989078!16s%2Fg%2F11clydxtt8?hl=es&entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Location_icon} alt="Ubicación" />
          </a>
          <span>Ver ubicación</span>
        </div>
      </div>
      <span>
        Copyright © 2025 Milton Ochoa, Antioquia y Tolima - Expertos en
        Evaluación, miltonochoa.com.co
      </span>
    </footer>
  );
};

export default Footer;
