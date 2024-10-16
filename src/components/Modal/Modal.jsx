import { createPortal } from "react-dom";
import { ModalStyled } from "./Modal.styled";
import { PortfolioModal } from "./PortfolioModal/PortfolioModal";
import { ContactModal } from "./CotactModal/ContactModal";
import { useEffect, useCallback} from "react";


const modalRoot = document.querySelector("#modal-root");


export const Modal = ({
    isPortfolioModal,
    isContactModal,
    closePortfolioModal,
    closeContactModal,
    portfolioModalData,
    isSuccess,
}) => {


    const handleClickClose = useCallback(() => {
        if(isPortfolioModal) {
            closePortfolioModal();
        }
        if(isContactModal) {
            closeContactModal();
        }
    },[closeContactModal, closePortfolioModal, isContactModal, isPortfolioModal]);


    const handleBackdropClick = useCallback(event => {
        if (event.target === event.currentTarget) {
            handleClickClose();
        }
    },[handleClickClose]);


    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            handleClickClose();
        }
    },[handleClickClose]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleBackdropClick);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleBackdropClick);
        };
    },[handleBackdropClick, handleKeyDown]);



    return createPortal(
        (isPortfolioModal || isContactModal) && (
            <ModalStyled onClick={handleBackdropClick}>
                {isPortfolioModal && (
                    <PortfolioModal 
                        handleClickClose={handleClickClose}
                        portfolioModalData={portfolioModalData}
                    />
                )}
                {isContactModal && (
                    <ContactModal 
                        handleClickClose={handleClickClose}
                        isSuccess={isSuccess}
                    />
                )}
            </ModalStyled>
        ),
        modalRoot
    );
};