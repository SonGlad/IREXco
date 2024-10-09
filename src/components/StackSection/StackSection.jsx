import { StackSectionStyled } from "./StackSection.styled";
import { forwardRef } from "react";
import { Icons } from "./ReactIcons/Icons";


export const StackSection = forwardRef(({toStackRef}, ref) => {


    return(
        <StackSectionStyled ref={toStackRef}>
            <h1 className="main-education-title">Our <span>Arsenal</span></h1>
            <Icons/>
            <h2 className="statistics-title">Official <span>GitHub</span> statistics</h2>
            <h3 className="title"><span>GitHub</span> Repositories</h3>
            {/* <Projects/> */}
            <h3 className="title">Programming <span>Language</span> Diagrams</h3>
            <h4 className="title-descr">Based <span>on</span> Individual <span>&</span> Team projects only</h4>
            {/* <CodingCharts/> */}
        </StackSectionStyled>
    )
});