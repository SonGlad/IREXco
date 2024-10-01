import { HeroStyled } from "./Hero.styled";
import { forwardRef } from "react";
import { ComputerCanvas } from "./ComputerCanvas";
import Profile from "../../utils/profile.json";
import { NavLink } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import {ReactComponent as FingerIcon} from "../../images/svg-icons/finger.svg";
import React, { useState, startTransition, useEffect } from 'react';
import { Loading } from '../CustomLoaders/CustomLoaders';
import {ReactComponent as Construction} from "../../images/svg-icons/construction.svg";
import {ReactComponent as TemplateIcon} from "../../images/svg-icons/template.svg";
import {ReactComponent as UserIcon} from "../../images/svg-icons/user.svg";
import IconHandsBound from "../IconList/HandsBound";
import { useInView } from 'react-intersection-observer';




export const Hero = forwardRef(({ backToTopRef, toAboutUsRef, forHeader }, reff) => {
    const { name1, name2, text1, text2} = Profile;
    const [isModelLoaded, setIsModelLoaded] = useState(false);


    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
 

    useEffect(() => {
        setTimeout(() => {
            startTransition(() => {
                setIsModelLoaded(true);
            });
        }, 1000)
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
    

    return (
        <HeroStyled ref={backToTopRef}>
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
                                <NavLink className="redirect-link redirect" to='/portfolio' style={{'--i': 1}}>
                                    <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                    <span>Contact Us</span>
                                </NavLink>
                            </li>
                            <li className="redirect-item">
                                <NavLink className="redirect-link redirect" to='/skills' style={{'--i': 4}}>
                                    <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                    <span>Our Skills</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="left-redirect-cont">
                    <ul className="redirext-list-right">
                            <li className="redirect-item">
                                <NavLink className="redirect-link redirect" style={{'--i': 3}}
                                    onClick={() => {
                                        toAboutUsRef.current.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                        });
                                    }}
                                >
                                    <span>About Us</span>
                                    <FingerIcon className="redirect-icon redirect-icon-rotate" width={24} height={24}/>    
                                </NavLink>
                            </li>
                            <li className="redirect-item">
                                <NavLink className="redirect-link redirect" to='/portfolio' style={{'--i': 2}}>
                                    <span>Portfolio</span>
                                    <FingerIcon className="redirect-icon redirect-icon-rotate" width={24} height={24}/>    
                                </NavLink>
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
                        <li className="redirect-item">
                            <NavLink className="redirect-link redirect" to='/portfolio' style={{'--i': 1}}>
                                <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                <span>Contact Us</span>
                            </NavLink>
                        </li>
                        <li className="redirect-item">
                            <NavLink className="redirect-link redirect" to='/skills' style={{'--i': 2}}>
                                <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                <span>Our Skills</span>
                            </NavLink>
                        </li>
                        <li className="redirect-item">
                            <NavLink className="redirect-link redirect" to='/about' style={{'--i': 3}}>
                                <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                <span>About Us</span>
                            </NavLink>
                        </li>
                        <li className="redirect-item">
                            <NavLink className="redirect-link redirect" to='/portfolio' style={{'--i': 4}}>
                                <FingerIcon className="redirect-icon" width={24} height={24}/>    
                                <span>Portfolio</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='description-cont'>
                    <ul className="description-list">
                        <li className="description-item">
                            <TemplateIcon className="description-icon" width={24} height={24}/>
                            <h3 className="description-title">No templates!</h3>
                            <p className="description-text">Each website design is created from scratch, we design a site that solves the specific tasks of your business.</p>
                        </li>
                        <li className="description-item">
                            <Construction className="description-icon" width={24} height={24}/>
                            <h3 className="description-title">No website builders!</h3>
                            <p className="description-text">Only modern development solutions for achieving maximum optimization and reliability.</p>
                        </li>
                        <li className="description-item">
                            <div className="icon-cont">
                                <UserIcon className="description-icon-user" width={24} height={24}/>
                                <IconHandsBound className="description-icon-hands" width={24} height={24}/>
                            </div>
                            <h3 className="description-title">24/7 support!</h3>
                            <p className="description-text">We provide continuous technical support so that you can always count on us.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </HeroStyled>
    );
});