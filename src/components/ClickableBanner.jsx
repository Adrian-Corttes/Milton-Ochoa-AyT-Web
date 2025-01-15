import "./styles/ClickableBanner.css";
import Banner from "../assets/cursos-preicfes-Milton-Ochoa-2025-1024x214.png";

const ClickableBanner = () => {
  return (
    <div className="banner-container">
      <a
        href="https://preicfes.miltonochoa.com.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Banner}
          alt="Banner promocional de cursos preICFES Milton Ochoa 2025"
          onError={(e) => {
            e.target.src = "/path/to/backup-image.png";
          }}
        />
      </a>
    </div>
  );
};

export default ClickableBanner;
