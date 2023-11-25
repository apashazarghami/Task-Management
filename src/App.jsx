import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
