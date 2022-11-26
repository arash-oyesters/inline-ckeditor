import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inline from "./components/Inline";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inline />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
