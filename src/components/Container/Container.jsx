import { ContainersStyle } from './Container.styled';


export const Container = ({children}) => {
    return(
        <ContainersStyle>
            {children}
        </ContainersStyle>
    );
};

