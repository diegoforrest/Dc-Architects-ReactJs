import Bg1 from '../img/bg1.jpg';

import House2 from '../img/house2.jpg'
import House3 from '../img/house3.jpg'
import House4 from '../img/house4.jpg'
import House5 from '../img/house5.jpg'

import Service1 from '../img/service1.jpg'
import Service2 from '../img/service2.jpg'
import Service3 from '../img/service3.jpg'
import Service4 from '../img/service4.jpg'
import Service5 from '../img/service5.jpg'
import Service6 from '../img/service6.jpg'
import Service7 from '../img/service7.jpg'
import Service8 from '../img/service8.jpg'

import Luffy from '../img/about.jpg'
import Gojo from '../img/about3.jpg'
import Zoro from '../img/about2.jpg'
import Toji from '../img/about4.jpg'

import FooterGif from '../img/footer.gif'

function Home() {

    const portfolio = [
        {
            title: 'Summer House',
            img: House5
        },
        {
            title: 'Brick House',
            img: House2
        },
        {
            title: 'Renovated',
            img: House3
        },
        {
            title: 'Barn House',
            img: House4
        },
    ]

    const Services1 = [
        {
            title: 'Architectural Design',
            img: Service1
        },
        {
            title: 'Interior Design',
            img: Service2
        },
        {
            title: 'Exterior Design',
            img: Service3
        },
        {
            title: 'Lighting Design',
            img: Service4
        },
    ]
    const Services2 = [
        {
            title: 'AutoCad Service',
            img: Service5
        },
        {
            title: 'Strutural Service',
            img: Service6
        },
        {
            title: 'Energy Distribution',
            img: Service7
        },
        {
            title: 'Electric Power System',
            img: Service8
        },
    ]
    return (
        <>
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }} id="home">
                <img className="w3-image" src={Bg1} alt="Architecture" width="1500" height="800" />
                <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>DC</b></span> <span
                        className="w3-hide-small w3-text-light-grey">Architects</span></h1>
                </div>
            </header >

            <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>

                {/* <!-- Project Section --> */}
                <div className="w3-container w3-padding-32" id="project">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16"
                        style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '2.50em' }}>Portfolio</h3>
                </div>

                <div className="w3-row-padding">
                    {portfolio.map((item, indx) =>
                        <div key={indx} className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">{item.title}</div>
                                <img src={item.img} alt="House" style={{ width: '100%' }} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="w3-row-padding">
                    {portfolio.map((item, indx) =>
                        <div key={indx} className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">{item.title}</div>
                                <img src={item.img} alt="House" style={{ width: '100%' }} />
                            </div>
                        </div>
                    )}
                </div>

                {/* <!-- Services Section --> */}
                <div className="w3-container w3-padding-32" id="services">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16"
                        style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '2.50em' }}>Services</h3>
                </div>

                <div className="w3-row-padding">
                    {Services1.map((item, indx) =>
                        <div key={indx} className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">{item.title}</div>
                                <img src={item.img} alt="Architectural" style={{ width: '100%' }} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="w3-row-padding">
                    {Services2.map((item, indx) =>
                        <div key={indx} className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">{item.title}</div>
                                <img src={item.img} alt="Architectural" style={{ width: '100%' }} />
                            </div>
                        </div>
                    )}
                </div>





                {/* <!-- About Section --> */}
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
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src={Gojo} alt="Gojo" style={{ width: '100%' }} />
                        <h3 style={{ fontWeight: 'bolder' }}>Gojo Satoru</h3>
                        <p className="w3-opacity font-size: 1.15em;">Architect</p>
                        <p style={{ fontSize: '1.15em' }}>&quot;I alone am the honored one. I&apos;m the strongest there is, after all.&quot;</p>
                        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src={Zoro} alt="Zoro" style={{ width: '100%' }} />
                        <h3 style={{ fontWeight: 'bolder' }}>Roronoa Zoro</h3>
                        <p className="w3-opacity font-size: 1.15em;">Engineer</p>
                        <p style={{ fontSize: '1.15em' }}>&quot;I don&apos;t care what the society says. I will survive and do what I want to.&quot;</p>
                        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src={Toji} alt="Toji" style={{ width: '100%' }} />
                        <h3 style={{ fontWeight: 'bolder' }}>Toshi Fushiguro</h3>
                        <p className="w3-opacity">Engineer</p>
                        <p style={{ fontSize: '1.15em' }}>&quot;They would all Bear witness to the Bare flesh of the one who is free.&quot;</p>
                        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    </div>
                </div>


                {/* <!-- Contact Section --> */}
                <div className="w3-container w3-padding-32" id="contact">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16"
                        style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '2.50em' }}>Contact us</h3>
                    <p style={{ fontSize: '1.15em' }}>Ready to bring your vision to life? Contact us today and let&apos;s turn your ideas into
                        reality!</p>
                    <form action="/action_page.php" target="_blank">
                        <input className="w3-input w3-border" style={{ fontSize: '1.25em' }} type="text" placeholder="Name" required
                            name="Name" />
                        <input className="w3-input w3-section w3-border" style={{ fontSize: '1.25em' }} type="text" placeholder="Email" required
                            name="Email" />
                        <input className="w3-input w3-section w3-border" style={{ fontSize: '1.25em' }} type="text" placeholder="Subject"
                            required name="Subject" />
                        <input className="w3-input w3-section w3-border" style={{ fontSize: '1.25em' }} type="text" placeholder="Comment"
                            required name="Comment" />
                        <button className="w3-button w3-black w3-section" type="submit">
                            <i className="fa fa-paper-plane"></i> SEND MESSAGE

                        </button>
                    </form>
                </div>




                {/* <!-- Image of location/map --> */}
                <div className="w3-container">
                </div>
                <img src={FooterGif} alt="footer" style={{ width: '1000x', height: '1000x' }} />


            </div>
        </>
    )
}

export default Home