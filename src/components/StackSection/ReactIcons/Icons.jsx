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
import Profile from "../../../utils/profile.json";
import { useEffect, useState, useMemo } from "react";
import { useInView } from 'react-intersection-observer';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import React from "react";


const IconComponents = [
    {"id": "IconHTML", Element: IconHTML, "type": "Frontend", "description": "The main foundation for creating web pages"}, 
    {"id": "IconCSS", Element: IconCSS, "type": "Frontend", "description": "Styling for web pages"}, 
    {"id": "IconJavaScript", Element: IconJavaScript, "type": "Frontend", "description": "The main language for frontend development"}, 
    {"id": "IconReact", Element: IconReact, "type": "Frontend", "description": "A library for building user interfaces"}, 
    {"id": "IconRedux", Element: IconRedux, "type": "Frontend", "description": "State management for React applications"}, 
    {"id": "IconGit", Element: IconGit, "type": "DevOps", "description": "A version control system for tracking changes in code"}, 
    {"id": "IconGitHub", Element: IconGitHub, "type": "DevOps", "description": "A platform for hosting and managing repositories."}, 
    {"id": "IconNode", Element: IconNode, "type": "Backend", "description": "A runtime for executing JavaScript on the server side"}, 
    {"id": "IconVS", Element: IconVS, "type": "Dev-Tools", "description": "A popular code editor for web developers"}, 
    {"id": "IconSASS", Element: IconSASS, "type": "Frontend", "description": "A CSS preprocessor for enhanced styling"}, 
    {"id": "IconStyled", Element: IconStyled, "type": "Frontend", "description": "A library for styled components in React"}, 
    {"id": "IconHandlebars", Element: IconHandlebars, "type": "Frontend, Backend", "description": "A template engine for server-side & front-end rendering"}, 
    {"id": "IconMongoDB", Element: IconMongoDB, "type": "Backend", "description": "A document-oriented NoSQL database"}, 
    {"id": "IconAxios", Element: IconAxios, "type": "Backend", "description": "An HTTP client for API interaction"}, 
    {"id": "IconPostman", Element: IconPostman, "type": "DevOps", "description": "A tool for testing and interacting with APIs"}, 
    {"id": "IconFigma", Element: IconFigma, "type": "Dev-Tools", "description": "A tool for creating designs and prototypes"},
    {"id": "IconNetlify", Element: IconNetlify, "type": "DevOps", "description": "A platform for automatically deploying static sites"},
    {"id": "IconGoDaddy", Element: IconGodaddy, "type": "DevOps", "description": "A provider of domains and hosting services"},
    {"id": "IconRender", Element: IconCoronarenderer, "type": "DevOps", "description": "A cloud platform for hosting and automatic application deployment"},
    {"id": "IconReactNative", Element: IconReactNative, "type": "Frontend, Mobile-Development", "description": "A framework for building cross-platform mobile applications"}, 
    {"id": "IconTypeScript", Element: IconTypeScript, "type": "Frontend", "description": "A typed version of JavaScript, used in large projects & React Native for type safety"}, 
    {"id": "IconVue", Element: IconVue, "type": "Frontend", "description": "A framework for building user interfaces"}, 
    {"id": "IconNext", Element: IconNext, "type": "Frontend", "description": "A framework for server-rendered and static React applications"},
    {"id": "IconGraphql", Element: IconGraphql, "type": "Backend", "description": "A query language for APIs, used as an alternative to REST"},
];


export const Icons = () => {
    const {skills} = Profile;
    const [components, setComponents] = useState([]);
    const [buttonName, setButtonName] = useState([]);
    const [filterType, setFilterType] = useState('All');
    const [isAnimated, setIsAnimated] = useState(false);

    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const newIconComponents = useMemo(() => {
        return IconComponents.map(({id, type, description, Element}) => {
            const skill = skills.find((skill) => skill.id === id);
    
            if (!skill) {
                return {};
            }
    
            const {value, link } = skill;
    
            return {
                id,
                Element: Element,
                value,
                link,
                type,
                description,
            };
        }).filter(({ value, link }) => value !== undefined && link !== undefined);
    }, [skills]);


    const buttonValue = useMemo(() => {
        return components
            .flatMap(({ id, type }, index) => {
                if (type) {
                    const types = type.split(',').map(t => t.trim());
                    return types.map(singleType => ({
                        id,
                        type: singleType,
                        index
                    }));
                }
                return [];
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
       


    return(
        <IconsStyledList>
            <div className="button-block">
            <ul className="filter-list">
                <li className="filter-item">
                    <button className="filter-button" type="button"
                        onClick={() => handleFilter('All')}
                    >All
                    </button>
                </li>
                {buttonName.map(({id, type}) => (
                    <li className="filter-item" key={id}>
                        <button className="filter-button" type="button"
                            onClick={() => handleFilter(type)}
                        >{type}
                        </button>
                    </li>
                ))}
            </ul>
            </div>
            <ul className={`icon-list ${inView ? 'active' : ''} ${isAnimated ? 'animate' : ''}`} ref={ref}>
                {filteredComponents.map(({id, Element, value, link, type, description}, index) => (
                    <li key={`${id}-${filterType}-${index}`} className={`icons-item`} style={{'--i': index + 1}}
                        data-tooltip-id="my-tooltip-data-html"
                        data-tooltip-content={type}
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
                        <p className="tooltip-title">Category: {content}</p>
                        <p className="tooltip-text">{activeAnchor?.getAttribute('data-relevant-attr') || 'not set'}</p>
                    </span>
                )}
            />
        </IconsStyledList>
    )
};


