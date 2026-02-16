import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from './components/Navbar';
import Footer from "./common/Footer";


export default function App() {
  return (
      <Navbar />
    <Home/>
      </Routes>

      <Footer />
      {/* <FollowCursor /> */}
    </BrowserRouter>
  );

}
