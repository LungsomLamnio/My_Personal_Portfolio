import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#120024] to-gray-900">
      <Routes>
        <Route path="/*" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
