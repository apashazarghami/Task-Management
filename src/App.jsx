import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Task from "./components/tasks/Task";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/:id" element={<Task />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
