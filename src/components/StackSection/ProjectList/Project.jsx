import { ProjectStyled } from "./Project.styled";
import {ReactComponent as IndividualIcon} from "../../../images/svg-icons/user.svg";
import {ReactComponent as TeamIcon} from "../../../images/svg-icons/users.svg";
import {ReactComponent as TotalIcon} from "../../../images/svg-icons/total.svg";
import {ReactComponent as OtherIcon} from "../../../images/svg-icons/other.svg";
import {ReactComponent as OpenIcon} from "../../../images/svg-icons/openfolder.svg";
import {ReactComponent as EducationalIcon} from "../../../images/svg-icons/education.svg";
import { useCallback, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';


export const Projects = ({siteLanguage, projectLanguage}) => {
    const [typeCounts, setTypeCounts] = useState({})
    const [totalPercent, setTotalPercent] = useState();
    const [fullStackPercent, setFullStackPercent] = useState();
    const [backendPercent, setBackendPercent] = useState();
    const [landingPercent, setLandingPercent] = useState();
    const [teamPercent, setTeamPercent] = useState();
    const [crmPercent, setCrmPercent] = useState();
      
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });
    const { stack } = siteLanguage;

    
    useEffect(() => {
        const counts = {};
    
        projectLanguage.forEach((project) => {
          const types = project.type.split(',').map(type => type.trim());
          
          types.forEach((type) => {
            if (counts[type]) {
              counts[type] += 1;
            } else {
              counts[type] = 1;
            }
          });
        });
    
        setTypeCounts(counts);
    },[projectLanguage]);


    const calculateTotalPercent = useCallback(() => {
        const totalPercent = Math.round((projectLanguage.length / projectLanguage.length) * 100);
        setTotalPercent(totalPercent);
    },[projectLanguage.length]);


    const calculateFullStackPercent = useCallback(() => {
        const fullstackPercent = Math.round((typeCounts.FullStack / projectLanguage.length) * 100);
        setFullStackPercent(fullstackPercent);
    }, [projectLanguage.length, typeCounts.FullStack]);


    const calculateBackendPercent = useCallback(() => {
        const backendPercent = Math.round((typeCounts.Backend / projectLanguage.length) * 100);
        setBackendPercent(backendPercent);
    }, [projectLanguage.length, typeCounts.Backend]);


    const calculateLandingPercent = useCallback(() => {
        const landingPercent = Math.round((typeCounts.Landing / projectLanguage.length) * 100);
        setLandingPercent(landingPercent);
    }, [projectLanguage.length, typeCounts.Landing]);


    const calculateTeamPercent = useCallback(() => {
        const teamPercent = Math.round((typeCounts.Team / projectLanguage.length) * 100);
        setTeamPercent(teamPercent);
    }, [projectLanguage.length, typeCounts.Team]);


    const calculateCrmPercent = useCallback(() => {
        const crmPercent = Math.round((typeCounts.CRM / projectLanguage.length) * 100);
        setCrmPercent(crmPercent);
    }, [projectLanguage.length, typeCounts.CRM]);


    useEffect(() => {
        calculateTotalPercent();
        calculateFullStackPercent();
        calculateBackendPercent();
        calculateLandingPercent();
        calculateTeamPercent();
        calculateCrmPercent();
    }, [
        calculateTotalPercent,
        calculateFullStackPercent,
        calculateBackendPercent,
        calculateLandingPercent,
        calculateTeamPercent,
        calculateCrmPercent,
    ]);

    
    const validTotalPercent = isNaN(totalPercent) ? 0 : totalPercent;
    const validFullStackPercent = isNaN(fullStackPercent) ? 0 : fullStackPercent;
    const validBackendPercent = isNaN(backendPercent) ? 0 : backendPercent;
    const validLandingPercent = isNaN(landingPercent) ? 0 : landingPercent;
    const validTeamPercent = isNaN(teamPercent) ? 0 : teamPercent;
    const validCrmPercent = isNaN(crmPercent) ? 0 : crmPercent;
   

    return(
        <ProjectStyled>
            <ul ref={ref} className={`list ${inView ? 'visible' : ''}`}>
                <li className="item">
                    <div className="descr-cont">
                        <TotalIcon className="item-svg" width={20} height={20}/>
                        <p className="text">{stack.total}</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-total"
                            width={validTotalPercent}
                            style={{ width: `${validTotalPercent}%`}}
                        >
                            <span></span>
                            <p>{projectLanguage.length}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <EducationalIcon className="item-svg" width={20} height={20}/>
                        <p className="text">{stack.fullStack}</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-educational"
                              width={validFullStackPercent}
                              style={{ width: `${validFullStackPercent}%`}}
                        >
                            <span></span>
                            <p>{typeCounts.FullStack}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <IndividualIcon className="item-svg" width={20} height={20}/>
                        <p className="text">{stack.backend}</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-individual"
                            width={validBackendPercent}
                            style={{ width: `${validBackendPercent}%`}}
                        >
                            <span></span>
                            <p>{typeCounts.Backend}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <TeamIcon className="item-svg" width={20} height={20}/>
                        <p className="text">{stack.landing}</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-team"
                            width={validLandingPercent}
                            style={{ width: `${validLandingPercent}%`}}
                        >
                            <span></span>
                            <p>{typeCounts.Landing}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <OtherIcon className="item-svg" width={20} height={20}/>
                        <p className="text">{stack.team}</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-other"
                            width={validTeamPercent}
                            style={{ width: `${validTeamPercent}%`}}
                        >
                            <span></span>
                            <p>{typeCounts.Team}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <OpenIcon className="item-svg" width={20} height={20}/>
                        <p className="text">{stack.crm}</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-open"
                            width={validCrmPercent}
                            style={{ width: `${validCrmPercent}%`}} 
                        >
                            <span></span>
                            <p>{typeCounts.CRM}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </ProjectStyled>
    )
};