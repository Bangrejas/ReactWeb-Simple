import React, { Component } from 'react';
import HeaderDashboard from './HeaderDashboard'
import Footer from './Footer.js';
import './css/DashboardUnpaid.css';

class DashboardUnpaid extends Component {
    render() {
      return (
        <div style={{backgroundColor:'#fafafa'}}>
          <HeaderDashboard/>
            <body style={{backgroundColor:'#fafafa'}}>
              <div>
                  <div className="text-center">
                  <h1 style={{
                      fontSize:'30px',color:'#fafafa',fontWeight:300, margin:'25px 0 25px 0'
                  }}>Blank</h1>
              </div>

              <div>
                <div class="container" style={{width:'55%', backgroundColor:'#FFF', position:'center', margin:'', border:'1px solid #ececec'}}>
                  <legend>
                  <h6 style={{color:'#000', fontWeight:'200', fontFamily:'Open Sans, helvetica, Arial, sans serif', fontSize:'.90000000em', display:'block', margin:'0 0 -17px 200px',}}>Terms and Conditions ("Terms")</h6>
                  </legend>
                  
                    <div class="container" style={{width:'95%', color:'#f8f9fa', backgroundColor:'#FFF', border:'1px solid #ececec'}}>
                    <div data-spy="scroll" data-target=".navbar" data-offset="50" style={{position:'relative', overflowY:'scroll'}}>
                      <div id="section" class="container-fluid" style={{paddingTop:'10px', height:'300px', color:'#000', backgroundColor:'#FFF'}}>
                        <p style={{color:'#666666', fontWeight:'150', fontSize:'1.15000000em', fontFamily:'Open Sans, helvetica, Arial, sans serif'
                        }}>
                        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the website (the "Service") operated by DWCamp ("us", "we", or "our").
                        <br/>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                        <br/>
                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. The Terms and Conditions agreement for DWCamp has been created with the help of TermsFeed.
                        <br/>
                        <br/>
                        Accounts
                        <br/>
                        When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                        <br/>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                        <br/>
                        You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                        <br/>
                        <br/>
                        Links To Other Web Sites
                        <br/>
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by DWCamp.
                        <br/>
                        DWCamp has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that DWCamp shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                        <br/>
                        We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
                        <br/>
                        <br/>
                        Termination
                        <br/>
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        <br/>
                        All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                        <br/>
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        <br/>
                        Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                        <br/>
                        All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                        <br/>
                        <br/>
                        Governing Law
                        <br/>
                        These Terms shall be governed and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions.
                        <br/>
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                        <br/>
                        <br/>
                        Changes
                        <br/>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        <br/>
                        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                        <br/>
                        <br/>
                        Contact Us
                        <br/>
                        If you have any questions about these Terms, please contact us.
                        <br/>
                        Last updated : February 11, 2019
                        </p>
                      </div>
                      </div>
                    </div>

                      <div className="btn-block" style={{width:'95%', padding:'15px 0 15px 35px'}}>
                        <a href="/payment"><button type="button" class="btn btn-danger btn-block" style={{marginBottom:'10px'}}>Ya, Saya Setuju</button></a>  
                        <a href="/silabusnew" ><button type="button" class="btn btn-secondary btn-block" >Saya Tidak Setuju</button></a>
                      </div>
                  </div>
                </div>
              </div>
            </body>
              <div className="text-center">
                  <h1 style={{
                      fontSize:'30px',color:'#fafafa',fontWeight:300, margin:'25px 0 25px 0'
                  }}>Blank</h1>
              </div>
            <Footer />
        </div>
      );
    }
  }
  export default DashboardUnpaid;
