/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import cross from './one-less-assets/cross.jpeg'; // Import the image using ES6 import

// This component is the Salvation page content
const Salvation = ({ user, scrips }) => {
	useEffect(() => {
		console.log('Salvation component mounted');
	}, []);
	// build object of scriptures to add tooltips to the quotes
	const scripObj = {};
	for (let s of scrips) {
		scripObj[s.quote] = <span className='tipText' data-tooltip-id="tooltip" data-tooltip-content={s.scripture}>{s.quote}</span>
	}

	return (
		<div className="salvation-content">
			<div className='content-header'>
				<h2><b>Plan of Salvation</b></h2>
				<h3>Why Should God Let You Into Heaven?</h3>
			</div>
			<div className=''>
				<blockquote className='p-3'>
					<p className=''>
						My Friend, I am glad you parked on this page. I say this without drama or exaggeration, but this is the most important question you will ever consider, “Why should God let you into Heaven?” It is also  the most important decision you will ever make as it has everything to do with where you will spend eternity. Please consider it carefully and soberly as this needs to be more than an emotional decision. If you are unsure or want to know more about who God is, click here: Meet God and get to know Him better. Understand just how much He loves you {scripObj['John 3:16']} and that He created you {scripObj['Gen 1:26-27']}, {scripObj['Jer 1:5']} and that He loved you first (I John 4:19). Truthfully, God is the literal definition of love (1 John 4:8,16). OK, so if you are ready, walk through the list of questions below…And yes, God is excited and ready for you also.
					</p>

				</blockquote>
				<p className='py-2'><b>OK, so if you are ready, walk through the list of questions below…And yes, God is excited and ready for you also.</b></p>
			</div>
			<div className=''>
				<ol className='px-3'>
					<li className=''>Do you declare that YOU have sinned and fallen short of the glory of God? ({scripObj['Romans 3:23']})</li>
					<li>Do you agree that the wages of YOUR sin is death and that the gift of God is eternal life;
						understanding that wages are worked for and gifts cannot be earned? ({scripObj['Romans 6:23']})</li>
					<li>Do you believe that God has the power to gift you salvation?  ({scripObj['Romans 1:16']})</li>
					<li>Do you believe that Jesus Christ died for your sins? ({scripObj['1 Corinthians 15:3-5']}, {scripObj['Romans 5:8']})</li>
				</ol>
				<p ><b>After considering the questions, if you are in agreement then continue...</b></p>
			</div>
			<div className='row p-0 m-0 sec2'>
				<div className='col-5'><img className='img' src={cross} alt='cross' width={'100%'} /></div>
				<div className='col-7'>
					<p >Romans 10:9-13 says: If you declare with
						your mouth, &quot;Jesus is Lord,&quot; and believe in your heart that God
						raised him from the dead, you will be saved. For it is with your heart that you believe and are justified,
						and it is with your mouth that you profess your <u className="tipText"
							data-tooltip-id="tooltip" data-tooltip-content="Faith:
						1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)
						2. Believing without seeing.
						3. Taking God at his Word (the bible).
						4. Hope with expectations">faith</u> and are saved.
					</p>
					<p >Ephesians 2:8-9 says: For it is by <u className="tipText" data-tooltip-id="tooltip" data-tooltip-content="Grace:
					1. God's unmerited favor.
					2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace</u>  you have been saved, through <u className="tipText"
							data-tooltip-id="tooltip" data-tooltip-content="Faith:
					1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)
					2. Believing without seeing.
					3. Taking God at his Word (the bible).
					4. Hope with expectations">faith</u> -- and this is not from yourselves, it is the gift of God -- not by works, so that no one can boast.</p>
					<p >Pray the prayer out loud from Romans 10 sincerely.</p>
					<p ><u className="tipText" data-tooltip-id="tooltip" data-tooltip-content="Confess - CONFESS YOUR SINS:
					1. To freely agree or acknowledge that you violated God's law by your willful act.
					2. Display real sorrow over your sin.
					3. Ask God to cover your sin with the blood of Jesus and forgive you.
					4. Faithfully believe that God has heard you and will restore you" >Confess</u> that you are a sinner.</p>
					<p >Believe in your heart that Jesus is the son of God.</p>
					<p >Beleive in your heart that Jesus died on the cross for your sins.</p>
					<p >Believe in your heart that God <u className="tipText" data-tooltip-id="tooltip" data-tooltip-content="Ressurection - RESSURECT / RESSURECTED / RESSURECTION - To bring One back to life from death NEVER to die again. Jesus Christ is the only One ever resurrected. All others brought back to life from death have died again permanently.">ressurected</u> Jesus from the dead.</p>
				</div>
			</div>

			<div className=''>
				<p ><b>Welcome my brother or sister. <em>YOU ARE SAVED. You have just accomplished the first act of
					obedience to the Lord.</em></b></p>
				<br />
				<p >Read these scriptures to get a more complete picture and understanding of this gift you have just
					received from the Lord your God. I suggest using an NLT version of the Bible for better clarity and understanding.
				</p>
				<ol className="p-3">
					<li>{scripObj['John 3:16-17']}</li>
					<li>{scripObj['Acts 4:12']}</li>
					<li>{scripObj['Romans 5:17-21']}</li>
					<li>{scripObj['Romans 10:9-13']}</li>
					<li>{scripObj['Ephesians 1:13']}</li>
				</ol>
			</div>
			<p >Next, go the <Link className="text-primary" to="/Living">Living</Link> page to discover what your next steps should be after giving your life to Jesus Christ.</p>
			{/* react-bootstrap ToolTip component used for scriptures and definitions */}
			<Tooltip className='' id="tooltip" place="right"
				style={{
					fontSize: '1.25rem',
					maxWidth: '30rem',
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

export default Salvation
