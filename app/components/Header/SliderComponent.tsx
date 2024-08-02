import React, { useState, useEffect } from 'react';

export const SliderComponent: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) newIndex = 1;
      if (newIndex < 1) newIndex = slides.length;
      return newIndex;
    });
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };

  const slides = [
    { id: 1, text: 'Caption Text' },
    { id: 2, text: 'Caption Two' },
    { id: 3, text: 'Caption Three' },
  ];

  useEffect(() => {
    const showSlides = (n: number) => {
      let i;
      const slidesElements = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
      const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

      if (n > slidesElements.length) setSlideIndex(1);
      if (n < 1) setSlideIndex(slidesElements.length);

      for (i = 0; i < slidesElements.length; i++) {
        slidesElements[i].style.display = 'none';
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }

      if (slidesElements[slideIndex - 1]) {
        slidesElements[slideIndex - 1].style.display = 'block';
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += ' active';
      }
    };

    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div key={slide.id} className="mySlides fade" style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}>
            <div className="numbertext">{`${index + 1} / ${slides.length}`}</div>
            <div className="text">{slide.text}</div>
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default SliderComponent;
