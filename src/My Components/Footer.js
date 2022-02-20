import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="bd-footer py-5 bg-light">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-5 mb-5">
                            <a href='/' className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none">
                                <img className="logo2" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-news-anchor-radio-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt='...' />
                                <span className="fs-5 fw-bold">NewsRoom</span>
                            </a>
                            <ul className="list-unstyled small text-muted">
                                <li className="mb-2">Designed and built with love by <a className="text-decoration-none"
                                    target="_blank" href="https://github.com/Prabhkirat0530">prabhkirat</a>.
                                </li>
                                <li className="mb-2">Code licensed, docs
                                    <a className="text-decoration-none"
                                        target="_blank" href="https://github.com/Prabhkirat0530" rel="license noopener">Github
                                    </a>.
                                </li>
                                <li className="mb-2">Currently <b>v1.0.0</b></li>
                            </ul>
                        </div>
                        <div className="col-5 col-lg-2 offset-lg-1 mb-3">
                            <h5>Navigation</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a className="text-decoration-none" href="/">Home</a></li>
                                <li className="mb-2"><a className="text-decoration-none" href="/Articles">Articles</a>
                                </li>
                                <li className="mb-2"><a className="text-decoration-none" href="/Headlines">Headlines</a></li>
                            </ul>
                        </div>
                        <div className="col-5 col-lg-2 mb-3">
                            <h5>Sources</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a className="text-decoration-none" target="_blank" href="https://www.aajtak.in">Aaj Tak</a></li>
                                <li className="mb-2"><a className="text-decoration-none" target="_blank" href="http://ndtv.com">NDTV</a></li>
                                <li className="mb-2"><a className="text-decoration-none" target="_blank" href="/">Wikipedia</a></li>
                            </ul>
                        </div>
                        <div className="col-5 col-lg-2 mb-3">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a className="text-decoration-none"
                                    target="_blank" href="https://github.com/Prabhkirat0530">Github</a>
                                </li>
                                <li className="mb-2"><a className="text-decoration-none"
                                    target="_blank" href="https://www.linkedin.com/in/prabhkirat-singh-12a5691b7/">Linkedin</a>
                                </li>
                                <li className="mb-2"><a className="text-decoration-none"
                                    target="_blank" href="https://api.whatsapp.com/send?phone=+9518179383&amp;text=Hi there! I have a question :)">Whatsapp</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}
