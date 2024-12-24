import { useEffect, useState, useRef } from "react";
import { Header } from "./Header/Header";
import { ParticlesComponent }from "./particles/particles";
import { HeroSection, AboutSection, StackSectionS, PortfolioSectionS, ContactSection } from "./Section/Section";
import { Container } from "./Container/Container";
import { Hero } from "./HeroSection/Hero";
import { AboutUsSection } from "./AboutSection/About";
import { StackSection } from "./StackSection/StackSection";
import { PortfolioSection } from "./PortfolioSection/Portfolio";
import { Contacts } from "./ContactSection/Contacts";
import { Modal } from "./Modal/Modal";
import { Footer } from "./Footer/Footer";
import { FormLoading } from "./CustomLoaders/CustomLoaders";
import { useInView } from 'react-intersection-observer';
import useGeoLocation from "react-ipgeolocation";
import SiteEN from "../utils/siteEn.json";
import SiteUa from "../utils/siteUa.json";
import SiteRu from "../utils/siteRu.json";
import ProfileEn from "../utils/profileEn.json";
import ProfileUa from "../utils/profileUa.json";
import ProfileRu from "../utils/profileRu.json";
import ProjectsEn from "../utils/projectsEn.json";
import ProjectsUa from "../utils/projectsUa.json";
import ProjectsRu from "../utils/projectsRu.json";
import Facebook1 from "../tracking/Facebook1";
import Facebook2 from "../tracking/Facebook2";



export const App= () => {
  const [headerBackground, setHeaderBackground] = useState(false);
  const [isPortfolioModal, setPortfolioModal] = useState(false);
  const [isContactModal, setContactModal] = useState(false);
  const [portfolioModalData, setPortfolioModalData] = useState(null);
  const [isSuccess, setSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const location = useGeoLocation();
  const country = location.country ? location.country : "";
  const [langValue, setLangValue] = useState('UA');
  const [siteLanguage, setSiteLanguage] = useState(SiteUa);
  const [profileLanguage, setProfileLanguage] = useState(ProfileUa);
  const [projectLanguage, setProjectLanguage] = useState(ProjectsUa);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isParticles, setParticles] = useState(false);
  const [isResizeObserver, setResizeObserver] = useState(false);
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const stackSectionRef = useRef(null);
  const portfolioSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const [stackFilter, setStackFilter] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState(false);

 

  useEffect(() => {
    if (country === 'UA') {
      setLangValue('UA');
    } else {
      setLangValue('EN');
    }
  },[country]);
  

  useEffect(() => {
    if (langValue === "UA") {
      document.documentElement.lang = 'uk'
      setSiteLanguage(SiteUa);
      setProfileLanguage(ProfileUa);
      setProjectLanguage(ProjectsUa);
    } else if (langValue === "RU") {
      document.documentElement.lang = 'ru'
      setSiteLanguage(SiteRu);
      setProfileLanguage(ProfileRu);
      setProjectLanguage(ProjectsRu);
    } else {
      document.documentElement.lang = 'en'
      setSiteLanguage(SiteEN);
      setProfileLanguage(ProfileEn);
      setProjectLanguage(ProjectsEn);
    }
  },[langValue]);


  useEffect(() => {
    window.scrollTo(0, 0);
  },[langValue]);



  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);


  useEffect(() => {
    if (windowWidth >= 1200) {
      setParticles(true);
    } else {
      setParticles(false);
    }
  },[windowWidth])

  useEffect(() => {
    if (windowWidth < 768) {
      setResizeObserver(true);
    } else {
      setResizeObserver(false);
    }
  },[windowWidth])
  
 
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
      <Facebook1/>
      {isContactModal && <Facebook2/>}
      {isLoading && <FormLoading/>}
      {isParticles && <ParticlesComponent id='particles'/>}
      <Header 
        headerBackground={headerBackground}
        langValue={langValue}
        setLangValue={setLangValue}
        siteLanguage={siteLanguage}
        isResizeObserver={isResizeObserver}
        heroSectionRef={heroSectionRef}
        aboutSectionRef={aboutSectionRef}
        stackSectionRef={stackSectionRef}
        portfolioSectionRef={portfolioSectionRef}
        contactSectionRef={contactSectionRef}
        stackFilter={stackFilter}
        portfolioFilter={portfolioFilter}

      />
      <HeroSection 
        propsId={'HeroSection'}
        heroSectionRef={heroSectionRef}
      >
        <Container>
          <Hero
            forHeader={ref}
            profileLanguage={profileLanguage}
            siteLanguage={siteLanguage}
            langValue={langValue}
            isResizeObserver={isResizeObserver}
          /> 
        </Container>
      </HeroSection>
      <AboutSection 
        propsId={'AboutSection'}
        aboutSectionRef={aboutSectionRef}
      >
        <Container>
          <AboutUsSection 
            profileLanguage={profileLanguage}
            siteLanguage={siteLanguage}
            isResizeObserver={isResizeObserver}
          />
        </Container>
      </AboutSection>
      <StackSectionS 
        propsId={'StackSection'}
        stackSectionRef={stackSectionRef}
      >
        <Container>
          <StackSection 
            profileLanguage={profileLanguage}
            siteLanguage={siteLanguage}
            projectLanguage={projectLanguage}
            isResizeObserver={isResizeObserver}
            setStackFilter={setStackFilter}
          />
        </Container>
      </StackSectionS>
      <PortfolioSectionS 
        propsId={'PortfolioSection'}
        portfolioSectionRef={portfolioSectionRef}
      >
        <Container>
          <PortfolioSection 
            openPortfolioModal={openPortfolioModal}
            setPortfolioModalData={setPortfolioModalData}
            siteLanguage={siteLanguage}
            projectLanguage={projectLanguage}
            isResizeObserver={isResizeObserver}
            setPortfolioFilter={setPortfolioFilter}
          />
        </Container>
      </PortfolioSectionS>
      <ContactSection 
        propsId={'ContactSection'}
        contactSectionRef={contactSectionRef}
      >
        <Container>
          <Contacts
            openContactModal={openContactModal}
            setSuccess={setSuccess}
            setIsLoading={setIsLoading}
            siteLanguage={siteLanguage}
            profileLanguage={profileLanguage}
          />
        </Container>
      </ContactSection>
      <Footer 
        siteLanguage={siteLanguage}
        profileLanguage={profileLanguage}
      />
      {(isPortfolioModal || isContactModal) && 
        <Modal
          isPortfolioModal={isPortfolioModal}
          isContactModal={isContactModal}
          closePortfolioModal={closePortfolioModal}
          closeContactModal={closeContactModal}
          portfolioModalData={portfolioModalData}
          isSuccess={isSuccess}
          siteLanguage={siteLanguage}
        />
      }
    </>
  );
};
