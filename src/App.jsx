import { BrowserRouter } from "react-router-dom";
import Footer from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { AnimatedRoutes } from "../src/components/AnimatedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
};
export default App;
