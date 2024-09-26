import { Section } from "../../components/Section/Section";
import { Container } from "../../components/Container/Container";
import { Hero } from "../../components/HeroSection/Hero";
import { forwardRef } from "react";



const Home = forwardRef(({ backToTopRef }, ref) => {
    
    return(
        <Section>
            <Container>
                <Hero
                    backToTopRef={backToTopRef}
                />
            </Container>
        </Section>
    )
});


export default Home;