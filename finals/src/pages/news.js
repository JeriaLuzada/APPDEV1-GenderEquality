import React from 'react';
import Img1 from './img1.jpg'
import Img2 from './img2.jpg'
import Img3 from './img3.jpg'
import Img4 from './img4.jpg'
import Footer from '../components/Footer';

function News() {
    return (
        <div>
            <div className='mt-5'>
                    <h1 className='news' id='news'>NEWS</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-5 mt-3">
                <div className="col">
                    <div className="card h-100">
                        <img src={Img1} className="card-img-top" /><figcaption className='fig'>23 June 2023</figcaption>
                        <div className="card-body">
                            <h5 className="card-title">Urgent reform needed to shield women and children from violence during custody battles</h5><br/>
                            <p className="card-text">An independent UN human rights expert claimed on Friday that "deeply embedded gender bias" in family court systems around the world exposes.... </p>
                            <a href="https://news.un.org/en/story/2023/06/1138057" className="continue-reading">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Img2} className="card-img-top" alt="..." /><figcaption className='fig'>14 June 2023</figcaption>
                        <div className="card-body">
                            <h5 className="card-title">Türk calls for action to enable equal and meaningful participation of women in public life</h5><br/>
                            <p className="card-text">The UN human rights head stated on Wednesday that immediate action is required to eradicate gender-based prejudice against women in public....</p>
                            <a href="https://news.un.org/en/story/2023/06/1137687" className="continue-reading" >Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Img3} className="card-img-top" alt="..." /><figcaption className='fig'>12 June 2023</figcaption>
                        <div className="card-body">
                            <h5 className="card-title">New UN report reveals chronic bias against women over last decade</h5><br/>
                            <p className="card-text">According to a new UN research released on Monday, there has been no progress in the amount of bias against women over the previous ten years, with nearly nine.....</p>
                            <a href="https://news.un.org/en/story/2023/06/1137532" className="continue-reading">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={Img4} className="card-img-top" alt="..." /><figcaption className='fig'>16 June 2023</figcaption>
                        <div className="card-body">
                            <h5 className="card-title">Women suffer disproportionately from ravages of drought, desertification</h5><br/>
                            <p className="card-text">Women's land rights are in the spotlight ahead of the World Day to Combat Desertification and Drought, observed on 17 June, at events around the....</p>
                            <a href="https://news.un.org/en/story/2023/06/1137777" className="continue-reading">Continue Reading</a></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

};

export default News;