import { HeroStyled } from "./Hero.styled";
import { ComputerCanvas } from "./ComputerCanvas";
import Typewriter from 'typewriter-effect';
import {ReactComponent as FingerIcon} from "../../images/svg-icons/finger.svg";
import React, { useState, startTransition, useEffect } from 'react';
import { Loading } from '../CustomLoaders/CustomLoaders';
import {ReactComponent as Construction} from "../../images/svg-icons/construction.svg";
import {ReactComponent as TemplateIcon} from "../../images/svg-icons/template.svg";
import {ReactComponent as UserIcon} from "../../images/svg-icons/user.svg";
import IconHandsBound from "../IconList/HandsBound";
import { useInView } from 'react-intersection-observer';
import ScrollIntoView from 'react-scroll-into-view';
import { forwardRef } from "react";



export const Hero = forwardRef(({forHeader, profileLanguage, siteLanguage, langValue, isResizeObserver}, reff) => {
    const { name1, name2, text1, text2} = profileLanguage;
    const { hero } = siteLanguage;
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const [sections, setSections] = useState(null);
   

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
 

    useEffect(() => {
        setTimeout(() => {
            startTransition(() => {
                setIsModelLoaded(true);
            });
        },1000)
    })


    const TypeWriterFunction = () => {
        return <Typewriter
                options={{
                strings: [`${text1}`, `${text2}`],
                autoStart: true,
                loop: true,
                pauseFor: 2500,
                cursorClassName: 'Typewriter__cursor',
            }}
        />
    };

    useEffect(() => {
        if (isResizeObserver) {
            const resizeObserver = new ResizeObserver(() => {
            });
        
            const sectionIds = ['#AboutSection', '#StackSection', '#PortfolioSection', '#ContactSection'];
        
            sectionIds.forEach(id => {
              const section = document.querySelector(id);
              if (section) {
                resizeObserver.observe(section);
              }
            });
            setSections(sectionIds);
            
            return () => resizeObserver.disconnect();
        }
    },[isResizeObserver, langValue]);
    
    

    return (
        <HeroStyled>
            <div className={`hero-for-animation ${inView ? 'active' : ''}`} ref={ref}>
                <div className="title-contaier">
                    <h1 className="title" ref={forHeader}><span>{name1}</span><br/>{name2}</h1>
                    <div className="title-below-cont">
                        <h2 className="title-below">{TypeWriterFunction()}</h2>
                    </div>
                </div>
                <div className="canvas-container">
                    <div className="left-redirect-cont">
                        <ul className="redirext-list-left">
                            <li className="redirect-item">
                                <ScrollIntoView selector="#ContactSection" className="redirect-link redirect" style={{'--i': 1}}>
                                    <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                    <span>{hero.navMenu4}</span>
                                </ScrollIntoView>
                            </li>
                            <li className="redirect-item">
                                <ScrollIntoView selector="#StackSection" className="redirect-link redirect" style={{'--i': 4}}>
                                    <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                    <span>{hero.navMenu2}</span>
                                </ScrollIntoView>
                            </li>
                        </ul>
                    </div>
                    <div className="left-redirect-cont">
                    <ul className="redirext-list-right">
                            <li className="redirect-item">
                                <ScrollIntoView selector="#AboutSection" className="redirect-link redirect" style={{'--i': 3}}>
                                    <span>{hero.navMenu1}</span>
                                    <FingerIcon className="redirect-icon redirect-icon-rotate" width={24} height={24}/>    
                                </ScrollIntoView>
                            </li>
                            <li className="redirect-item">
                                <ScrollIntoView selector="#PortfolioSection" className="redirect-link redirect"style={{'--i': 2}}>
                                    <span>{hero.navMenu3}</span>
                                    <FingerIcon className="redirect-icon redirect-icon-rotate" width={24} height={24}/>    
                                </ScrollIntoView>
                            </li>
                        </ul>
                    </div>
                    {isModelLoaded ? 
                    (
                        <ComputerCanvas/>
                    ) : (
                        <Loading/>
                    )}
                </div>
                <div className="redirect-cont-small-screen">
                    <ul className="redirext-list">
                        {sections && sections.map((id, index) => (
                            <li className="redirect-item" key={id}>
                                <ScrollIntoView selector={id} className="redirect-link redirect" style={{'--i': index + 1}}>
                                    <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                    <span>{hero[`navMenu${index + 1}`]}</span>
                                </ScrollIntoView>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='description-cont'>
                    <ul className="description-list">
                        <li className="description-item">
                            <TemplateIcon className="description-icon" width={24} height={24}/>
                            <h3 className="description-title">{hero.descriptionTitle1}</h3>
                            <p className="description-text">{hero.description1}</p>
                        </li>
                        <li className="description-item">
                            <Construction className="description-icon" width={24} height={24}/>
                            <h3 className="description-title">{hero.descriptionTitle2}</h3>
                            <p className="description-text">{hero.description2}</p>
                        </li>
                        <li className="description-item">
                            <div className="icon-cont">
                                <UserIcon className="description-icon-user" width={24} height={24}/>
                                <IconHandsBound className="description-icon-hands" width={24} height={24}/>
                            </div>
                            <h3 className="description-title">{hero.descriptionTitle3}</h3>
                            <p className="description-text">{hero.description3}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </HeroStyled>
    );
});