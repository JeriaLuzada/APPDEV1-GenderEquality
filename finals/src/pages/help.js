import React from 'react'
import educ from './educ.png'
import econ from './econ.png'
import legal from './legal.png'
import chall from './chall.png'
import eng from './eng.png'
import inter from './inter.png'
import './App.css'

export default function Help({ isDarkMode }) {
    return (
        <div>
            <div className={`title ${isDarkMode ? 'dark-mode' : 'help'}`}>
                <h1 style={{ paddingBottom: '30px'}}>How Can We Help</h1>
            </div>
            <div className='help-content row justify-content-evenly help-container'>
                <div className="col-5 ">
                    <div className={`help-mode ${isDarkMode ? 'text2' : 'text1'}`}>
                        <img className="worm" src={educ} />
                        <h3 className='text1'>Educational and Awareness</h3>
                        <p className='text2'>Promote inclusive and informed education on gender, consent, and relationships, while combating biases and discrimination through public initiatives and integrating gender equality into school curricula.</p>
                    </div>
                    <div className={`help-mode ${isDarkMode ? 'text2' : 'text1'}`}>
                        <img className="worm" src={econ} />
                        <h3 className='text1'>Economic Empowerment</h3>
                        <p className='text2'>Promote gender equality through advocating for fair pay, improved working conditions, women's entrepreneurship support, and inclusion in leadership positions.</p>
                    </div>
                    <div className={`help-mode ${isDarkMode ? 'text2' : 'text1'}`}>
                        <img className="worm" src={legal} />
                        <h3 className='text1'>Legal Reforms and Policies</h3>
                        <p className='text2'>Promote and enforce laws against gender-based discrimination and violence, allocate resources for gender equality programs through gender-responsive budgeting, and establish policies for work-life balance, parental leave, and affordable childcare.</p>
                    </div>
                </div>
                <div className="col-5">
                    <div className={`help-mode ${isDarkMode ? 'text2' : 'text1'}`}>
                        <img className="worm" src={chall} />
                        <h3 className='text1'>Challenging Gender Stereotypes</h3>
                        <p className='text2'>Advocate for inclusive gender portrayals in media, engage men in care giving, and endorse efforts that challenge traditional gender norms and promote gender diversity.</p>
                    </div>
                    <div className={`help-mode ${isDarkMode ? 'text2' : 'text1'}`}>
                        <img className="worm" src={eng} />
                        <h3 className='text1'>Engaging Men and Boys</h3>
                        <p className='text2'>
                            Promote male engagement in gender equality efforts, fostering awareness of toxic masculinity, healthy relationships, and supporting men's groups working towards gender equality.</p>
                    </div>
                    <div className={`help-mode ${isDarkMode ? 'text2' : 'text1'}`}>
                        <img className="worm" src={inter} />
                        <h3 className='text1'>Intersectionality and Inclusivity</h3>
                        <p className='text2'>Promote inclusivity and accessibility in gender equality initiatives by acknowledging and addressing the unique experiences and challenges of individuals at the intersections of gender with race, ethnicity, sexuality, disability, etc.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}