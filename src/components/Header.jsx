import './styles/Header.css'
// import Logo from '../assets/logo.png';
import Logo2 from '../assets/artwork.png'

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo2} alt="Milton Ochoa" className="logo" />
        {/* <span className="tagline">Antioquia, Tolima y Chocó</span> */}
      </div>
      <nav className="header-nav">
        <ul className="nav-links">
          <li className="active">INICIO</li>
          <li>NOSOTROS</li>
          <li>PORTAFOLIO</li>
          <li>PLATAFORMAS</li>
          <li>CONTÁCTENOS</li>
          <li>ATENCIÓN AL CLIENTE</li>
          {/* <li>PAGOS</li> */}
        </ul>
        <button className="virtual-store"><a href="https://consultas.miltonochoa.com/consultar_resultados/">CONSULTA TUS RESULTADOS</a></button>
      </nav>
    </header>
  );
}

export default Header;