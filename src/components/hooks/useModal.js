import { useSelector } from "react-redux";
import {
    selectPortfolioModal,
    selectContactModal,
    selectAboutImagedata,
    selectPortfolioModalData,
    selectSuccsess,
} from "../redux/Modal/modal-selector"


export const useModal = () => {
    const isPortfolioModalOpen = useSelector(selectPortfolioModal);
    const isContactModalOpen = useSelector(selectContactModal);
    const aboutPictureData = useSelector(selectAboutImagedata);
    const portfolioModalData = useSelector(selectPortfolioModalData);
    const isSuccsess = useSelector(selectSuccsess);


    return {
        isPortfolioModalOpen,
        isContactModalOpen,
        aboutPictureData,
        portfolioModalData,
        isSuccsess,
    }
};