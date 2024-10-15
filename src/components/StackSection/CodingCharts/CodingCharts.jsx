import { CodingChartsStyled } from "./CodingCharts.styled";
import { Chart } from "./Charts/Charts";
import { useInView } from 'react-intersection-observer';
import Profile from "../../../utils/profile.json";
import DefaultPicture from "../../../images/images/bg_image.jpg";



export const CodingCharts = () => {
    const { steps } = Profile;
    const [refItem1, refItem1InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem2, refItem2InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem3, refItem3InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem4, refItem4InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem5, refItem5InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
    const [refItem6, refItem6InView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.3,
    });
   
  

    return(
        <CodingChartsStyled>
            <ul className="phases-list">
                <li className={`phases-item ${refItem1InView ? 'active1' : ''}`} ref={refItem1}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>01</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${steps.projectPlanning.img 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen">
                            <div className="context">
                                <div className="border-inner">
                                    <p>01</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{steps.projectPlanning.name}</h3>
                                    <p className="text">{steps.projectPlanning.description}</p>
                                </div>
                                <Chart
                                    value={steps.projectPlanning}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem2InView ? 'active2' : ''}`} ref={refItem2}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>02</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont order-one">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${steps.designPrototyping.img 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen order-two">
                            <div className="context">
                                <div className="border-inner">
                                    <p>02</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont order-three">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{steps.designPrototyping.name}</h3>
                                    <p className="text">{steps.designPrototyping.description}</p>
                                </div>
                                <Chart
                                    value={steps.designPrototyping}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem3InView ? 'active3' : ''}`} ref={refItem3}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>03</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${steps.backend.img 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen">
                            <div className="context">
                                <div className="border-inner">
                                    <p>03</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{steps.backend.name}</h3>
                                    <p className="text">{steps.backend.description}</p>
                                </div>
                                <Chart
                                    value={steps.backend}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem4InView ? 'active4' : ''}`} ref={refItem4}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>04</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont order-one">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${steps.frontend.img 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen order-two">
                            <div className="context">
                                <div className="border-inner">
                                    <p>04</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont order-three">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{steps.frontend.name}</h3>
                                    <p className="text">{steps.frontend.description}</p>
                                </div>
                                <Chart
                                    value={steps.frontend}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem5InView ? 'active5' : ''}`} ref={refItem5}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>05</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${steps.testing.img 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen">
                            <div className="context">
                                <div className="border-inner">
                                    <p>05</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{steps.testing.name}</h3>
                                    <p className="text">{steps.testing.description}</p>
                                </div>
                                <Chart
                                    value={steps.testing}
                                />
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`phases-item ${refItem6InView ? 'active6' : ''}`} ref={refItem6}>
                    <div className="phases-styles small-screen">
                        <div className="context">
                            <div className="border-inner">
                                <p>06</p>
                            </div>
                            <div className="absolute"></div>
                        </div>
                        <div className="border-to-bottom"></div>
                    </div>
                    <div className="phases-content-cont">
                        <div className="padding-cont image-padding-cont order-one">
                            <div className="image-cont" 
                                style={{backgroundImage:`url(${steps.deploying.img 
                                || DefaultPicture})`}}
                            ></div>
                        </div>
                        <div className="phases-styles wide-screen order-two">
                            <div className="context">
                                <div className="border-inner">
                                    <p>06</p>
                                </div>
                                <div className="absolute"></div>
                            </div>
                            <div className="border-to-bottom"></div>
                        </div>
                        <div className="padding-cont content-padding-cont order-three">
                            <div className="text-cont">
                                <div className="tetx-and-title">
                                    <h3 className="text-title">{steps.deploying.name}</h3>
                                    <p className="text">{steps.deploying.description}</p>
                                </div>
                                <Chart
                                    value={steps.deploying}
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </CodingChartsStyled>
    )
};
