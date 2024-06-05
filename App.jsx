import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="project" element={<Projects/>}/>
        <Route path="resume" element={<Resume/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;