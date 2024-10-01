// import { Navigate, Route, Routes, useLocation} from "react-router-dom";
// import { lazy } from "react";
// import { Modal } from "./Modal/Modal";
// import { useModal } from "../hooks/useModal";
// import { useData } from "./hooks/useData";
import { useEffect, useRef, useState } from "react";
import { Header } from "./Header/Header";
import { ParticlesComponent }from "./particles/particles";
import { HeroSection, AboutSection } from "./Section/Section";
import { Container } from "./Container/Container";
import { Hero } from "./HeroSection/Hero";
import { AboutUsSection } from "./AboutSection/About";
import { useInView } from 'react-intersection-observer';



export const App= () => {
  // const {isPortfolioModalOpen, isContactModalOpen} = useModal();
  const [headerBackground, setHeaderBackground] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const backToTopRef = useRef(null);
  const toAboutUsRef = useRef(null);
  


  useEffect(() => {
    if (inView && headerBackground) {
      setHeaderBackground(false);
    } else if (!inView && !headerBackground) {
      setHeaderBackground(true);
    }
  }, [inView, headerBackground]);

 
  

  return (
    <>
      <ParticlesComponent id='particles'/>
      <Header 
        backToTopRef={backToTopRef}
        toAboutUsRef={toAboutUsRef}
        headerBackground={headerBackground}
      />
      <HeroSection>
        <Container>
          <Hero
            forHeader={ref}
            backToTopRef={backToTopRef}
            toAboutUsRef={toAboutUsRef}
          /> 
        </Container>
      </HeroSection>
      <AboutSection >
        <Container>
          <AboutUsSection toAboutUsRef={toAboutUsRef}/>
        </Container>
      </AboutSection>
      {/* {(isPortfolioModalOpen || isContactModalOpen) && <Modal/>} */}
    </>
  );
};
