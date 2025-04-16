import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const images = [
    { src: '/cultivate.png', alt: 'Cultivate' },
    { src: '/UCS.png', alt: 'U Career Success' },
    { src: '/challenge.png', alt: 'Social Impact Challenge' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };


  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  useEffect(() => {
    const introPara = document.querySelector('.intro-para');
    const skillsSection = document.querySelector('.skills-section');
  
    const handleScroll = () => {
      if (!introPara) return;
  
      const rect = introPara.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight - 100) {
        introPara.style.opacity = '1';
        introPara.style.transform = 'translateY(0)';
      } else {
        introPara.style.opacity = '0';
        introPara.style.transform = 'translateY(40px)';
      }

      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
          skillsSection.style.opacity = '1';
          skillsSection.style.transform = 'translateY(0)';
        } else {
          skillsSection.style.opacity = '0';
          skillsSection.style.transform = 'translateY(40px)';
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className='home-page'>
      <div className='introduction'>
        <p className='intro-hook'> 
          사람을 이해하고,<br />
          기술로 연결하는 <br />
          <span className="hologram-underline">프론트엔드 & UX/UI</span><br />
          디자이너 </p>
        <div className='profile-section'>
        <img className='profile-photo'src='/profile-photo.jpeg'></img>
        <p className='contact-info'><i>최인선<br />
          insun0500@gmail.com</i></p>
          </div>
        </div>

        <div className='intro-para'>
          <h1 className='question'>WHY UX/UI & Frontend?</h1>
            <p className='quotation'>심리학과 정보시스템을 함께 공부하며,<br /> 사용자의 관점에서 기술을 바라보는 시선을 길러왔습니다. <br />
            직관적인 UI/UX를 설계하고 구현하는 과정을 통해,<br /> 사람들에게 더 쉬운 기술 경험을 전하는 개발자가 되고 싶습니다. <br />
            사용자가 가장 편리한 경험을 할 수 있도록 돕는 인터페이스를 만드는 것이 제 목표입니다.</p>
        </div>

      <div className='skills-section'>
      <h2 className='section-title'>SKILLS</h2>
        <div className='icon-section'>
        <div className='HTML'>
          <img src='/HTML.png'></img>
          <p>HTML</p>
        </div>

        <div className='CSS'>
          <img src='/css.png'></img>
          <p>CSS</p>
        </div>

        <div className='JavaScript'>
          <img src='/javascript.png'></img>
          <p>JavaScript</p>
        </div>
        
        <div className='TypeScript'>
          <img src='/typescript.png'></img>
          <p>TypeScript</p>
        </div>

        <div className='Figma'>
          <img src='/Figma.png'></img>
          <p>Figma</p>
        </div>

        <div className='Adobe'>
          <img src='/Adobe.png'></img>
          <p>Adobe Express</p>
        </div>
      </div>
      </div>

      <h1 className='project-title'>Projects</h1>
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={goToPrevious}>
          &#8249;
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="carousel-image"
        />
        <button className="arrow right-arrow" onClick={goToNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default HomePage;
