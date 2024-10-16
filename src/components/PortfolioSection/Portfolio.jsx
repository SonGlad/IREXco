import { PortfolioStyled } from "./Portfolio.styled";
import BackgroundImg from "../../images/images/bg_image.jpg";
import {ReactComponent as BookIcon} from "../../images/svg-icons/open-book.svg";
import { useEffect, useState, useMemo, forwardRef } from "react";
import Projects from "../../utils/projects.json";
import { useInView } from 'react-intersection-observer';



export const PortfolioSection = forwardRef(({toPortfolioRef, openPortfolioModal, setPortfolioModalData}, reff) => {
    const [filterType, setFilterType] = useState('All');
    const [portfolioData, setPortfolioData] = useState([]);
    const [buttonName, setButtonName] = useState([]);
    const [isAnimated, setIsAnimated] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    

    useEffect(() => {
        if (Projects) {
            setPortfolioData(Projects);
        }
    },[]);


    const buttonValue = useMemo(() => {
        return portfolioData
            .flatMap(({ id, type }) => {
                if (type) {
                    const types = type.split(',').map(t => t.trim());
                    return types.map(singleType => ({
                        id,
                        type: singleType,
                    }));
                }
                return [];
            })
            .filter((component, index, self) =>
                index === self.findIndex((item) => item.type === component.type));
    }, [portfolioData]);


    useEffect(() => {
        if (portfolioData) {
            setButtonName(buttonValue);
        }
    }, [buttonValue, portfolioData]);


    const handleFilter = (type) => {
        setIsAnimated(true);
        setFilterType(type);
        setTimeout(() => {
            setIsAnimated(false);
        },50);
    };


    const filteredComponents = portfolioData.filter((item) => {
        const types = item.type ? item.type.split(',').map(t => t.trim()) : [];

        switch (filterType) {
            case 'All':
                return true
            case 'Landing':
                return types.includes('Landing');
            case 'Team':
                return types.includes('Team');
            case 'Backend':
                return types.includes('Backend');
            case 'FullStack':
                return types.includes('FullStack');
            case 'CRM':
                return types.includes('CRM');
            default:
                return true;
        }
    }).sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });;



    const openModal = (id) => {
        const itemDetails = portfolioData.find((item) => item.id === id);
        setPortfolioModalData(itemDetails);
        openPortfolioModal();
    };


    return(
        <PortfolioStyled ref={toPortfolioRef}>
            <h1 className="potfolio-title"><span>Our </span>Projects</h1>
            <ul className="filter-list">
                <li className="filter-item">
                    <button className="filter-button indi-animation" type="button" 
                        onClick={() => handleFilter('All')}
                    >All
                    </button>
                </li>
                {buttonName && buttonName.map(({id, type}, index) => (
                    <li className="filter-item" key={index}>
                        <button className="filter-button indi-animation" type="button" 
                            onClick={() => handleFilter(type)}
                        >{type}
                        </button>
                    </li>
                ))}
            </ul>
            <ul className={`cols ${inView ? 'active' : ''} ${isAnimated ? 'animate' : ''}`} ref={ref}>
                {filteredComponents.map(({id, name, coverImage, type, description}, index) => (
                    <li key={`${id}-${filterType}-${index}`} className="col" style={{'--i': index + 1}}>
                        <div className="container">
                            <div className="front" style={{backgroundImage: 
                                `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                                url(${coverImage || BackgroundImg})`}}
                                >
                                <div className="inner">
                                    <p>{name}</p>
                                    <span>{type}</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>{description}</p>
                                    <button type="button" className="open-button" onClick={() => openModal(id)}>
                                        <BookIcon className="icon" width={24} height={24}/>
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
			</ul>
        </PortfolioStyled>
    )
});