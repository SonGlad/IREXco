import { HeroStyled } from "./Hero.styled";
import { forwardRef } from "react";
import { ComputerCanvas } from "./ComputerCanvas";



export const Hero = forwardRef(({ backToTopRef }, ref) => {
    

    return (
        <HeroStyled ref={backToTopRef}>
            <h1> welcome!!!!!!!</h1>
            <ComputerCanvas/>
        </HeroStyled>
    );
});