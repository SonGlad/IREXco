import { StackSectionStyled } from "./StackSection.styled";
// import { Icons } from "./ReactIcons/Icons";
// import { Projects } from "./ProjectList/Project";
// import { CodingCharts } from "./CodingCharts/CodingCharts";
// import { useInView } from 'react-intersection-observer';



export const StackSection = ({profileLanguage, siteLanguage, projectLanguage}) => {
    // const { about5 } = profileLanguage;
    // const { stack } = siteLanguage;

    // const { ref: contentRef, inView: inViewContent } = useInView({
    //     triggerOnce: true,
    //     threshold: 0.1,
    // });  


    return(
        <StackSectionStyled id="idStack">
            {/* <h1 className="main-education-title">{stack.sectionTitle1} <span>{stack.sectionTitle2}</span></h1> */}
            <h1 className="main-education-title">Stack</h1>
            <div className="content-div">
                {/* {inViewContent && (
                    <>
                        <Icons 
                            profileLanguage={profileLanguage}
                            siteLanguage={siteLanguage}
                        />
                        <h2 className="statistics-title">{stack.subTitle1} <span>{stack.subTitle2}</span></h2>
                        <h3 className="title">{stack.subAubTitle1} <span>{stack.subAubTitle2}</span> {stack.subAubTitle3}</h3>
                        <div className="projects-descr-maincont">
                            <div className="projects-descr-cont">
                                <p className="projects-descr-text">{about5}</p>
                            </div>
                        </div>
                        <Projects 
                            siteLanguage={siteLanguage}
                            projectLanguage={projectLanguage}
                        />
                        <h3 className="title">{stack.subAubTitle4} <span>{stack.subAubTitle5}</span> {stack.subAubTitle6}</h3>
                        <h4 className="title-descr">{stack.lastTitle1} <span>{stack.lastTitle2}</span> {stack.lastTitle3} <span>{stack.lastTitle4}</span> {stack.lastTitle5}</h4>
                        <CodingCharts
                            siteLanguage={siteLanguage}
                            profileLanguage={profileLanguage}
                        />
                    </>
                )} */}
            </div>
        </StackSectionStyled>
    )
};