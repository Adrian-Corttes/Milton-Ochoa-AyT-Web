import { useState, useEffect } from 'react';
import './styles/Slider.css';

// Importar las imágenes
import image1 from '../assets/Banner-Felicitacion-Ranking-2024-AAMO.jpg';
import image2 from '../assets/Banner-Resultados-Saber-2024.jpg';
import image3 from '../assets/Banner-Vacacional-CalB-AAMO-3.jpg';

const images = [image1, image2, image3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar automáticamente el banner después de 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 6000); // Cambia cada 3000 ms (3 segundos)
    
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
      }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={goToPrevious}>
        ❮
      </button>
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <button className="slider-button next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Slider;
