/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './about.css'
import Header from '../../components/Header'

const About = ({ user }) => {
  return (
    <>
    <header>
        <Header user={user} />
      </header>
      <main className='about-section about-main'>
        <h1 >About The One Ministries</h1>
        <h2 className='text-start'>The One Ministries Mission Statement</h2>
        <blockquote>
          <p>"The One Minisitries mission is to empower individuals to cultivate a daily, intentional relationship with God by providing scripturally grounded tools and resources, fostering spiritual growth, and facilitating transformative encounters with the Living God."</p>
        </blockquote>
        <h2 className='text-start'> MY Goals and Objectives for a YOU</h2>
        <ol>
          <li>To Deepen Daily Devotion: Encourage you to engage in daily Bible reading and prayer, enhancing your personal relationship with God.</li>
          <li>To Provide Scriptural Tools: Offer resources such as devotionals, confession guides, and meditation prompts to support you in your spiritual journey.</li>
          <li>To Foster Community Engagement: Create opportunities for you to connect, share experiences, and support others in their faith walk.</li>
          <li>To Encourage Intentional Living: Motivate you to consciously reduce sinful behaviors and align your actions with Christian teachings.</li>
        </ol>
        <h2 className='text-start'>Why We Created This Website</h2>
        <ul>
          <li>Personal Transformation: Inspired by my profound spiritual awakening during a challenging period, leading to a Spirit led desire to share tools that facilitate the faith journey of myself and others.</li>
          <li>Addressing a Spiritual Need: Recognizing that less than 20% of believers engage in daily time with the Lord, the website aims to bridge this gap by providing accessible resources.</li>
          <li>Scripturally Supported Guidance: To offer content firmly rooted in scripture and the New Covenant of Grace, ensuring theological soundness and spiritual enrichment.</li>
          <li>Promoting Intentional Faith Practices: Encouraging believers to be deliberate in their spiritual disciplines, leading to a more profound and authentic Christian life.</li>
        </ul>
        <p className='text-start text-indent p-5'><em>By aligning with these mission components, goals, and foundational reasons, THE ONE MINISTRIES seeks to be a beacon for believers and seekers alike, guiding them toward a deeper, more intentional relationship with God.</em></p>
      </main>
    </>
  )
}

export default About
