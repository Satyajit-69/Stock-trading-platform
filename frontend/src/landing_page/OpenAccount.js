import React from "react";


function OpenAccount() {
    return ( 
        <>
           <form action="/signup">

         <div className="container p-1 mb-5 open-account mt-5">
                  <div className="row text-center mt-5">
         
                     <h2 className="fs-3" style={{fontWeight : '600'}}> Open a Zerodha account</h2>
                     <p>Modern platforms and apps , ₹0 investments , and flat ₹20 intraday and F&Q trades.</p>
                     
                     <button className="btn btn-primary p-2 fs-5 " style={{width:"20%" , margin : '0 auto' , backgroundColor : '#387ED1' , fontWeight : '600'} }>Sign up for free </button>

                     </div>
                  
                  </div>

           </form>
        
         

         </>
     );
}

export default OpenAccount;