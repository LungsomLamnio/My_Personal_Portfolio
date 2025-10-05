import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
// import other pages if needed

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#120024] to-gray-900">
      <Routes>
        <Route path="/*" element={<Portfolio />} />
        {/* Add other routes if needed */}
      </Routes>
    </div>
  );
}

export default App;
