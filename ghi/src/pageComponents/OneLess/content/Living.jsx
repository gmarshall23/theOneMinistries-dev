/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import cross from './one-less-assets/cross.jpeg'; // Import the image using ES6 import


const Living = ({scrips}) => {

	useEffect(() => {
		console.log('Living component mounted');
	}, [])

	let scripObj = {}
	for (let s of scrips) {
		scripObj[s.quote] = <span className='tipText' data-tooltip-id="tooltip" data-tooltip-content={s.scripture}>{s.quote}</span>
	}
	return (
		<div className='living'>
			<div className='content-header'>
				<h2><b>Living a Christian Life</b></h2>
				<h4 className="">CONGRATULATIONS NEW CHRISTIAN. WELCOME TO THE FAMILY</h4>
			</div>
			<p className="">LOL... I'm sure you are asking "Now What? what Happens Next? What does it mean to be saved? How do you become as much like Jesus as possible?</p>
			<div className=''>
				<div className='p-3'>
					<img className='img img-fluid col-5' src={cross} alt='cross' />
				</div>
				<div>
					<p className="">Relax and breathe. God is patient and knows you are new in the faith. My strong suggestion is that you develop an immediate mindset of discipline and simplicity. You likely need to push a reset button on your life and habits; this also requires a mindset of toughness because Satan, the enemy, will try to attack in many ways to influence you to return to your old mindset and old activities and old friends, all of which are likely not  amenable to helping you live a Christian life ({scripObj['1 Peter 5:8']}). Here is a list of many of the things I have found to be necessary for living as a new Christian.
					</p>
					<ul className="p-3">
						<li>Read the word EVERYDAY (see <Link className="text-primary testHover" to="/one-way/walk-word">A Walk in the Word</Link> for suggestions), start with Romans 12 which gives explicit instructions to all believers on how to live in the faith. I suggest that you next read the Gospels in this order (John, Matthew, Mark, Luke) followed by the books of Romans and Hebrews to learn about the righteousness of Jesus and the life of Jesus and the new covenant of <u className="tipText" data-tooltip-id="tooltip" data-tooltip-content="Grace - 1. God's unmerited favor. 2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace.</u> Discover who Jesus is, what he did for you, and what he wants to do with your life.

							<p className="px-3 mx-3"><b><em>Understand that Jesus died for three(3) reasons</em></b></p>
							<ol className="p-3 mx-3">
								<li className='py-1'>To be an example to man on how to live as a servant ({scripObj['John 13:5']})</li>
								<li className='py-1'>To reveal God to man ({scripObj['John 14:9-10']})</li>
								<li className='py-1'>To trade places with man ({scripObj['2 Corinthians 5:21']})</li>
							</ol>
						</li>
						<li>Connect with a church. NO EXCEPTIONS. You will fail if you try to live a Christian life alone.</li>
						<li>Talk to a Christian friend daily if possible or use this website to share how God has impacted your today or yesterday. Just share your experiences, hopes, expectations.
							<Link className="text-primary testHover" to="/my-testimony" > My Personal Testimony</Link>,
							<Link className="text-primary testHover" to="oneliners"> One Liners for Meditation</Link>,
							<Link className="text-primary testHover" to="/oneLessEvent"> One Way Event</Link>,
							<Link className="text-primary testHover" to="/confessSins"> Confess my Sins</Link>,
							<Link className="text-primary testHover" to="/prayer"> Prayer Requests</Link>,
							<Link className="text-primary testHover" to="/chatRoom"> Chat Room<span className="pix10 rojo">(placeholder)</span></Link> are all good pages for new Christians to visit regularly.</li>
						<li>Pray and Pray again. Talk to God about literally everything that crosses your mind ({scripObj['1 Thess 5:17']}). Though he already knows your thoughts, he still wants to hear from you. This also helps establish regular communication with God and your will come to know his voice as he speaks through the HOLY SPIRIT, the CHURCH, the BIBLE, CIRCUMSTANCES AND CONFIRMATION of OTHERS (anything else is not of God) and begin to guide your thoughts and behavior. Pray also for others in your life. Pray for those who support you and for those you want to support you.</li>
						<li>Join spiritual recovery groups or mental health counseling if you need to overcome addictions: drugs, alcohol, sex, homosexuality, depression, anger, etc.</li>
						<li>Begin and commit to the process to reduce or eliminate contact and/or interaction with anyone, including family, who is not in support of your Christian journey. This is the toughness part I mentioned earlier. No relationship should be prioritized above your relationship with Jesus Christ. The point bears repeating, in that associating with people who exhibit bad behavior will ALWAYS corrupt your good morals ({scripObj['Eph 4:17-32']}).</li>
					</ul>
				</div>
			</div>
			<div className=''>
				<p className="">There is a song that says, "What a wonderful change in my life has been wrought since Jesus Christ." I think the words are beautiful in that you can check yourself regularly to see if your heart has really changed. Better stated by Jesus in John 3:5-7 where he says that you must be "born again". The way you are cannot serve or please God and being "born again" means God gives you a new heart, a new soul, a new way of thinking, and his Holy Spirit ({scripObj['2 Cor 5:17']}). Please realize this desire to change should be relatively instant yet it is an ongoing process to master as you truly accept God's love and gift of salvation. Some of the changes should look like this:
				</p>
				<ol className="p-3">
					<li>I love Jesus</li>
					<li>I love the bible</li>
					<li>I love other Christians</li>
					<li>I love my enemies</li>
					<li>I love the souls of all people</li>
					<li>I love the pure life</li>
					<li>I love to talk to God.</li>
					<p className="">If you don't love all these things, NO WORRIES, but now you know better how to set your thinking and how to pray more specifically for God to change your heart.</p>
				</ol>

			</div>
			<div className=''>
				<p className=""><b>Never Forget these Truths regarding Your Purpose:</b></p>
				<ol className="">
					<li>You are created for a purpose</li>
					<li> Your purpose is connected to God's purpose. You are created-selected-gifted to fulfill God's purpose not yours.</li>
					<li>Your purpose is to be centered in church. a. every christian is to be involved in ministry ({scripObj['Ephesians 4:11-12']}) b. Therefore, your gifts (Rom 12) + passion ({scripObj['Philippians 2:13']}) + needs (God's, others, community, church) = YOUR MINISTRY.</li>
				</ol>
				<p className="">In personal testimony, know that I got lost for too long a period of time because I trusted in my own way above God's way and paid huge penalties. Please learn from my mistakes. God's word leads to the only path of success. You, and all new Christians, are like the Israelites just on the edge of entering the promised land. God explained it to them and+ said this to them in Joshua 1:8-9. Now knowledge of God's law is a good thing and never leads you wrong as you set your moral compass for good behavior; however, the really cool thing is since Jesus ascended to Heaven, Jesus promised and delivered his gift of grace under the New Covenant. Galatians 2:20 and Colossians 3:1-3 says that you, as a believer, now have Christ living inside of you and the Holy Spirit, who, with your permission, will guide you in every way necessary to stay on the right path. Congratulations to you on making the best decision of your life.</p>
			</div>
			<Tooltip className='' id="tooltip" place="right"
				style={{
					fontSize: '1.25rem',
					maxWidth: '30rem',
					// minWidth: '200px',
					// maxWidth: '400px',
					whiteSpace: 'pre-line',
					color: 'red',
					backgroundColor: '#333',
					borderRadius: '8px',
					padding: '10px',
					textAlign: 'left',
				}} />
		</div>
	)
}

export default Living
