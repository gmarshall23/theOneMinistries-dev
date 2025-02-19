
import welcome1 from '../../assets/images/welcome1.png'
import welcome2 from '../../assets/images/welcome2.png'
import './welcome.css'

const Welcome = () => {
    return (
        <>
            <section className='container landing-section welcome'>
                <h2>Welcome</h2>

                <div>
                    <blockquote>Hello and welcome to ONE LESS MINISTRIES. This is a faith based website primarily for baptized believers of any denomination. It is also a great tool for people curious and interested about making a decision to become a follower of Jesus Christ.
                    </blockquote>
                </div>
                <div className='row m-0 p-0'>
                    <div className='col-4'>
                        <img className='img img-fluid' src={welcome1} />
                    </div>
                    <blockquote className='col-8'>Psalms 42:1-2 says "My soul thirsts for God, for the Living God. When can I go meet with God?" Our purpose is to appropriate and facilitate that meeting EVERYDAY. We want to influence you to be intentional about your Christian walk and to give you the tools to have regular encounters with God and grow your faith. Right now today, survey after survey, show that less than 20% of believers spend time with the Lord on a daily basis. Imagine your lack of success if you don't spend even 20% of your time in any activity trying to improve. Hence, we refer to this site as your Christian Training Center. We believe we have many tools you will find useful in making God the top priority that he deserves to be and making your spiritual connections strong and useful.
                    </blockquote>
                </div>
                <div className='row m-0 p-0'>
                    <blockquote className='col-8'>Each and every tool and suggestion on this site is supported by scripture and supported by a foundation of the New Covenant of Grace. Again, we encourage you to be conscious and intentional and serious about serving our most gracious Lord by getting to know Him and allowing His will to work His perfect plan for your life. God's grace is awesome and amazing and he wants to share it with you if you will allow it. See below what the site offers, choose to become a member and enjoy its features everyday as often as you like.
                    </blockquote>
                    <div className='col-4'><img src={welcome2} className='img img-fluid rounded '/></div>
                </div>
            </section>
        </>

    )
}

export default Welcome
