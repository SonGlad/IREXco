import { StackSectionStyled } from "./StackSection.styled";
import { forwardRef } from "react";
import { Icons } from "./ReactIcons/Icons";
import { Projects } from "./ProjectList/Project";
import { CodingCharts } from "./CodingCharts/CodingCharts";
import profile from "../../utils/profile.json";




export const StackSection = forwardRef(({toStackRef}, ref) => {
    const { about5 } = profile;


    return(
        <StackSectionStyled ref={toStackRef}>
            <h1 className="main-education-title">Our <span>Arsenal</span></h1>
            <Icons/>
            <h2 className="statistics-title">Development <span>Statistics</span></h2>
            <h3 className="title">Completed <span>Projects</span> Overview</h3>
            <div className="projects-descr-maincont">
                <div className="projects-descr-cont">
                    <p className="projects-descr-text">{about5}</p>
                </div>
            </div>
            <Projects/>
            <h3 className="title">Project <span>Phases</span> Breakdown</h3>
            <h4 className="title-descr">Effort <span>Distribution</span> Across <span>Project</span> Phases</h4>
            <CodingCharts/>
        </StackSectionStyled>
    )
});