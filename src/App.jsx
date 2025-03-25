import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import TopRanked from "./components/TopRanked"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Colleges from "./pages/Colleges"
import About from "./pages/About"
import CollegeContextProvider from "./context/CollegeContext"
import ExploreOptions from "./pages/ExploreOptions"
import PublicColleges from "./components/PublicColleges"

const App = () => {
  return (
    <BrowserRouter>
    <CollegeContextProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/top-ranked" element={<TopRanked/>}/>
      <Route path="/colleges" element={<Colleges/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/publicCollege" element={<PublicColleges/>}/>
      <Route path="/explore" element={<ExploreOptions/>}/>
      </Routes>
    </CollegeContextProvider>
    </BrowserRouter>
  )
}

export default App