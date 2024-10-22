import {Container} from "../Container/Container";
import { StyledHeader } from "./Header.styled";
// import {ReactComponent as LogoSvg} from "../../images/svg-icons/banner.svg";
import {ReactComponent as MobMenuBurger} from "../../images/svg-icons/mobile-menu.svg";
import {ReactComponent as CloseIcon} from "../../images/svg-icons/close.svg";
import { NavLink } from "react-router-dom";
import { LinkList } from "./Link-List/Link-List";
import { useCallback, useEffect, useRef, useState, forwardRef } from "react";
import Logo from "../../images/images/iReX_logo.png"



export const Header = forwardRef(({
    backToTopRef, 
    toAboutUsRef, 
    headerBackground, 
    toStackRef, 
    toPortfolioRef,
    toContactRef,
    langValue,
    setLangValue,
    siteLanguage
}, reff) => {   
    const [mobMenu, setMobMenu] = useState(false);
    const mobileMenu = useRef();
    const langCont = useRef(null);
    const [activeLangCont, setActiveLangCont] = useState(false);

   
    const toggleLangMenu = () => {
        setActiveLangCont(prevState => !prevState);
    };

    const chosenlanguage = (value) => {
        setLangValue(value);
        toggleLangMenu();
    };
    

    const toggleMenuBox = () => {
        setMobMenu(!mobMenu);
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
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    const handleKeyPress = useCallback(event => {
        if (event.key === 'Escape') {
            if(activeLangCont){
                setActiveLangCont(false);
            }
        }
    },[activeLangCont]);


    const onBackdropClick = useCallback(event => {
        event.stopPropagation();
        if(mobileMenu.current && !mobileMenu.current.contains(event.target)){
            setMobMenu(false);
        }
        if (langCont.current && !langCont.current.contains(event.target)) {
            setActiveLangCont(false);
        }
    },[setMobMenu]);


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
                    <NavLink className="logo-link" to='/'
                        onClick={() => 
                            backToTopRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        })}>
                        <img className="header-logo" src={Logo} alt="logo"/>
                        {/* <LogoSvg className="header-logo" width={34} height={34}/> */}
                    </NavLink>
                    <div className="lang-cont" ref={langCont}>
                        <button className="lang-btn" onClick={toggleLangMenu}>{langValue}</button>
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
                    <div className="mobilemenu" ref={mobileMenu} onClick={stopPropagation}>
                        <button type='button'
                            onClick={toggleMenuBox} 
                            className='mob-menu-btn'
                        >
                            {changeIcon()}
                        </button>
                        <div className={`mob-menu ${toggleMobMenuCont()}`}>
                            <nav className="navigation">
                                <LinkList toggleMenuBox={toggleMenuBox}
                                    backToTopRef={backToTopRef}
                                    toAboutUsRef={toAboutUsRef}
                                    toStackRef={toStackRef}
                                    toPortfolioRef={toPortfolioRef}
                                    toContactRef={toContactRef}
                                    siteLanguage={siteLanguage}
                                />
                            </nav>
                        </div>
                    </div>
                    <div className="main-menu">
                        <nav className="navigation">
                            <LinkList
                                backToTopRef={backToTopRef}
                                toAboutUsRef={toAboutUsRef}
                                toStackRef={toStackRef}
                                toPortfolioRef={toPortfolioRef}
                                toContactRef={toContactRef}
                                siteLanguage={siteLanguage}
                            />
                        </nav>
                    </div>
                </div>
            </Container>
        </StyledHeader>
    )
}); 