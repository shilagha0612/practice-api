import React from "react";
import {
  Link,
  Routes,
  Route,
  
} from "react-router-dom";
import { useParams } from "react-router"; //Top of App.js
// import Survey from "./Components/Survey";
// import {Switch } from "react-router-dom";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Navbar from "./Components/Navbar";
// import FavFood from "./pages/FavFood";
// import Landing from "./pages/Landing";

    
// function App() {
  
//   return (
//     <div>
//       <h1>
//         My routing application
//       </h1>
//       <Navbar/>
     
//       <Routes>

//         <Route path="/about" element={<Landing/>} />
//         {/* <Route path="/about" element={<About/>} /> */}
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path='/favFood/:food' element={<FavFood/>}/>
//         <Route path='/favFood' element={<FavFood/>}/>
//       </Routes>
//       {/* <About/>
//       <Contact/> */}
      
     
//     </div>
//   );
// }

// export default App;



import Home from "./Components/Home";
import NumberPage from "./Components/NumberPage";
import WordPage from "./Components/WordPage";
import StyleWordPage from "./Components/StyleWordPage";

const App = () => {
  return (
    <div>
        <nav>
        
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:number" element={<NumberPage />} />
        <Route path="/hello" element={<WordPage />} />
        <Route path="/:word" element={<WordPage />} />
        <Route path="/hello/:color1/:color2" element={< StyleWordPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    


    </div>
    
  );
};

export default App;
