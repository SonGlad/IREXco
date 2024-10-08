import { useSelector } from "react-redux";
import { 
    selectRefactoredData,
    selectIsRefactoring,
    selectIndividualAndTeamData,
    selectIndividualRefactoredData,
    selectPortfolioData,
    selectIsPortfolioData,
    selectPortfolioRefactoredData,
    selectIsPortfolioRefactoredData,
    selectIsLoading,
} from "../../redux/Data/data-selectors";


export const useData = () => {
    const refactoredData = useSelector(selectRefactoredData);
    const isRefactoring = useSelector(selectIsRefactoring);
    const individualAndTeamData = useSelector(selectIndividualAndTeamData);
    const isRefactoredData = useSelector(selectIndividualRefactoredData);
    const portfolioData = useSelector(selectPortfolioData);
    const isPortfolioData = useSelector(selectIsPortfolioData);
    const portfolioRefactoredData = useSelector(selectPortfolioRefactoredData);
    const isPortfolioRefactoredData = useSelector(selectIsPortfolioRefactoredData);
    const isLoading = useSelector(selectIsLoading);

    
    return{
        refactoredData,
        isRefactoring,
        individualAndTeamData,
        isRefactoredData,
        portfolioData,
        isPortfolioData,
        portfolioRefactoredData,
        isPortfolioRefactoredData,
        isLoading,
    }
};