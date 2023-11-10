import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
// import LoadingComponent from "./LoadingComponent";
// import { useAppDispatch } from "../store/configureStore";
// import { fetchBasketAsync } from "../../features/basket/basketSlice";
import HomePage from "../../features/home/HomePage";
// import FloatingNav from "./floating-nav/FloatingNav";
import Footer from "./footer/FooterContent";

function App() {
  const location = useLocation();

  // const dispatch = useAppDispatch();
  // const initApp = useCallback(async () => {
  //   try {
  //     await dispatch(fetchCurrentUser());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   initApp();
  // }, [initApp]);
  // Create rtl cache

  return (
    <>
      <div id="main" className="app smooth transition" js-app js-transition>
        <div className="preloader" js-preload></div>
        <div className="smooth__track">
          <Header />
          {location.pathname === "/" ? (
            <>
              <HomePage />
            </>
          ) : (
            <>
              <div style={{ marginTop: 4, minHeight: "90vh" }}>
                <Outlet />
              </div>
            </>
          )}

          <Footer />

          {/* {showFloatingNav && <FloatingNav />} */}
          {/* </main> */}
        </div>
      </div>
    </>
  );
}

export default App;
