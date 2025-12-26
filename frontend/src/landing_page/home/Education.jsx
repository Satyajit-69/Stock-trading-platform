import React from 'react'

function Education() {
    return (  
        <>
         <div className="container mt-5">
            <div className="row p-4">
              <div className="col-lg-6"> 
                    <img src="assets/education.svg" alt="" style={{width : '70%'}}/>
               </div>

            <div className="col-lg-6 education-section">
                <h1 className='mb-3 fs-2'> Free and open market education </h1>
                <p className='mt-4'> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="./" className='text-decoration-none'>
                    Varsity &nbsp;<i className="fa-solid fa-arrow-right"></i>
                </a>
                                
                <p className='mt-4'> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="./" className='text-decoration-none'>
                    Trading Q&A &nbsp;<i className="fa-solid fa-arrow-right"></i> 
                </a>
            </div>
            </div>
         </div>
        </>
    );
}

export default Education;
