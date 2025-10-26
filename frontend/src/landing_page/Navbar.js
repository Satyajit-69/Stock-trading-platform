import React from "react";


function Navbar() {
    return ( 
         <>
         
         <nav className="navbar bg-body-primary border-bottom p-2 " style={{height : '4.5rem' ,position : 'fixed' , width :'100%'}}>
          <div class="container-fluid p-3">
           
          <img src="assets/logo.svg" alt="Logo"  height="24" className ="pt-1" style={{maxWidth : '20%' , height : '24px' ,marginLeft : '7rem'}} />
      
          <div className="navbar-links">
            
            <a href="/signup">Sign up</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/pricing">Pricing</a>
            <a href="/support">Support</a>
            <i class="fa-solid fa-bars"></i>

          </div>
  </div>
</nav>

         
         </>
     );
}

export default Navbar;