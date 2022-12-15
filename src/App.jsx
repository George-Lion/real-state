import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./views/index";
import { Services } from "./views/ServicesView/Services";
import { Galery } from "./views/Galery/Galery.jsx";
import { Contact } from "./views/Contact/Contact";
import Sale from "./views/Sale/Sale";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/galery/:id" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
