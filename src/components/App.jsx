import { useEffect, useRef, useState } from "react";
import { Header } from "./Header/Header";
import { ParticlesComponent }from "./particles/particles";
import { HeroSection, AboutSection, Section } from "./Section/Section";
import { Container } from "./Container/Container";
import { Hero } from "./HeroSection/Hero";
import { AboutUsSection } from "./AboutSection/About";
import { StackSection } from "./StackSection/StackSection";
import { PortfolioSection } from "./PortfolioSection/Portfolio";
import { Contacts } from "./ContactSection/Contacts";
import { Modal } from "./Modal/Modal";
import { useInView } from 'react-intersection-observer';



export const App= () => {
  const [headerBackground, setHeaderBackground] = useState(false);
  const backToTopRef = useRef(null);
  const toAboutUsRef = useRef(null);
  const toStackRef = useRef(null);
  const toPortfolioRef = useRef(null);
  const toContactRef = useRef(null);
  const [isPortfolioModal, setPortfolioModal] = useState(false);
  const [isContactModal, setContactModal] = useState(false);
  const [portfolioModalData, setPortfolioModalData] = useState(null);
  const [isSuccess, setSuccess] = useState(true);
  const { ref, inView } = useInView({
    threshold: 1,
  });
 


  const openPortfolioModal = () => {
    if (isContactModal) {
      setContactModal(false);
    }
    setPortfolioModal(true);
  };
  const closePortfolioModal = () => {
    setPortfolioModal(false);
  };
  const openContactModal = () => {
    if (isPortfolioModal) {
      setPortfolioModal(false);
    }
    setContactModal(true);
  };
  const closeContactModal = () => {
    setContactModal(false);
  };
  
 


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
        toStackRef={toStackRef}
        toPortfolioRef={toPortfolioRef}
        toContactRef={toContactRef}
      />
      <HeroSection>
        <Container>
          <Hero
            forHeader={ref}
            backToTopRef={backToTopRef}
            toAboutUsRef={toAboutUsRef}
            toStackRef={toStackRef}
            toPortfolioRef={toPortfolioRef}
            toContactRef={toContactRef}
          /> 
        </Container>
      </HeroSection>
      <AboutSection >
        <Container>
          <AboutUsSection toAboutUsRef={toAboutUsRef}/>
        </Container>
      </AboutSection>
      <Section>
        <Container>
          <StackSection toStackRef={toStackRef}/>
        </Container>
      </Section>
      <Section>
        <Container>
          <PortfolioSection 
            toPortfolioRef={toPortfolioRef}
            openPortfolioModal={openPortfolioModal}
            setPortfolioModalData={setPortfolioModalData}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Contacts
            toContactRef={toContactRef}
            openContactModal={openContactModal}
            setSuccess={setSuccess}
          />
        </Container>
      </Section>
      {(isPortfolioModal || isContactModal) && 
        <Modal
          isPortfolioModal={isPortfolioModal}
          isContactModal={isContactModal}
          closePortfolioModal={closePortfolioModal}
          closeContactModal={closeContactModal}
          portfolioModalData={portfolioModalData}
          isSuccess={isSuccess}
        />
      }
    </>
  );
};
