import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Task from "./components/tasks/Task";

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/:id" element={<Task />} />
        </Routes>
    </>
  );
}

export default App;
