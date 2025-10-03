import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
// import other pages if needed

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Portfolio />} />
      {/* Add other routes if needed */}
    </Routes>
  );
}

export default App;
