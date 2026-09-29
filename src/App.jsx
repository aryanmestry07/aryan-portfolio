import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Future pages */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/skills" element={<Skills />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;