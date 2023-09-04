// import React from 'react';
// import Contact from "./component/contact";
// import Reactcontact from './component/reactcontact';
// import './App.css';

// const App = () => {
//   return (
//     <div>
//       <Reactcontact />
//     </div>
//   );
// };

// export default App;
// App.js


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import React from 'react';
import './App.css';
import Reactcontact from './component/reactcontact';
import Choice from "./component/Quiz"; // Import the QuizSystem component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from "./authFirebase/auth"
import Navbar from './component/Navbar/Navbar';
import DropdownButton from './component/DropdownButton';
import Choice1 from './component/Choice';
import { Description } from './component/Description/Description';
function App() {


  const index=1;
  return (
    <Router>
      <Routes>
        {/* <Switch> */}
        <Route path="/" element={<Navbar/>}/>
        {/* <Route path="/MedicalCondition" element={<DropdownButton/>}/> */}
        <Route path ="/Medical" element={<Description/>}/>
        <Route path="/Auth" element={< Auth />} />
        <Route path='/quiz' element={<DropdownButton/>} />
        {/* <Route path="choice" element={<Choice1/>}/> */}
        {/* </Switch> */}
        {/* </div> */}
      </Routes>
    </Router>
  );
}

export default App;
