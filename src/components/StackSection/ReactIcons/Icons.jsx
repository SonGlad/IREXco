import { NavLink } from "react-router-dom";
import {ReactComponent as LinkIcon} from "../../../images/svg-icons/link.svg";
import { IconsStyledList } from "./Icons.styled";
import IconReact from "./IconsList/ReactIcon";
import IconRedux from "./IconsList/ReduxIcon";
import IconHTML from "./IconsList/HtmlIcon";
import IconJavaScript from "./IconsList/JavaScriptIcon";
import IconCSS from "./IconsList/CssIcon";
import IconGit from "./IconsList/GitIcon";
import IconGitHub from "./IconsList/GitHubIcon";
import IconVS from "./IconsList/VisualStudioIcon";
import IconNode from "./IconsList/NodeJsIcon";
import IconSASS from "./IconsList/SassIcon";
import IconHandlebars from "./IconsList/HandlebarsIcon";
import IconMongoDB from "./IconsList/MongoDbIcon";
import IconAxios from "./IconsList/AxiosIcon";
import IconPostman from "./IconsList/PostmanIcon";
import IconReactNative from "./IconsList/ReactNativeIcon";
import IconTypeScript from "./IconsList/TypeScriptIcon";
import IconVue from "./IconsList/VueIcon";
import IconNext from "./IconsList/NextjsIcon";
import IconStyled from "./IconsList/StyledIcon";
import IconGraphql from "./IconsList/GraphQlIcon";
import IconFigma from "./IconsList/FigmaIcon";
import IconGodaddy from "./IconsList/GoDaddyIcon";
import IconNetlify from "./IconsList/IconNetlify";
import IconCoronarenderer from "./IconsList/RenderIcon";
import { useEffect, useState, useMemo } from "react";
import { useInView } from 'react-intersection-observer';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import React from "react";


const IconComponents = [
    {"id": "IconHTML", Element: IconHTML, "type": "Frontend"}, 
    {"id": "IconCSS", Element: IconCSS, "type": "Frontend"}, 
    {"id": "IconJavaScript", Element: IconJavaScript, "type": "Frontend, Backend"}, 
    {"id": "IconReact", Element: IconReact, "type": "Frontend"}, 
    {"id": "IconRedux", Element: IconRedux, "type": "Frontend"}, 
    {"id": "IconGit", Element: IconGit, "type": "DevOps"}, 
    {"id": "IconGitHub", Element: IconGitHub, "type": "DevOps"}, 
    {"id": "IconNode", Element: IconNode, "type": "Backend"}, 
    {"id": "IconVS", Element: IconVS, "type": "Dev-Tools"}, 
    {"id": "IconSASS", Element: IconSASS, "type": "Frontend"}, 
    {"id": "IconStyled", Element: IconStyled, "type": "Frontend"}, 
    {"id": "IconHandlebars", Element: IconHandlebars, "type": "Frontend, Backend"}, 
    {"id": "IconMongoDB", Element: IconMongoDB, "type": "Backend"}, 
    {"id": "IconAxios", Element: IconAxios, "type": "Backend, Frontend"}, 
    {"id": "IconPostman", Element: IconPostman, "type": "DevOps"}, 
    {"id": "IconFigma", Element: IconFigma, "type": "Dev-Tools"},
    {"id": "IconNetlify", Element: IconNetlify, "type": "DevOps"},
    {"id": "IconGoDaddy", Element: IconGodaddy, "type": "DevOps"},
    {"id": "IconRender", Element: IconCoronarenderer, "type": "DevOps"},
    {"id": "IconReactNative", Element: IconReactNative, "type": "Frontend, Mobile-Development"}, 
    {"id": "IconTypeScript", Element: IconTypeScript, "type": "Frontend"}, 
    {"id": "IconVue", Element: IconVue, "type": "Frontend"}, 
    {"id": "IconNext", Element: IconNext, "type": "Frontend"},
    {"id": "IconGraphql", Element: IconGraphql, "type": "Backend"},
];

// NONE ACTIVE DESCRIPTION TO BE ADDEDED TO TRANSLATION JSON FILE
    // React Native: "type": "Frontend, "description": "A framework for building cross-platform mobile applications.";
    // TypeScript: "type": "Frontend", "description": "A typed version of JavaScript, used in large projects & React Native for type safety.";
    // Vue: "type": "Frontend", "description": "A framework for building user interfaces.";
    // Next: "type": "Frontend", "description": "A framework for server-rendered and static React applications";
    // GraphQL: "type": "Backend", "description": "A query language for APIs, used as an alternative to REST"



export const Icons = ({profileLanguage, siteLanguage, setStackFilter}) => {
    const { skills } = profileLanguage;
    const { stack } = siteLanguage;
    
    const [components, setComponents] = useState([]);
    const [buttonName, setButtonName] = useState([]);
    const [filterType, setFilterType] = useState('All');
    const [isAnimated, setIsAnimated] = useState(false);

    
   
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const newIconComponents = useMemo(() => {
        return IconComponents.map(({id, type, Element}) => {
            const skill = skills.find((skill) => skill.id === id);
    
            if (!skill) {
                return {};
            }
    
            const {value, link, translatedType, description} = skill;
    
            return {
                id,
                Element: Element,
                value,
                link,
                type,
                translatedType,
                description,
            };
        }).filter(({ value, link }) => value !== undefined && link !== undefined);
    }, [skills]);


    const buttonValue = useMemo(() => {
        return components
            .flatMap(({ id, type, translatedType}, index) => {
                const result = [];

                if (type) {
                    const types = type.split(',').map(t => t.trim());
                    const translatedTypes = translatedType.split(',').map(t => t.trim());
    
                    types.forEach((singleType, typeIndex) => {
                        result.push({
                            id,
                            type: singleType,
                            value: translatedTypes[typeIndex] || translatedType,
                            index
                        });
                    });
                }
    
                return result;
            })
            .filter((component, index, self) =>
                index === self.findIndex((item) => item.type === component.type));
    }, [components]);


    useEffect(() => {
        setComponents(newIconComponents);
    }, [newIconComponents]);


    useEffect(() => {
        if (components) {
            setButtonName(buttonValue);
        }
    }, [buttonValue, components]);


    const handleFilter = (type) => {
        setIsAnimated(true);
        setFilterType(type);
        setTimeout(() => {
            setIsAnimated(false);
        },50);
    };
    

    const filteredComponents = components.filter((item) => {
        const types = item.type ? item.type.split(',').map(t => t.trim()) : [];

        switch (filterType) {
            case 'All':
                return true
            case 'Frontend':
                return types.includes('Frontend');
            case 'Backend':
                return types.includes('Backend');
            case 'DevOps':
                return types.includes('DevOps');
            case 'Dev-Tools':
                return types.includes('Dev-Tools');
            case 'Mobile-Development':
                return types.includes('Mobile-Development');
            default:
                return true;
        }
    });


    useEffect(() => {
        if (typeof setStackFilter === 'function') {
            if (filterType === 'All') {
                setStackFilter(false);
            } else {
                setStackFilter(true);
            }
        }
    }, [filterType, setStackFilter]);
       

    return(
        <IconsStyledList>
            <div className="button-block">
            <ul className="filter-list">
                <li className="filter-item">
                    <button className="filter-button" type="button"
                        onClick={() => handleFilter('All')}
                    >{stack.buttonAll}
                    </button>
                </li>
                {buttonName.map(({id, type, value}) => (
                    <li className="filter-item" key={id}>
                        <button className="filter-button" type="button"
                            onClick={() => handleFilter(type)}
                        >{value}
                        </button>
                    </li>
                ))}
            </ul>
            </div>
            <ul className={`icon-list ${inView ? 'active' : ''} ${isAnimated ? 'animate' : ''}`} ref={ref}>
                {filteredComponents.map(({id, Element, value, link, translatedType, description}, index) => (
                    <li key={`${id}-${filterType}-${index}`} className={`icons-item`} style={{'--i': index + 1}}
                        data-tooltip-id="my-tooltip-data-html"
                        data-tooltip-content={translatedType}
                        data-relevant-attr={description}
                    >
                        <Element className='icons'/>
                        <div className="value-cont">
                            <p className="value-text">{value}</p>
                            <NavLink className='redirect-link' to={link}
                                aria-label="redirect link"
                                target="_blank"
                                rel="noreferrer noopener">
                                <LinkIcon className="redirect-icon" width={24} height={24}/>
                            </NavLink>
                        </div>
                    </li>
                ))}
            </ul>
            <ReactTooltip 
                id='my-tooltip-data-html'
                place="bottom"
                className="tool-tip"
                render={({ content, activeAnchor }) => (
                    <span>
                        <p className="tooltip-title">{stack.category}: {content}</p>
                        <p className="tooltip-text">{activeAnchor?.getAttribute('data-relevant-attr') || 'not set'}</p>
                    </span>
                )}
            />
        </IconsStyledList>
    )
};


