import { useState } from "react";
import Dashboard from "./landing/Home";
import Header from "./landing/Header";
// import SkillTestDashboard from "./landing/Update";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="w-screen"> */}
      <Header />
      <Dashboard />
      {/* <SkillTestDashboard></SkillTestDashboard> */}
      {/* </div> */}
    </>
  );
}

export default App;
