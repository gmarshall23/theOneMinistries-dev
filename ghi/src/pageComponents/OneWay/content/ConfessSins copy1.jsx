import { useState, useEffect } from 'react';

const ConfessSins = () => {

  // Allow scriptures to  display 'onHover'
  const [scrips, setScrips] = useState([]);

  // Initialize state prior to animantion
  const [slider, setSlider] = useState({ slider: false, sin: "" })

  const getData = async () => {
    const resp = await fetch('http://localhost:4040/get_scriptures')
    const data = await resp.json()
    setScrips(data)
  }
  useEffect(() => {
    getData()
  }, [])

  let scripObj = {}
  for (let s of scrips) {
    scripObj[s.quote] = <span data-toggle="tooltip" className="testHover" href="#" title={s.scripture}>{s.quote}</span>
  }

  const handleCross = (e) => {
    e.preventDefault()
    const sin = document.getElementById("sin").value
    setSlider({ slider: true, sin: sin })
    setTimeout(() => {
      setSlider({ slider: false, sin: "" })
      document.getElementById("sin").value = ""
    }, 2800)
  }



  return (
    <div>

      <h3>Confess my Sins</h3>
      <br />
      <p className="confessSin">Sin is real and something everyone faces on a "many times a day" basis. Accepting that we live
        in a fallen world and that we all sin and fall short of God's glory ({scripObj['Romans 3:23']}) it is important that we <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Confess - CONFESS YOUR SINS -
   1. To freely agree or acknowledge that you violated God's law by your willful act.
   2. Display real sorrow over your sin.
   3. Ask God to cover your sin with the blood of Jesus and forgive you.
   4. Faithfully believe that God has heard you and will restore you.">Confess</u> our sins, repent our sins, and
        transfer or move past our sins. We do this willingly and voluntarily because as {scripObj['Romans 8:1-2']} says, there is no
        condemnation for those who are in Jesus Christ and that God will never be angry with us again ({scripObj['Isaiah 54:9-10']}). Try this animated exercise to help you visualize the process from
        confession to forgiveness and
        then walk forward under <u className="define point vocab" data-toggle="tooltip" data-html="true" title="Grace - 1. God's unmerited favor. 2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace</u>.
      </p>
      <p className="confessSin">This is the animaition only. It is an opportunity for you to see and feel in action what you are
        doing through prayer. Watch as you send your repented sin to the cross how it darkens your blanket and then is
        washed by the blood of Jesus at the cross and returns clean and pure to you representing your status as forgiven and righteous to match your always righteous state.
        Repeat this activity as often as you need or like but remembering that you need to pray sincerely to God for true
        forgiveness of your sins.</p>
      <br /><br />
      <div className="confession">
        <div className="blanket">
          <p className={`${slider.slider ? "slider" : "nameSin"}`}>I confess<br />
            <label htmlFor="sin"></label>
            <input type="text" className="form-control wide" id="sin" placeholder="Your Sin" required></input>
          </p>
          <button className="button" id="confessBtn" onClick={handleCross}>Send to the Cross</button>
        </div>
        <div className="cross">
          <p className="confessPlace1"></p>
          <p className="confessPlace2"></p>
          <p className="confessPlace3"></p>
          <p className="confessPlace4"></p>
          <div id="sinResponse" className={slider.sin ? "" : "hidden"}>
            <p>God is Faithful and just to Forgive {slider.sin}.</p><p className="resp2"><i className="">JESUS</i> Nailed your <i className="resp3">SINS</i> to the <i className="">CROSS</i> and <i className="resp4">WASHED</i> them with his <i className="">BLOOD</i>.</p><p className=" resp5 white">IT IS FINISHED!!</p><p>Col 2:13-15</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ConfessSins
