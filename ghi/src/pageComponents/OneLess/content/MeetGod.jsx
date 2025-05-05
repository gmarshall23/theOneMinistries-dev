/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { Carousel, Accordion, Tabs, Tab } from 'react-bootstrap';
import { slides } from './meetGodData.js'; // Assuming you have a JSON file with slide data
import './content.css';

const MeetGod = ({scrips}) => {
  const carouselRef = useRef(null);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  console.log('scrips:', scrips);
  useEffect(() => {
    console.log('MeetGod component mounted');

    const carouselElement = carouselRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsCarouselVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (carouselRef.current) {
      observer.observe(carouselElement);
    }
    return () => {
      if (carouselElement) observer.unobserve(carouselElement);
    };
  }, []);
  const scripObj = {};
	for (let s of scrips) {
		scripObj[s.quote] = <span className='tipText' data-tooltip-id="tooltip" data-tooltip-content={s.scripture}>{s.quote}</span>
	}
  return (
    <div className='meetGod'>
      <h2>Hello it&apos;s GOD, Good to Meet You</h2>
      <p >
        True Story...Years ago, I moved into a neighborhood with my wife and three kids. I was not new to the city, but I was not familiar with the neighborhood and did not know anyone. I suppose it was a two or three days after moving in that the doorbell rang and it was the woman from across the street. She handed me a cake and a note and quickly walked away before I could even get a word out. My wife and I read the note that simply said "welcome to the neighborhood" and then upon my insistence, we threw the cake away. I thought, "Lady, I don't know you and why do you think I want anything from you let alone eat something from you?" And I had several other "why" questions after that. The root of my position came from a place of distrust and concern of the unknown.
        <br /><br />This is how many of us approach our relationship with God. We are skeptical of receiving a free gift from an unknown entity or perhaps, in a moment of emotion, we accept the gift of salvation only to realize that you have made a lifetime decision to serve a God that you don't really know or trust.
        <br /><br />That's ok, its perfectly human and perfectly normal. God wants you to know him just as well as he already knows you ({scripObj['Psalms 139:13-16']}) and the cool part is that it is absolutely possible.
        <br /><br />The Bible reveals the nature of God as a spirit, unity, and trinity. He is a spirit--a personal, infinite being {scripObj['John 4:24']}(); He is one--one in substance or nature and incapable of being divided into parts (Deuteronomy 6:4); and he is three--eternally existing in three coequal persons {scripObj['Matthew 28:19']}(). While great mystery surrounds God's nature, it is reassuring to know that our God is sovereign and above us.
        <br /><br />God's attributes are merely words we use to describe how God is and how he acts toward us. Among these attributes are love, holiness, constancy, justice, truth, eternalness, omniscience (all-knowing), omnipresence (all-presence), and omnipotence (all-powerful). The fact that we can grasp and understand this much about God is evidence of God's desire that all people may know him.
      </p>
      <h3 className="p-2 text-start">Here is why we are in pursuit to get to know our Creator</h3>
      <ol className='p-2'>
        <li>Before you make a lifetime decision, you need to get to know who God is</li>
        <li>Before you make a lifetime decision, you need to know why choose God</li>
        <li>Before you make a lifetime decision, you need to know what God will do
          <ul className='px-4'>
            <li>{scripObj['John 4:24']} - God is a spirit</li>
            <li>{scripObj['Deut 6:4']}, {scripObj['1 Cor 8:4-6']} - There is one God</li>
            <li>{scripObj['Rom 3:10']}, {scripObj['Rom 3:23']} - We are all lost</li>
            <li>{scripObj['Acts 4:12']}, {scripObj['2 Pet 3:9']}, {scripObj['1 Tim 2:4']} - God desires to save all people</li>
          </ul>
        </li>
      </ol>

      <h3 className="p-2 text-start">Initially, I would ask that you focus on a few specific things as you meet our creator.</h3>
      <div className='border border-2 border-dark rounded'>
        <p className='p-4'><b><em> First, look at what He says in his own words about Himself.</em></b></p>
        <div className='myCarousel border border-2 border-dark rounded' ref={carouselRef}>
          <Carousel interval={isCarouselVisible ? 1000 : null} fade className='border border-2 border-dark rounded'>
            {slides.map((slide, idx) => (
              <Carousel.Item key={idx} className='carousel-item'>
                <img
                  className="d-block w-100"
                  src={slide.img}
                  alt={`Slide ${idx}`}
                />
                <Carousel.Caption>
                  <h3>Slide {idx}</h3>
                  <p className='slide-caption'>{slide.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <div className='my-4 border border-2 border-dark rounded'>
        <p className='p-4'><b><em>Second, Let's better identify the perspective from which you are coming from which is likely one or more of these…</em></b></p>
        <Accordion className='my-2'>
          <Accordion.Item eventKey="0">
            <Accordion.Header><p className='px-4'>1. Before I make a lifetime commitment, I want to know God on an intellectual level, How do I know he really exists? (Rom 1:20)</p></Accordion.Header>
            <Accordion.Body><p className='px-5'><b>a.</b> FACT: Every modern day metric like archaeology and the dead sea scrolls, only prove the existence of God. Conversely, nothing refutes His existence.</p>
              <div className='px-5'>
                <p className='px-5'><b>1.</b> Romans 1:20 - For since the creation of the world God's invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made,  so that people are without excuse.</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className=''><p className='px-4'>2. Before I make a lifetime commitment, I want to know He is the only God, How do I know he is the only way to eternal life? (John 14:6, 2 Kings 19:5,19, Isa 37:16, 1 Tim 2:5, Deut 4:32, Rom 10:9-10)</p></Accordion.Header>
            <Accordion.Body>
              <ol className='px-5 ol-lettered bold-marker'>
                <li>John 14:6 - Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.</li>
                <li>1 Tim 2:5 - For there is one God and one mediator between God and mankind, the man Christ Jesus</li>
                <li>2 Kings 19:19 - Now, Lord our God, deliver us from his hand, so that all the kingdoms of the earth may know that you alone, Lord, are God.</li>
                <li>Isaiah 37:16 - Lord Almighty, the God of Israel, enthroned between the cherubim, you alone are God over all the kingdoms of the earth. You have made heaven and earth.</li>
                <li>Deuteronomy 4:32 - Ask now about the former days, long before your time, from the day God created human beings on the earth; ask from one end of the heavens to the other. Has anything so great as this ever happened, or has anything like it ever been heard of?</li>
                <li>Romans 10:9-10 If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><p className='px-4'>3. Before I make a lifetime commitment, I want to know He can deliver for me, How do I know I can really trust Him with EVERYTHING? (Psalms 111:7, Prov 3:5, Rom 8:28, Deut 31:8)</p></Accordion.Header>
            <Accordion.Body>
              <p className='px-5'><b>a.</b> FACT: To trust in God is to believe in His reliability, strength, and ability.</p>
              <div className='px-5'>
                <ol className='px-5  bold-marker'>
                  <li>Psalms 111:7 - The works of his hands are faithful and just; all his precepts are trustworthy.</li>
                  <li>Proverbs 3:5 - Trust in the Lord with all your heart and lean not on your own understanding;</li>
                  <li>Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose. (love and trust are synonymous)</li>
                  <li>Deut 31:8 - The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.</li>
                </ol>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='border border-2 border-dark rounded'>
        <p className='p-4'><b><em>Finally, I think it is important to see and understand many of the promises of God to His people. There are many and some are conditional as well as some are unconditional. But God truly wants you to know what you can expect while on your Christian journey. I cannot choose  for you but when I understood that God really does all these things for His people and that He has a perfect track record… I was ALL IN!</em></b></p>

        <h3 className="p-2 ">Gods Promises</h3>
        <Tabs
          id="fill-tab"
          className="mb-3"
          fill
        >
          <Tab eventKey="gods-presence" title="God's Presence">
            <ul>
              <li>“Never will I leave you; never will I forsake you.” Hebrews 13:5</li>
              <li>“So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.” Isaiah 41:10</li>
            </ul>
          </Tab>
          <Tab eventKey="salvation" title="Salvation & Eternal Life">
            <ul>
              <li>“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.” John 3:16</li>
              <li>“Everyone who calls on the name of the Lord will be saved.” Romans 10:13</li>
            </ul>
          </Tab>
          <Tab eventKey="forgiveness" title="Forgiveness of Sins">
            <ul>
              <li>“If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.” 1 John 1:9</li>
              <li>-“As far as the east is from the west, so far has he removed our transgressions from us.” Psalm 103:12</li>
            </ul>
          </Tab>
          <Tab eventKey="strength" title="Strength & Help in Difficult Times" >
            <ul>
              <li>“I can do all this through him who gives me strength.” Philippians 4:13</li>
              <li>“God is our refuge and strength, an ever-present help in trouble.” Psalm 46:1</li>
            </ul>
          </Tab>
          <Tab eventKey="peace" title="Peace">
            <ul>
              <li>“And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.” Philippians 4:7</li>
              <li>-“You will keep in perfect peace those whose minds are steadfast, because they trust in you.”Isaiah  26:3</li>
            </ul>
          </Tab>
          <Tab eventKey="provision" title="Provision">
            <ul>
              <li>“And my God will meet all your needs according to the riches of his glory in Christ Jesus.” Philippians 4:19</li>
              <li>“The Lord is my shepherd, I lack nothing.” Psalm 23:1</li>
            </ul>
          </Tab>
          <Tab eventKey="wisdom" title="Wisdom & Guidance">
            <ul>
              <li>“If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.” James 1:5</li>
              <li>“Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.” Proverbs 3:5-6</li>
            </ul>
          </Tab>
          <Tab eventKey="healing" title="Healing" >
            <ul>
              <li>“He heals the brokenhearted and binds up their wounds.” Psalm 147:3</li>
              <li>“But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.” Isaiah 53:5</li>
            </ul>
          </Tab>
          <Tab eventKey="victory" title="Victory Over Evil">
            <ul>
              <li>“Submit yourselves, then, to God. Resist the devil, and he will flee from you.” James 4:7</li>
              <li>“No weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.” Isaiah 54:17</li>
            </ul>
          </Tab>
          <Tab eventKey="eternal-reward" title="Eternal Reward & Heaven" >
            <ul>
              <li>“My Father's house has many rooms; if that were not so, would I have told you that I am going there to prepare a place for you? And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am.” John 14:2-3</li>
              <li>“Be faithful, even to the point of death, and I will give you life as your victor''s crown.” Revelation 2:10</li>
            </ul>
          </Tab>
        </Tabs>

      </div>
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
  );
};

export default MeetGod;
