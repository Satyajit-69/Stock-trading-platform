import React from "react";


function Footer() {
    return ( 
        <div className="container footer border-top" style={{width : '100%'}}>
         <div className="row mt-3 ">
                  
               <div className="col">

                  <img src="assets/logo.svg" alt="" style={{width:'50%'}}/>
                  <p style={{fontSize : '12px' ,marginTop :'1rem'}}>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>

               </div>

               <div className="col">    

                   <p>Account</p>

                   <a href="./">Open demat account</a> <br /> 
                   <a href="./">Minor demat account</a> <br />
                   <a href="./">NRI demat account</a> <br />
                   <a href="./">Commodity</a> <br />
                   <a href="./">Dematerialisation</a> <br />
                   <a href="./"> Fund transfer</a> <br />
                   <a href="./">MTF</a> <br />
                   <a href="./">Referral program</a> <br />

               </div>


                <div className="col">

                   <p>Support</p>

                   <a href="./">Contact us</a> <br />
                   <a href="./">Support portal</a> <br />
                   <a href="./">How to file a complaint ?</a> <br />
                   <a href="./">Status of your complaints</a> <br />
                   <a href="./">Bulletin</a> <br />
                  <a href="./"> Circular</a> <br />
                   <a href="./">Z-connect blog</a> <br />
                   <a href="./">Downloads</a> <br />

               </div>


                <div className="col">

                   <p>Company</p>

                   <a href="./">About</a> <br />
                   <a href="./">Philosophy</a> <br />
                   <a href="./">Press and media</a> <br />
                   <a href="./">Carrers</a> <br />
                   <a href="./">Zerodha cares(CSR)</a> <br />
                  <a href="./"> Zerodha tech</a> <br />
                   <a href="./">Open Source</a> <br />
                   

               </div>

                <div className="col">

                   <p>Quick Links</p>

                   <a href="./">Upcoming IPOs</a> <br />
                   <a href="./">Brokerage charges </a> <br />
                   <a href="./">Market holidays</a> <br />
                   <a href="./">Economic calender</a> <br />
                   <a href="./">Calculators</a> <br />
                  <a href="./"> Markets</a> <br />
                   <a href="./">Sectors</a> <br />
                   {/* <a href="">Referral program</a> <br /> */}

               </div>
                
             
            

         </div>
         
          <div className="footer-address mt-3 fs-14px p-5 text-muted">

                       <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
                         Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration 
                         no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to 
                         <a href="./"> complaints@zerodha.com</a>, for DP related to <a href="./"> dp@zerodha.com </a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                       <p>Procedure to file a complaint on <a href=" "> SEBI SCORES </a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                       <a href="./" className="mb-3"> Smart Online Dispute Resolution | Grievances Redressal Mechanism </a>

                       
                       <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                       
                       <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>


                       <p>India's largest broker based on networth as per NSE.  <a href="">NSE broker factsheet</a></p>
                       
                       
                       
                       <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please  <a href="">create a ticket here</a>.</p>

             </div>


            <div className="quick-links d-flex justify-content-center">

             <a href="./">NSE</a> &nbsp; &nbsp;
             <a href="./">BSE</a> &nbsp; &nbsp;
             <a href="./">MCX</a> &nbsp; &nbsp;
             <a href="./">Terms & conditions</a> &nbsp; &nbsp;
             <a href="./">Policies & procedures</a> &nbsp; &nbsp;
             <a href="./">Privacy Policies</a> &nbsp; &nbsp;
             <a href="./">Disclosure</a> &nbsp; &nbsp;
             <a href="./">For inverstors Attention</a> &nbsp; &nbsp;
             <a href="./">Investor charter</a> &nbsp; &nbsp;

            </div>

            <h1 className="text-center fs-6">Made by Satyajit &hearts; </h1>
        </div>
     );
}

export default Footer;
