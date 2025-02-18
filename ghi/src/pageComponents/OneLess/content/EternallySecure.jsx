import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const EternallySecure = () => {
  const [scrips, setScrips] = useState([]);
  let scripObj = {}
  const getData = async () => {
    // Get Scriptures from database and Put scriptures on the page //
    const resp = await fetch('http://localhost:4040/get_scriptures')
    const data = await resp.json()
    setScrips(data)
  }
  useEffect(() => {
    getData()
  }, [])

  for (let s of scrips) {
    scripObj[s.quote] = <span data-toggle="tooltip" className="testHover" href="#" title={s.scripture}>{s.quote}</span>
  }

  return (
    <div>
      <h1>Eternally Secure<br /><span className="pix15">How Do You Know You Are Saved?</span></h1>
      <p className="white">I John 5:13 says: I <em className="chartreuse">write</em> these things to you who <em
        className="chartreuse">believe</em> in the name of the <em className="chartreuse">Son of God</em> so that you may <em
        className="chartreuse">know</em> that you have <em className="chartreuse">eternal life</em>.</p>
      <p className="white">For whatever reason, when it comes to knowledge of spiritual things we look for an emotional response
        or feeling. It is quite possible that you may feel emotion and that is great, yet God's truths are always rooted in
        scripture. The highlighted words above are THE proof positive that you need in order to confirm your Salvation
        should you ever have reason to question it or doubt it. Read the supporting scriptures and verify without a doubt that your Eternal Life is SECURE.</p>
      <p className="chartreuse">WRITE: {scripObj['2 Peter 1:19-21']}</p>
      <p className="chartreuse">BELIEVE: {scripObj['John 11:25']} / {scripObj['John 3:16']}/ {scripObj['Acts 16:31']} / {scripObj['John 3:14-16']}/ {scripObj['John 20:31']}</p>
      <p className="chartreuse">SON OF GOD: Trust Completely in Jesus not self. Faith Requires an Object to believe in. The object is Jesus Christ. {scripObj['Acts 4:8-12']}.</p>
      <p className="chartreuse">KNOW: {scripObj['1 John 5:13']} / {scripObj['1 John 2:5']} /{scripObj['1 John 2:20-21']} / {scripObj['1 John 4:13']}</p>
      <p className="chartreuse">ETERNAL LIFE: {scripObj['1 John 5:12']} / {scripObj['John 10:10']} / {scripObj['2 Corinthians 13:5']} (test yourself - do you have and fruit or any works?)</p>
      <p className="white">The reasons you question your salvation in the first place likely stems from one of the items on the list below:</p>
      <ol>
        <li className="white">Doubt - Conviction by the Holy Spirit ({scripObj['John 16:8']})</li>
        <li className="white">Contradiction in your lifestyle - Not Living Right ({scripObj['Galatians 5:19-21']})</li>
        <li className="white">Confusion - Not sure what Salvation really is thinking that you must earn it ({scripObj['John 16:28']} / {scripObj['1 John 4:10']})</li>
        <li className="white">Condemnation of Satan - Doubt, fear, and emptiness ({scripObj['John 8:44']})</li>
      </ol>
      <p className="white"><img className="cloud" src="../images/cross.jpeg" alt="church"></img>However, if you chose this page  you likely are aware of the statements from:</p>
      <p className="darkBlue pix10"><u>Hebrews 6:4-6</u> says "for those who have once been enlightened, who have shared in the Holy Spirit, who
        have tasted the goodness of the word of God and the powers of the coming age and who have fallen away, to be brought
        back to repentance. To their loss they are crucifying the Son of God all over again and subjecting him to public
        disgrace."</p>
      <p className="darkBlue pix10"><u>Hebrews 10:26-27</u> says, "If we deliberately keep on sinning after we have received the knowledge of
        the truth, no sacrifice for sin is left, but only a fearful expectation of judgement and of raging fire that will consume the enemies of God..."</p>
      <p className="darkBlue pix10"><u>2 Peter 2:20-21</u> says, "If they escaped the corruption of the world by knowing our Lord and Savior Jesus Christ and are agian entangled in it and are overcome, they are worse off at the end than they were at the beginning. It would have been better for them not to have known the way of righteousness than to have known it and then to turn their backs on the sacred command that was passed on to them."</p>
      <p className="white">Though, we cannot unhear such strong declarations, so it bears repeating that everyone should be absolutely
        sure they truly want a relationship with God and ulitmately receive eternal life before commiting their lives to
        Christianity. Let me put it in other words a bit more direct and simple. The a fore mentioned verses from Hebrews 6, Hebrews 10, and 2 Peter 2 speak of those who
        "Profess"
        their Christianity in that they can absolutely claim experiences or tastes from the cup of the Gospel. Let me put a lid on that box and seal it  permanently by reading {scripObj['1 John 2:18-19']}. Please read it for yourself but it basically says that people who fit this description NEVER really "belonged" to us. A born
        again, saved, Christian will actually have drank from the cup of the Gospel and "Possess" salvation; NEVER EVER TO LOSE IT!</p>
      <p className="darkBlue">(EXAMPLES: <span className="purple">Profess</span> - Judas, King Saul, King Nebuchadnezzar, 5 of the 10 virgins; <span className="purple">Possess</span> - Moses, Job, Elijah, Paul, Peter, The other 5 virgins)</p>
      <p className="white">Personally, I have both heard and found it to be true that staying in "growth mode" always trying
        each day to know God better, be more like Jesus, listen to the Holy Spirit, keeps me assured that I belong to the
        Lord and have my place secure in eternity. {scripObj['Joshua 1:8-9']} encourages us to stay in growth mode and <u className="define point vocab" data-toggle="tooltip" data-html="true" title="MEDITATE 1. Reading 2. Believing 3. Absorbing (Thinking over and over again) 4. Applying 5. Obeying">meditate</u> each day on Godly things and to stay grounded in God's word. Try the <Link className="darkBlue" to="/oneliners">One Liners</Link> page if you are ever looking for some Godly things upon which to <u className="define point vocab" data-toggle="tooltip" data-html="true" title="MEDITATE 1. Reading 2. Believing 3. Absorbing (Thinking over and over again) 4. Applying 5. Obeying">meditate</u>. If you still have doubts, which can happen from time to time, I would suggest {scripObj['2 Corinthians 10:4-5']} which I consider to be a reset button of the mind. I stand strongly that if we get our mind right then
        everything falls into place.</p>
      <h4 className="darkgray"><span className="rojo pix15">PlaceHolder -</span>Why do we not Agree on the Facts<span className="rojo pix15"> - PlaceHolder</span><span className="pix10">(not sure where to put this tag)</span></h4>
      <p className="darkgray">Well, this is really not a new concept, yet there are times when the concept is more prevalent than
        others. This is such a time as culture has become more popular than God's truth. Science also rates itself and it's
        findings above God's truth. However, God in his infinite wisdom, spoke about exactly this in the books of Romans and I
        Corinthians. In Romans 1:18-32 and I Cor 1: 17-31, Paul explains that God gave up on them and does not reveal himself to non believers. Moreover, he
        confuses them purposely and uses words like frustrate, foolish, and shame to describe the thinking and behavior of those who
        assume their wisdom above his. Therefore, don't be surprised at the differences, big and small, that separate God's
        truth from man's culture.</p>
    </div>
  )
}

export default EternallySecure
