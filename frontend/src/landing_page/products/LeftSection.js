function LeftSection({ imageUrl, productName, productDesc, tryDemo, learnMore, googlePlay, appStore, }) {
    return ( 
        <div className="container mt-3 ">
            <div className="row p-5">
               
               <div className="col-7 p-5">
                <img src= {imageUrl} alt="" style={{width : '100%', paddingLeft : '4rem'}} />
               </div>
               <div className="col-1"></div>
                
               <div className="col-4 fontsize-16px    p-5 mt-5  text-muted">
               
                  <h1 className="fs-2">{productName}</h1>
                  <p>{productDesc}</p>

               <div className="mb-3">
                  <a href= {tryDemo} style={{textDecoration : 'none'}}>Try Demo &nbsp;<i class="fa-solid fa-arrow-right"></i></a> 
                  <a href= {learnMore} style={{marginLeft :'2rem' , textDecoration : 'none'}}>Learn More &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
              </div>
               <div>
                  <a href= {googlePlay}> <img src= "assets/googlePlayBadge.svg" alt="googlePlay" /> </a> &nbsp;
                  <a href= {appStore}>  <img src= "assets/appstoreBadge.svg" alt="appStore" /></a>
               </div>

              </div>
                 
            </div>
        </div>
     );
}

export default LeftSection;
