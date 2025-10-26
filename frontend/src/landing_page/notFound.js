import Footer from "./footer";
import Navbar from "./Navbar";

function NotFound() {
    return ( 
      <>
       
        <div className="container p-1 mb-5 open-account mt-5">
                  <div className="row text-center mt-5">
         
                     <h2 className="fs-3" style={{fontWeight : '600'}}> Page not found :( </h2>
                     <p>Error 404</p>
                     
                     <button className="btn btn-primary p-2 fs-5 " style={{width:"20%" , margin : '0 auto' , backgroundColor : '#387ED1' , fontWeight : '600'} }>Sign up for free </button>

                     </div>
                  
                  </div>

      </>

     );
}

export default NotFound;