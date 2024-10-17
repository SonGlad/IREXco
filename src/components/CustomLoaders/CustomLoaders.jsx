import ScaleLoader from "react-spinners/ScaleLoader";
import PuffLoader from "react-spinners/PuffLoader";
import { RingLoaderStyled, FormStyled } from "./CustomLoaders.styled";
import { Html, useProgress } from "@react-three/drei";



export const Loading = () => {
    return (
        <RingLoaderStyled>
            <ScaleLoader
                color={"#f1f1f1"} 
                loading = {true} 
                height={35}
                width={4}
                radius={2}
                margin={2}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RingLoaderStyled>
    );
};


export const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <span></span>
            <p style={{fontSize: "14",
                color:"#f1f1f1",
                fontWeight:"800",
                marginTo:"40",
            }} 
            >{progress.toFixed(2)}%</p>
        </Html>
    );
};

export const FormLoading = () => {
    return (
        <FormStyled
            style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)'}}
        >
            <PuffLoader
                color={"#f1f1f1"}
                loading = {true} 
                size={150}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </FormStyled>
    );
};