import { AboutStyled } from "./About.styled";
import { LeftAnimation } from "./LeftAnimation/LeftAnimation";
import { RightAnimation } from "./RightAnimation/RightAnimation";
import IrexLogo from "../../images/images/iReX_logo.png";
import { forwardRef } from "react";
import { useInView } from 'react-intersection-observer';



export const AboutUsSection = forwardRef(({
    toAboutUsRef,    
    profileLanguage,
    siteLanguage,}, 
    reff) => {
    const { about1, about2, about3 } = profileLanguage;
    const { about } = siteLanguage;


    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const { ref: leftRef, inView: inViewLeft } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const { ref: rightRef, inView: inViewRight } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const { ref: contentRef, inView: inViewContent } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


    const parts = about1.split("iReX");

      
    return (
        <AboutStyled ref={toAboutUsRef}>
            <div className="content-div" ref={contentRef}>
                {inViewContent && (
                    <>
                        <h1 className="about-title">{about.sectionTitle1} <span>{about.sectionTitle2}</span></h1>
                        <div className='animation-container'>
                            <div className={`about-cont ${inView ? 'active' : ''}`} ref={ref}>
                                <div className="shadow0">
                                    <div className="about-img-cont">
                                        <img className="about-img" src={IrexLogo} alt="my_picture" width={270} />
                                        <span className="circle-filter"></span>
                                        <span className="circle-spin1"></span>
                                        <span className="circle-spin2"></span>
                                    </div>
                                </div>
                                <div className='shadow-div'>
                                    <p className="about-content-text">{parts[0]}<span>iReX</span>{parts[1]}</p>
                                </div>
                            </div>
                            <div className={`coding-container-left ${inViewLeft ? 'active' : ''}`} ref={leftRef}>
                                <div className='shadow1 order-one'>
                                    <LeftAnimation />
                                </div>
                                <div className='shadow-div order-two'>
                                    <p className="about-content-text">{about2}</p>
                                </div>
                            </div>
                            <div className={`coding-container-right ${inViewRight ? 'active' : ''}`} ref={rightRef}>
                                <div className="shadow2">
                                    <RightAnimation />
                                </div>
                                <div className='shadow-div'>
                                    <p className="about-content-text">{about3}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AboutStyled>
    )
});