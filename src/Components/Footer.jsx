import '../css/Footer.css'

function Footer() {
    return (
        <footer className="w3-container w3-black w3-padding-32">
            <div className="w3-row footer-first">
                {/* <!-- First Column: DC Architects --> */}
                <div className="w3-col l3 m6 col-cont">
                    <h2 className="w3-text-white">DC Architects -</h2>
                    <div className='links-cont' style={{ textAlign: 'left' }}>
                        <p className="w3-text-light-grey" style={{ opacity: '0.7', fontSize: '1.50em' }}>&quot;Power Isn&apos;t Determined By Your Size,
                            But By The Size Of Your Heart And Dreams.&quot;</p>
                        <div className="w3-center w3-padding-16 left-col-cont">
                            <p className="w3-text-white" style={{ fontSize: '1.50em' }}>Connect with us</p>
                            <a href="https://x.com/diegod_cruzz" className="ftco-animate" ><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/CruzDiego22/" className="ftco-animate"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/diegod.666/" className="ftco-animate"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/diego-forrest-cruz-897172211/" className="ftco-animate"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Column: Links --> */}
                <div className="w3-col l3 m6 col-cont"  >
                    <h2 className="w3-text-white">Links</h2>
                    <div className='links-cont' style={{ textAlign: 'center' }}>
                        <ul className="redirect-links-cont">
                            <li><a href="#" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Home</a></li>
                            <li><a href="projects.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Portfolio</a></li>
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Services</a></li>
                            <li><a href="about.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> About</a></li>
                            <li><a href="contact.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Third Column: Services --> */}
                <div className="w3-col l3 m6 col-cont" >
                    <h2 className="w3-text-white">Services</h2>
                    <div className='links-cont' style={{ textAlign: 'center' }}>
                        <ul className="redirect-links-cont">
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Architectural Design</a></li>
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Interior Design</a></li>
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Exterior Design</a></li>
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Lighting Design</a></li>
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> AutoCAD Service</a></li>
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Structural Service</a></li>
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Energy Distribution</a></li>
                            <li><a href="services.html" className="w3-text-white links"><i className="fas fa-arrow-right w3-text-grey"></i> Electric Power System</a></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Fourth Column: Have a Question --> */}
                <div className="w3-col l3 m6 col-cont question-cont" >
                    <h2 className="w3-text-white">Have a Question?</h2>
                    <div className='links-cont' style={{ textAlign: 'left' }}>
                        <ul className="redirect-links-cont">
                            <li>
                                <i className="fas fa-map-marker-alt w3-text-grey"></i>
                                <span className="w3-text-white" >DBB-B, 4115 West Ave, Dasmariñas,
                                    Cavite</span>
                            </li>
                            <li>
                                <i className="fas fa-phone w3-text-grey"></i>
                                <span className="w3-text-white" >+63 9123456789</span>
                            </li>
                            <li>
                                <i className="fas fa-envelope w3-text-grey"></i>
                                <span className="w3-text-white" >dcarchitects@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w3-center w3-padding-16 w3-black">
                <p>Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script> All rights reserved | This is made with <i
                        className="fa fa-heart w3-text-red"></i> by <a href="https://www.facebook.com/CruzDiego22/">Diego Cruz</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer