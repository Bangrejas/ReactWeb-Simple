import React, { Component } from 'react';
import './css/ListVideo.css';
import ply from './img/ply.png';
// import { Link } from 'react-router-dom';
import lvl from './img/Level.png'
class ListVideo extends Component {

render() {
return (
        <div style={{overflow:"hidden",backgroundColor:"#fff"}} >
        <div class="container">
            <div>
                <br/>
                <h2 style={{fontWeight:"bold",paddingTop:"90px"}}>Minggu 1</h2>
                <br/>
            </div>
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                <div className="d-flex justify-content-center listA">
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                        <br/>
                    </a>
                </div>
                <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>1. Perkenalan</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity: 0.4 ,marginLeft:"70px",color:"red"}}></span> 04:32 </span>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
                <div className="d-flex justify-content-center listB">
                    <a href="/detailvideo" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                        <br/>
                    </a>
                </div>
                    <a style={{paddingTop:"15px"}}href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>2. Components</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"50px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>3. Instalasi</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"90px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>4. Character</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"80px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center quiiiz">
                        <a href="/detailquiz" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail" style={{opacity: 0.4,background: 'transparent', width: '150px', border: 'none'}} src="http://www.stickpng.com/assets/images/5a461410d099a2ad03f9c998.png" alt=""></img>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailquiz" class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>Quiz Minggu 1</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px",marginLeft:"70px",paddingBottom:"1px",color:"#00DFEB"}}>Level <img src={lvl} style={{width:"13px"}}></img>  </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>1. Perkenalan</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity:0.4 ,marginLeft:"70px",paddingBottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>2. Components</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"50px",paddingBottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a href="/detailvideo" class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} href="/detailvideo" class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>3. Instalasi</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"90px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>  
            </div>  
            <div></div>
            <div>
                <br/>
            <hr class="mt-2 mb-5"></hr>
                <h2 style={{fontWeight:"bold"}}>Minggu 2</h2>
                <br/>
            </div>
            {/* <div className="bg-overlay">
            <div className="text">Konten Terkunci,silahkan selesaikan semua kuis di minggu 1</div>
            </div> */}
            {/* <span  style={{marginTop:"-300%",color:"red"}} class="fas fa-lock"></span> Konten Terkunci, selesaikan semua kuis di Minggu 1 */}
            <div class="row text-center text-lg-left">
            <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>1. Perkenalan</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>2. Components</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"60px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>
                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>3. Instalasi</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"90px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>4. Character</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>  
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>1. Perkenalan</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"70px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>2. Components</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"60px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listA">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>3. Instalasi</span>
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity: 0.4,marginLeft:"90px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div className="d-flex justify-content-center listB">
                        <a class="d-block mb-4 h-100">
                        <img class="img-fluid img-thumbnail plybtn" src={ply} alt=""></img>                            <br/>
                        </a>
                    </div>
                    <a style={{paddingTop:"15px"}} class="d-block mb-4 h-100">
                    <span style={{fontFamily:"Montserrat",fontSize:"15px",fontWeight:"bold"}}>4. Character</span>   
                    <span style={{fontFamily:"Nunito",fontSize:"14px"}}><span className="far fa-clock" style={{opacity:0.4,marginLeft:"80px",paddingbottom:"1px",color:"red"}}></span> 04:32 </span>
                    </a>
                </div>
            </div>
            </div>
                    <br/>
                    <br/>
            </div>
            
        );
    }
}

export default ListVideo;