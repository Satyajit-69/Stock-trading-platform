import Navbar from "../Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Footer from "../footer";
// Import the image from the assets folder

import Education from "./Education";
import Pricing from "./Pricing";


//this is a wrapper class for the home section 

function HomePage() {
    return ( 
        <>
      

           
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
           
      
        </>
     );
}

export default HomePage;