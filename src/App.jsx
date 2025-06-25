import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
