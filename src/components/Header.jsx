import "./styles/Header.css";
import Logo from "../assets/artwork.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Milton Ochoa" className="logo" />
      </div>
      <nav className="header-nav">
        <ul className="nav-links">
          <li>
            <a href="#app">INICIO</a>
          </li>
          <li>
            <a
              href="https://miltonochoa.com.co/web/index.php/nosotros/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NOSOTROS
            </a>
          </li>
          <li>
            <a
              href="https://miltonochoa.com.co/web/index.php/portfolio-two/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PORTAFOLIO
            </a>
          </li>
          <li className="dropdown">
            PLATAFORMAS
            <ul className="dropdown-menu">
              <li>
                <a
                  href="https://miltonochoa.com.co/web/index.php/aplicaciones-virtuales/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APLICACIONES VIRTUALES
                </a>
              </li>
              <li>
                <a
                  href="https://miltonochoa.synology.me:96/Milton_ensenna/index_es.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MILTON ENSEÑA
                </a>
              </li>
              <li>
                <a
                  href="https://sermas.enlazaa.com/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YO PUEDO SER +
                </a>
              </li>
              <li>
                <a
                  href="https://aulavirtual.miltonochoa.com/moodle/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ENTRENAMIENTO ESTUDIANTES
                </a>
              </li>
              <li>
                <a
                  href="https://test.miltonochoa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ENTRENAMIENTO DOCENTE
                </a>
              </li>
              <li>
                <a
                  href="https://miltonochoa.com.co/web/index.php/herramienta-iceberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CONSULTORÍAS PARA COLEGIOS
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://atencionalcliente.miltonochoa.com/nuestras_sedes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTÁCTENOS
            </a>
          </li>
          <li>
            <a href="#footer">ATENCIÓN AL CLIENTE</a>
          </li>
        </ul>
        <button className="virtual-store">
          <a href="https://consultas.miltonochoa.com/consultar_resultados/">
            CONSULTA TUS RESULTADOS
          </a>
        </button>
      </nav>
    </header>
  );
}

export default Header;
