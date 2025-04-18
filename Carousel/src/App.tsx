import { useState, useEffect, useCallback } from "react";
import { images } from "./constants/images";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const lastSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section>
      <div className="slider">
        <div className="slider__wrapper">
          <div
            className="slider__track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div className="slider__slide" key={index}>
                <img src={src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className="slide__prev" onClick={lastSlide}>
          &#10094;
        </button>
        <button className="slide__next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default App;
