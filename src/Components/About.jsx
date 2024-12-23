import Luffy from '../img/about.jpg'
import Gojo from '../img/about3.jpg'
import Zoro from '../img/about2.jpg'
import Toji from '../img/about4.jpg'
import HeroHeader from './HeroHeader'

function About() {
    return (
        <>
            <HeroHeader />
            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16"
                    style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '2.50em' }}>Behind those Beautiful Works</h3>
                <p style={{ fontSize: '1em' }}>DC Architecture and Building Services is dedicated to crafting exceptional
                    environments that seamlessly blend functionality with aesthetic beauty. Our expertise lies in both architectural
                    design and comprehensive building services, ensuring that each project we undertake is a true reflection of our
                    clients&apos; vision and needs. We pride ourselves on our deep understanding of architectural principles, which
                    allows us to approach every project with creativity, precision, and a focus on delivering the highest quality.
                    Our process begins with a strong emphasis on the initial concept. We take the time to explore various design
                    possibilities, carefully balancing form and function to create spaces that are both efficient and elegant.
                    Throughout the planning stages, we prioritize sustainability, incorporating eco-friendly practices and materials
                    wherever possible to ensure that our projects are not only beautiful but also environmentally responsible. Our
                    commitment to excellence extends beyond the completion of the project. We believe in building lasting
                    relationships with our clients, offering support and guidance long after the final handover. At DC Architecture
                    and Building Services, our ultimate goal is to create spaces that stand the test of time, serving as a source of
                    pride and inspiration for years to come. Whether you are envisioning a commercial development, a residential
                    oasis, or a renovation that breathes new life into an existing space, we are here to turn your dream into
                    reality, one meticulously crafted detail at a time.
                </p>
            </div>

            <div className="w3-row-padding w3-grayscale">
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <img src={Luffy} alt="Luffy" style={{ width: '100%' }} />
                    <h3 style={{ fontWeight: 'bolder' }}>Monkey D. Luffy</h3>
                    <p className="w3-opacity font-size: 1.15em;">CEO & Founder</p>
                    <p style={{ fontSize: '1.15em' }}>&quot;If You Don&apos;t Take Risks, You Can&apos;t Create a Future.&quot;</p>
                    <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    <ul className="social-2 list-unstyled mb-5">
                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                        <li><a href="#"><span className="icon-dribbble"></span></a></li>
                        <li><a href="#"><span className="icon-linkedin"></span></a></li>
                    </ul>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <img src={Gojo} alt="Gojo" style={{ width: '100%' }} />
                    <h3 style={{ fontWeight: 'bolder' }}>Gojo Satoru</h3>
                    <p className="w3-opacity font-size: 1.15em;">Architect</p>
                    <p style={{ fontSize: '1.15em' }}>&quot;I alone am the honored one. I&apos;m the strongest there is, after all.&quot;</p>
                    <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    <ul className="social-2 list-unstyled mb-5">
                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                        <li><a href="#"><span className="icon-dribbble"></span></a></li>
                        <li><a href="#"><span className="icon-linkedin"></span></a></li>
                    </ul>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <img src={Zoro} alt="Zoro" style={{ width: '100%' }} />
                    <h3 style={{ fontWeight: 'bolder' }}>Roronoa Zoro</h3>
                    <p className="w3-opacity font-size: 1.15em;">Engineer</p>
                    <p style={{ fontSize: '1.15em' }}>&quot;I don&apos;t care what the society says. I will survive and do what I want to.&quot;</p>
                    <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    <ul className="social-2 list-unstyled mb-5">
                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                        <li><a href="#"><span className="icon-dribbble"></span></a></li>
                        <li><a href="#"><span className="icon-linkedin"></span></a></li>
                    </ul>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <img src={Toji} alt="Toji" style={{ width: '100%' }} />
                    <h3 style={{ fontWeight: 'bolder' }}>Toshi Fushiguro</h3>
                    <p className="w3-opacity">Engineer</p>
                    <p style={{ fontSize: '1.15em' }}>&quot;They would all Bear witness to the Bare flesh of the one who is free.&quot;</p>
                    <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    <ul className="social-2 list-unstyled mb-5">
                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                        <li><a href="#"><span className="icon-dribbble"></span></a></li>
                        <li><a href="#"><span className="icon-linkedin"></span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About