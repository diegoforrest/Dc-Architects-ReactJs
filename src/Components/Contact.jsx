import HeroHeader from "./HeroHeader"

function Contact() {
    return (
        <>
            <HeroHeader />
            <div className="section sec-contact" id="contact">
                <div className="container">
                    <div className="row mb-5 justify-content-center text-center">
                        <div className="col-lg-5">
                            <h2 className="heading">Get in touch</h2>
                            <p className="text-black-50">Ready to bring your vision to life? Contact us today and let&apos;s turn your
                                ideas into reality!</p>
                        </div>
                    </div>
                    <form className="row">

                        <div className="col-md-6 col-lg-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="ps-3 mb-2">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className="mb-3">
                                <label htmlFor="email" className="ps-3 mb-2">Email</label>
                                <input type="text" className="form-control" id="email" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className="mb-3">
                                <label htmlFor="phone" className="ps-3 mb-2">Phone</label>
                                <input type="text" className="form-control" id="phone" />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className="mb-3">
                                <label htmlFor="subject" className="ps-3 mb-2">Subject</label>
                                <input type="text" className="form-control" id="subject" />
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-12">
                            <div className="mb-3">
                                <label htmlFor="message" className="ps-3 mb-2">Message</label>
                                <textarea className="form-control" name="" id="message" cols="30" rows="7"></textarea>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <input type="submit" value="Send message" className="btn btn-primary" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact