import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isPortfolioModal: false,
        isContactModal: false,
        isSuccsess: true,
        portfolioModalData: null, 
    },

    reducers: {
        openModalPortfolio: (state) => {
            state.isPortfolioModal = true;
        },
        closeModalPortfolio: (state) => {
            state.isPortfolioModal = false;
        },
        openModalContact: (state) => {
            state.isContactModal = true;
        },
        closeModalContact: (state) => {
            state.isContactModal = false;
        },
        updatePortfolioModalData: (state, action) => {
            state.portfolioModalData = action.payload;
        },
        setSuccsessTrue: (state) => {
            state.isSuccsess = true;
        },
        setSuccsessFalse: (state) => {
            state.isSuccsess = false;
        },
    }
});


export const modalReducer = modalSlice.reducer;


export const {
    openModalPortfolio,
    closeModalPortfolio,
    updatePortfolioModalData,
    openModalContact,
    closeModalContact,
    setSuccsessTrue,
    setSuccsessFalse,
} = modalSlice.actions;
