import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Loading } from './CustomLoaders/CustomLoaders';
// import { Footer } from "../components/Footer/Footer";
import { StyledContainer } from './SharedLayout.styled';
import { forwardRef } from 'react';



export const SharedLayout = forwardRef(({backToTopRef}, ref) => {

  return(
    <StyledContainer>
      <Header
        backToTopRef={backToTopRef}
      />
      <Suspense fallback={<Loading/>}>
        <main >
          <Outlet />
        </main>
      </Suspense>
      {/* <Footer/> */}
    </StyledContainer>
  );
});