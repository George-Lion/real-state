import { BrowserRouter } from "react-router-dom";
import Footer from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { AnimatedRoutes } from "../src/components/AnimatedRoutes";

import HouseContextProvider from "./components/HouseContext";

const App = () => {
  return (
    <div>
      <HouseContextProvider>
        <BrowserRouter>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </BrowserRouter>
      </HouseContextProvider>
    </div>
  );
};
export default App;
