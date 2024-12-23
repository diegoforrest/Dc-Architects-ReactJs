
import Img2 from '../img/img_2.jpg'
import Img3 from '../img/img_3.jpg'
import Img4 from '../img/img_4.jpg'
import Img5 from '../img/img_5.jpg'
import Img6 from '../img/img_6.jpg'
import Img8 from '../img/img_8.jpg'
import HeroHeader from '../Components/HeroHeader'
function Projects() {

    const imgList = [
        {
            img: Img2,
            header: "Project One",
            desc: 'Construction'
        },
        {
            img: Img3,
            header: "Project Two",
            desc: 'Construction'
        },
        {
            img: Img4,
            header: "Project Three",
            desc: 'Construction'
        },
        {
            img: Img5,
            header: "Project Four",
            desc: 'Construction'
        },
        {
            img: Img6,
            header: "Project Five",
            desc: 'Construction'
        },
        {
            img: Img8,
            header: "Project Six",
            desc: 'Construction'
        },
    ]
    return (
        <>
            <HeroHeader />

            <div className="section sec-5">
                <div className="container">
                    <div className="row mb-5">

                        <div className="col-lg-6 ms-auto">
                            <p>&quot;Power Isn&apos;t Determined By Your Size, But By The Size Of Your Heart And Dreams.&quot;</p>
                        </div>
                    </div>

                    <div className="w3-container w3-padding-32" id="project">
                        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16"
                            style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '2.50em' }}>Accomplishments</h3>
                        <h1 style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '1.50em' }}>Projects</h1>
                    </div>
                    <div className="row g-4">
                        {imgList.map((img, indx) =>

                            <div key={indx} className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="single-portfolio">

                                    <img src={img.img} alt="Image" className="img-fluid" />
                                    <div className="contents">
                                        <h3>{img.header}</h3>
                                        <div className="cat">{img.desc}</div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div >
        </>
    )
}

export default Projects