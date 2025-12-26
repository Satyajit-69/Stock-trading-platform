import Navbar from "../Navbar.js";
import Hero from "./Hero.jsx";
import Stats from "./Stats.jsx";
import OpenAccount from "../OpenAccount.js";
import Footer from "../footer.js";
// Import the image from the assets folder

import Education from "./Education.jsx";
import Pricing from "./Pricing.jsx";


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