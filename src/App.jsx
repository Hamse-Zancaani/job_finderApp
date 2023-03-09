import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/FooterDiv/Footer";
import JobDiv from "./Components/JobDiv/JobDiv";
import SearchDiv from "./Components/SearchDiv/SearchDiv";
import ValueDiv from "./Components/ValueDiv/ValueDiv";

const App=()=>{
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar/>
      <SearchDiv/>
      <JobDiv/>
      <ValueDiv/>
      <Footer/>

    </div>
  )
}
export default App;