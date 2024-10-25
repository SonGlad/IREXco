import {Container} from "../Container/Container";
import { StyledHeader } from "./Header.styled";
import {ReactComponent as MobMenuBurger} from "../../images/svg-icons/mobile-menu.svg";
import {ReactComponent as CloseIcon} from "../../images/svg-icons/close.svg";
import { NavLink } from "react-router-dom";
import { LinkList } from "./Link-List/Link-List";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "../../images/images/iReX_logo.png";
import ScrollIntoView from 'react-scroll-into-view';



export const Header = ({headerBackground, langValue, setLangValue, siteLanguage}) => {   
    const [mobMenu, setMobMenu] = useState(false);
    const [activeLangCont, setActiveLangCont] = useState(false);
    const mobileMenu = useRef(null);
    const langCont = useRef(null);

   
    const toggleLangMenu = () => {
        setActiveLangCont(prevState => !prevState);
    };

    const chosenlanguage = (value) => {
        setLangValue(value);
        toggleLangMenu();
    };
    

    const toggleMenuBox = (event) => {
        setMobMenu(prevState => !prevState);
        if (!mobMenu) {
            event.stopPropagation();
        }
    };
  


    const changeIcon = () => {
        if(!mobMenu){
            return <MobMenuBurger className="burger-icon" width={32} height={22}/>
        } else {
            return <CloseIcon className="menu-close-icon" width={22} height={22}/>
        }
    };


    const toggleMobMenuCont = () => {
        return mobMenu ? 'is-active' : '';
    };

    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            if(activeLangCont){
                setActiveLangCont(false);
            }
        }
    },[activeLangCont]);


    const onBackdropClick = useCallback(event => {
        if(mobileMenu.current && !mobileMenu.current.contains(event.target)){                        
            setMobMenu(false);
        }
        if(langCont.current && !langCont.current.contains(event.target)) {
            setActiveLangCont(false);
        }
    },[setMobMenu, setActiveLangCont]);


    useEffect(() => {
        document.addEventListener('click', onBackdropClick);
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('click', onBackdropClick);
            document.removeEventListener('keydown', handleKeyPress);
        }
    },[handleKeyPress, onBackdropClick]);



    return(
        <StyledHeader $headerBackground={headerBackground}>
            <Container>
                <div className='header-container'>
                    <NavLink className="logo-link">
                        <ScrollIntoView selector="#hero">
                            <img className="header-logo" src={Logo} alt="logo"/>    
                        </ScrollIntoView>
                    </NavLink>
                    <div className="lang-cont" ref={langCont}>
                        <button className="lang-btn" type="button" 
                            aria-label="Language Button" 
                            onClick={toggleLangMenu}
                            >{langValue}
                        </button>
                        <div className={`chose-lang-cont ${activeLangCont ? 'open' : ''}`}>
                            <ul className="lang-list">
                                <li className="lang-item" onClick={() => chosenlanguage('UA')}>
                                    <p className="lang-text">UA</p>
                                </li>
                                <li className="lang-item"  onClick={() => chosenlanguage('EN')}>
                                    <p className="lang-text">EN</p>
                                </li>
                                <li className="lang-item" onClick={() => chosenlanguage('RU')}>
                                    <p className="lang-text">RU</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobilemenu" ref={mobileMenu}>
                        <button type='button'
                            onClick={toggleMenuBox} 
                            className='mob-menu-btn'
                            aria-label="Mobile Menu"
                        >
                            {changeIcon()}
                        </button>
                        <div className={`mob-menu ${toggleMobMenuCont()}`}>
                            <nav className="navigation">
                                <LinkList 
                                    toggleMenuBox={toggleMenuBox}
                                    siteLanguage={siteLanguage}
                                />
                            </nav>
                        </div>
                    </div>
                    <div className="main-menu">
                        <nav className="navigation">
                            <LinkList
                                siteLanguage={siteLanguage}
                            />
                        </nav>
                    </div>
                </div>
            </Container>
        </StyledHeader>
    )
}; 