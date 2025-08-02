function getRandomIntMax(max) {
    return Math.floor(Math.random() * max)
}

const loadStatement = () => {
    return oneLiners[getRandomIntMax(oneLiners.length - 1)]
}

const oneLiners = [
"Love is an action word",
"In all things, lead with love",
"Personality and Process must submit to Purpose",
`RIGHT Heart leads to => RIGHT Thinking <br>
 RIGHT Thinking leads to => RIGHT Actions <br>
 RIGHT Actions lead to => RIGHT Character <br>
 RIGHT Character leads to => RIGHT Success`,
`Believe in Miracles - Work Harder - Persevere Always`,
`<b>5 Keys to Spiritual Growth and Maturity:</b>
<ol>
<li>Rebrand: You are now the righteous of God - 2 Cor 5</li>
<li>Erosion: Forget what is behind you, Chase what God has in front of you - Phil 3</li>
<li>Core Values: Trust in God only and nothing else - Prov 3</li>
<li>Structure: Daily discipline is paramount - Heb 12, Luke 9</li>
<li>Credibility: Respect the time it takes to become mature. Trust the process - Rom 5, 2 Pet 1</li>
</ol>`,
`Know what you STAND for so you don't FALL for just anything`,
`Satan's s Tactics: Discourage - Distract - Deceive`,
`Jesus came to: Preach and Reach, Seek and Save, take Victims to Victory`,
`<b>Keep simple things simple</b><br>
 Lead With Love<br>
 Forgive Always<br>
 Be Good. Be Kind`,
`<b>Keep simple things simple</b><br>
 Obedience is Belief<br>
 Disobedience is Unbelief<br>
 Obedience is Love<br>
 Disobedience is Sin`,
 `<b>Keep simple things simple</b><br>
 Don't try to know or apply scripture beyond what you understand`,
`<b>Keep simple things simple</b><br>
 Do Less - Pray More<br>
 Do Less - Faith More<br>
 Do Less - Trust More<br>
 Hate Less - Forgive More<br>
 Demand Less - Love More`,
`<b>Keep simple things simple</b><br>
 Get the fish on the hook before you try to clean it.`,
`Will you be victim or victorious. Can't be both`,
`Never judge your “STATUS” by your “State”<br>
 In Other Words<br>
 Never judge “who you are as defined by God” by “how you feel at a given moment”`,
`Don't be full of yourself. Everyone is useful, No one is necessary... except Jesus.`,
`Rules without Relationship = Rebellion<br>
 Rules with relationship = Respect`,
`Praised behavior will bring about Repeated behavior`,
`When you are cut, what do you bleed? (deep question, let it marinade)`,
`Mercy is: Not giving to someone what they deserve.<br>
 Grace is: Giving to someone what they do not deserve`,
`To not forgive yourself is to waste the life and death of Jesus Christ`,
`Never choose preference over obedience`,
`Use your scars to guide your path to the stars`,
`Let God turn your mistakes into miracles`,
`<b>Cure For Doubt:</b>
<ul>
    <li>Confess doubt</li>
    <li>Study the evidence for Faith</li>
    <li>Make certain your salvation</li>
    <li>Study the word of God</li>
    <li>Pray earnestly</li>
</ul>`,
`The value of your goal will determine the strength of your persistence
Make certain your salvation<br>
Study the word of God<br>
Pray earnestly`,
`The value of your goal will determine the strength of your persistence`,
`Love is a choice to see someone the way God sees them and the choice to treat someone the way God wants them treated`,
`Who you are is your <b><em>STANDING</em></b>. How you feel is your <b><em>STATE</em></b>.<br>
 In Other Words, Never judge your righteousness by your sins.`,
`The place of failure is the place of recovery (deep thought, let it marinade)`,
`You and I are righteous separate from our deeds just as Jesus became sin separate from his deeds`,
`Jesus inducted me into a love that was too big for me (at that time). The question now is... are you getting closer?`,
`Holiness is being, Morality is behavior. You can be moral without holiness, but you can never have holiness without morality (morality = Right Relationship with God & Right Behavior Towards Others)`,
`With a strong spirit we look to help others. With a weak spirit we look to help ourselves.`,
`Seek to understand others before insisting to be understood`,
`True repentance does not leave residue of regret`,
`Faith in God is different from Faith in your Faith. Do you say, "I can't or I will?" For Example: Jesus said, ""I can't do anything without the father"`,
`Reconcile with God and Man: Move from harm and hostility to harmony`,
`Allow your Faith to conquer your fears`,
`God gives Grace but also God demands Truth`,
`Faith is simply taking God at his Word (the bible)`,
`In Christianity... Apply what you know and keep trying to grow.`,
`Never confuse where you are "going to" with what you are "going through"`,
`Recipe for Spiritual Strength:<br>
<ul>
    <li>1 gallon of THE WORD (bible)</li>
    <li>1 Quart of PRAYER</li>
    <li>1 Pint of PRAISE</li>
    <li>1 cup of PATIENCE (waiting)</li>
</ul>
Mix well. Enjoy !!`,
`A Person of Pride does not acknowledge God for his Blessings`,
`It's fine to feel H-A-P-P-Y:<br>
H-Having, A-Anotherl, P-Person(s), P-Please, Y-You;<br>
Happiness is what happens to you<br>
But live in a state of J-O-Y:<br>
J-Jesus, O-Others, Y-Yourself;<br>
Joy is your job`,
`<em>Jesus</em> died to show God Loves you. (Jn 3:16),<br>
 <em>Jesus</em> rose to show God's power. (Rom 1:16),<br>
 <em>Jesus</em> ascended to give us access to God's power. (Acts 1:8)`,
`Only your Creator and your Redeemer are qualified to direct your life`,
`Fight your battles on your knees and you will win everytime`,
`Brokenness is God's requirement for maximum usefulness. (deep thought, let it marinade)`,
`Faith and Grace are inseparable: Faith receives what Grace has fully given.`,
`Love is not LOVE until you Give It`,
`Every other Religion asks you to "DO"... In Christianity it's already "DONE."`,
`You cannot receive new Miracles with your old Mindsets`,
`God's Word and Truth must always stand above society's culture.`,
`When God is Silent or you can't find Answers. Stand on his Promises`,
`God will never give you a schedule so full that it excludes Him`,
`Sin is the result of your submission to your Temptations and your Desires`,
`Do your very best and trust God's Grace to do the rest`,
`Christians must suffer through the Process in order to realize God's Purpose`,
`In times of Trouble, Heartache, and Despair you can WORRY or WORSHIP... Choose!!!`,
`Are you a Traveler passing through life on this Earth or Are you a Resident establishing your life on this Earth?`,
`You may run faster alone but you will run longer with God and others`,
`Life is not Good or Fair or Kind but remember "ALL" things work together for the Good of those who love the Lord and are called according to his Purpose.`,
`3 P's that get me on my knees: Praise and Petition in Prayer to the Lord`,
`Grace frees us from fear and allows us to walk freely in obedience.`,
`There are only two things to do about SIN: Confess IT and Forsake IT !!!`,
`<b>I AM COVERED</b><br>
<ul>
<li>The Lord walks in front as he leads me</li>
<li>The Lord walks beside as he guides me</li>
<li>The Lord walks behind as he supports me</li>
</ul>`,
`God saved the best for last... Read for yourself Rev 21:1-7, 22:12-14,17 and see how the story ends.`,
`In difficult times where is your FOCUS?<br>
 Focus on your problems is to focus on Fear.<br>
 Focus on God is to focus on your Faith.`,
 `We cannot solve our problems with the same thinking we used to create them. Have the mind of God and the Heart of Jesus.`,
 `Are you Rich or Poor because a person of Spiritual Poverty CANNOT be of use to the Kingdom.`,
 `Here is a Trick Question for you: What's more important - To know what is in the word or To know what is not in the word?`,
 `Don't be like the Dead Sea... God will flow things to you if he knows things will flow through you.`,
 `Use God's word will keep you from wrong thoughts, words, and actions; Otherwise...wrong thoughts, words and actions will keep you from God's word.`,
`God speaks to us in one of FIVE ways ONLY: The Bible, The Church, Confirmation from Others, Circumstances, and The Holy Spirit.`,
`When I am Thanking God, I get "back to better"<br>
 When I am Praising God, I get "back to better"<br>
 When I am Worshiping God, I get "back to better"`,
`Tell me please...Why do Christians throw away their wounded. Think of Peter, David, Jonah, Moses, Jacob, and Paul. Jesus instructed us to "STRENGTHEN OUR BROTHERS" after they repent.`,
`Get Busy.... Are you called to sit or called to STAND? What did you do for God today??`,
`Learn to say "I Can" (Phil 4:13), because "I can't" (John 5:19) - (deep thought, meditate on it)`,
`Life and Death exist in the Power of the Tongue. Speak Life. Use words to Heal not Hurt.`,
`Your <em>WORDS</em> may be winning the Disagreement while they are most likely <em>LOSING</em> the Agreement.`,
`The Will of God guides you to His House of Grace which is opened by the Key of Faith`,
`Obedience to God is always right but Obedience to God is never easy.`,
`God is very patient...but HIS patience does have an expiration date.`,
`Obedience, simply stated, is to do the "next thing" that God tells you to do.`,
`Disobedience is Rebellion and consequences will definitely come`,
`I AM AFFIRMED<br>
<ul>
 <li>I am Called: Saved</li>
 <li>I am Righteous: Correct, Straight</li>
 <li>I am Glorified: Honored</li>
 <li>I am Justified: Made Right</li>
 <li>I am Sanctified: Pure</li>
 <li>I am Holy: Set Apart</li>
</ul>`,
`Jesus sacrificed his life so I could be free, so I could be whole, so I could tell everyone I know. Have you been talking lately?`,
`With Condemnation you will actually sin more. With Conviction you will actually sin less.`,
`Reliance on your feelings alone can change your emotional state endlessly. Remembering God's sacrifice will stabilize your feelings and emotions`,
`Do not let obscure passages of scripture confuse your understanding of clear, straight, direct passages of scripture.`,
`The more you rely on God, the more you glorify God`,
`The tongue is humanly untameable (Jam 1:26) Consider these three before you speak:
<ol>
 <li>Pause: Ask why am I talking? (Jam 1:19)</li>
 <li>Ponder: Think: Is my heart right, Is my mind right before I say this? (Luke 2:35)</li>
 <li>Pray: Would I say it this way in front of the Lord? (Isa 6:5/Ps 19:14)</li>
</ol>`,
`Put everything else aside, Your desires and plans MUST bend the knee to the will of God.`,
`Your confirmation from God awaits your obedience to God`,
`OUT WITH THE OLD...God says: If you do, Then I will do (Ex 21)<br>
 IN WITH THE NEW...God says: We work together, We protect each other, We have a mindset of family (Jer 31/Heb 8)`,
`The way we knew God 5 years ago is not adequate in times such as now.<br> Relationships with God are ever alive and growing.`,
`Share the gospel everyday to everyone you encounter; and when necessary... use words.`,
`Spiritual Maturity Includes:<br>
 Knowing - "waiting" time is not "wasted" time<br>
 Knowing - faith in God is NOT trust in God.`,
`Without God's passion and purpose your Spiritual Gifts will lead down one of two roads. One of Pride (self righteousness) or One of Passivity (self loathing).`,
`IF-THEN statements with God only work this way:<br>
"IF" God's word says it, "Then" it will be so.`,
`Have IN-TI-MA-CY with God. It means: He-can-see-into-me because there can be no healing without revealing`,
`God's blessings are not always rewards for past behavior but preparation for future tests`,
`God's great blessings are many times followed by God's great testing`,
`TRUST GOD else you fall victim to disbelief then victim to despair then victim to disobedience then land victimized in disgrace.`,
`God's timing is a way to increase your trust in HIM... Consider then: What is God preparing me for?`,
`The Holy Spirit does not consult your human schedule before he acts and instructs.`,
`THE BAKER'S DOZEN<br>
 13 Signs YOU are Growing in your relationship with Christ:
 <ul>
 <li>You are more aware of sinfulness and weaknesses,</li>
 <li>You respond to sin quickly and with genuine repentance,</li>
 <li>You have spiritual battles that become more intense yet you still have joy,</li>
 <li>You see your trials and temptations as opportunities for growth,</li>
 <li>You view service to God as a high honor, not a burden,</li>
 <li>You are able to view everything as coming from the Lord,</li>
 <li>You spend more time in worship and praise,</li>
 <li>You have desire to obey more intensely and sin is less attractive,</li>
 <li>You are more and more eager to share your faith,</li>
 <li>You experience an increasing awareness of HIS presence,</li>
 <li>You LOVE to spend time ALONE with GOD,</li>
 <li>You want to give more in every way,</li>
 <li>You Sense and Feel God's LOVE.</li>
</ul>`,
`Yes, Obedience will cost you, but disobedience will cost you more.`,
`I am Transformed and I Won't Go Back.<br>
 I Won't Go Back - To Negotiate with Evil,<br>
 I Won't Go Back - To Lower the Standard,<br>
 I Won't Go Back - To Compromise with Culture,<br>
 I Won't Go Back - To Accept Less than the Lord`,
`Trials and tests are God's vote of confidence in you.`,
`God will never test what's trivial, HE will test your treasure.`,
`True pleasure comes from God only, Satan only knows amusement.`,
`Every Blessing comes with a Burden, yet In your Weakness, HE is Strong`,
`Please Pray and be Patient:<br>
 I am not there yet because God is not Done yet`,
`God I want your will, and I want what comes with it.
 Would you want Rachel if you knew Leah came with it? (deep deep thought, marinate on it)`,
`Let's Go... You can only get to it if you are willing to go through it!!`,
`My Test gives me a Testimony so I can Testify`,
`If you want to beat Satan, you must become as Stubborn as he is.`,
`Your mind literally thinks 10 thousand thoughts per day.<br>
 Your mind literally thinks 3.5 million thoughts per year.<br>
 How many of your thoughts are on Godly things?<br>
 Renew your mind over and over and be transformed.`,
`SPOILER ALERT I know how the story ends... WE WIN!!`,
`Live a good life because of God's Grace and Mercy; not because of duty and responsibility.`,
`Temptations decrease to you as Grace and Mercy increase in you`,
`Hurting and Suffering are prerequisite to Healing. God's word is both bitter and sweet.`,
`You CANNOT condone that which God condemns`,
`Do Everyday what you would do if you believe God is present with you right now.`,
`God's mortal man, in the center of God's will, is IMMORTAL, until God is done.`,
`Think about everyone in your life and ask yourself...<br>
Do they Push you back? Do they Hold you back? or Do they Have your back?`,
`There are two kinds of spiritual silence...<br>
 Yellow Silence (for cowards: Peter before the cock crows)<br>
 Golden Silence (for Wise Men: Jesus before Pilate)<br>
 I pray you know the difference.`,
`GOD DOES NOT GIVE US A SPIRIT OF FEAR...<br>
 Recognize what is not from God from inside yourself<br>
 Remove what is not from God from inside yourself`,
`Jesus came to live the life we cannot live and to die the death He did not deserve.`,
`Slaves serve because they Have to<br>
 Employees serve because they need to<br>
 Christians serve because they want to`,
`When you truly trust God, you stop asking him for things and start thanking him for doing those things.`,
`You need to be an ACTIVE part of your church and community. There is a big difference between BEING a part of something and BELONGING to something.`,
`Having principles without practicing them are powerless`,
`God has what you don't have<br>
 God gives what you can't give<br>
 God does what you can't do<br>
 God fixes what you can't fix<br>
 What can God do for you?`,
`Renounce anything that does not see Christ as Everything`,
`We are never more like Christ than when we forgive others`,
`When Satan says never, God says NOW!`,
`In my timing I get my results, In God's timing I get God's results...think Abraham, Sarah, Hagar, Isaac, Ishmael`,
`Prayer needs to be your oxygen, not your oxygen mask`,
`Consider this... Rather than asking God why something terrible happened to you<br>
 Ask God how that same thing can be used to glorify Him and bring you closer to Him`,
`My friend, You need to "trust" the Power within you more than "fear" the Power against you`,
`Listen carefully my friend, Can you hear Jesus whispering from inside or do you hear Satan screaming from the outside. (Jam 4:7)`,
`You can't hear the voice of God whispering to you because you are focused on Satan screaming at you`,
`Grace is God's unmerited favor. Grace does God's uplifting of others.`,
`Disagreement in NOT hate… (deep thought, marinade on it and look to apply it)`,
`The success you have in doing Jesus' work will be commensurate with the time you spend with Jesus`,
`The opposite of LOVE is Hell`,
`Why is it that only Jesus and soldiers volunteer, to the point of death, for their true cause?`,
`Love is seeking the other persons highest good`,
`You cannot finish in the flesh that which began in the Spirit`,
`YES, God is your GPS but who put in the destination in the first place?`,
`Worldly riches always promise what they cannot give.`,
`We need YOU in Church because YOU are the Church and if YOU are at Church we get to have YOU.`,
`Study the scriptures because the Bible must answer to the Bible in ALL cases`,
`Try to figure this one out..<br>
 If you are born once, You will Die twice.<br>
 If your are born twice, you only need to Die once`,
`Doing smart things can add years to your life,
 Doing wise things will add life to your years. Do Both!`,
`If you focus on your Goliaths, You will stumble.<br>
 If you focus on God, your Goliaths will tumble`,
`If you fear a Giant, Remember the Lion and the Bear.<br>
Don't look forward in fear, Look back in appreciation`,
`Greg's Anthem<br>
 Without your Love there is no hope for my tomorrow<br>
 I Live because you Live<br>
 I Have because you Give<br>
 You are the Heartbeat of all I do<br>
 I Can't Live one day without YOU!!!`,
`The size of your Hope determines the size of your Blessing`,
`My Friend, you will never know everything about anything. But don't let your confusion disrupt your obedience to God's Plan.`,
`Helloooo....Your Silence is Reputational Suicide for the Faith. Allow GOD'S TRUTH to speak through YOU.`,
`Choose to LOVE`,
`Walk in the light of what you know to be right`,
`<b>Keep simple things simple:</b>: Regarding Jesus: Love, commit, follow`,
`<b>Keep simple things simple:</b>: Pray your way through the entire day`,
`Never give up what you want most for what you want now`,
`Salvation is not a goal to achieve, It is a gift to receive`,
`Your choices in life are not: Good or Evil or Right or Wrong<br>
 Your choices in life are: Life or Death and God or Satan`,
`Do not ever let past failures tell you that you have failed. You are ALWAYS reconciled and renewed in Christ`,
`As long as Jesus is one of your many options, He is not an option for you.`,
`Faith doesn't show the entire stairwell. It just shows enough to take the next step`,
`When you are a Mess, apply “UGLY” trust<br>
<ul>
 <li>U-Until</li>
 <li>G-God</li>
 <li>L-Lifts</li>
 <li>Y-You</li>
</ul>`,
`Don't chase what you already have, Don't fear something Christ has already defeated`,
`Going from the 'why' question to the 'what' question is a sign of spiritual maturity`,
`OH2OH is “Open Hand to Open Hand” — God's formula for success`,
`Before I can do what I love, I must know what I hate`,
`You cannot trust others better than you think or talk about them`,
`The place of conflict is the place of calling`,
`We must always 'fight not to fight' because the battle is the Lord's`,
`Delivery from ( fill in ) comes from occupying your mind on ALL things Jesus rather than on ALL your problems`,
`Lord, allow your grace to help me do the right thing at the right time`,
`Release yourself from the bond of yesterday's decisions`,
`My sins met my Savior… Ask me what happened? (ask yourself the same question)`,
`Father, help me to keep looking until I can see the invisible`,
`Because of God:<br>
 I don't like what I like anymore<br>
 I don't want what I want anymore`,
`Do you serve the God who resides in Heaven or the god who resides in your mind?`,
`Salvation is not a goal to achieve it is a gift to receive`,
`True believers don't let their mistakes define them. They let mistakes refine them.`,
`Because of God:<br>
 My life never got any easier but my joy and peace increased`,
`If 'IT' was easy… you wouldn't know 'IT' was God`,
`While you are crying, what are you confessing (deep thought, meditate on it)`,
`Salvation has nothing to do with me but everything to do with God's goodness and mercy`,
`Pray always because victory does not come by accident`,
`Don't fear the mob. Fear the Master!`,
`I cannot alter the past, but I can bring my past to the altar`,
`Don't let others put their “Too” on you:<br>
<ul>
 <li>Too young</li>
 <li>Too inexperienced</li>
 <li>Too failed</li>
</ul>`,
`Be salt and light and know the darker the background the brighter the light`,
`Hear ye, Hear ye to all in relationships… WE CAN:<br>
 Have difficulties without being difficult<br>
 Have unity without being uniform<br>
 Have harmony without causing harm`,
`Talk is cheap: Are you professing Jesus with your lips and your lives?`,
`It is not about the nature of your sins, it is about the nature of God`,
`Your feelings should follow your actions not precede them<br>
 DO THIS: Do the right things first in order to feel better: pray, read, church, help others<br>
 DO NOT DO THIS: Don't do what feels good first in order to feel better: sex, drugs, porn, alcohol`,
`Don't let your understanding of God dictate your trust in God (deep thought, meditate on it)<br>
Ask yourself if what you are doing stopping you from doing what God is asking you to do?`,
`Christians often get lost because they don't go far enough (deep thought, meditate on it)`,
`This is a tough one…<br>
 Would you rather experience the miracle of God delivering you from something or experience the grace of God delivering you through something?<br>
 It should make you wonder…<br>
 Which is better for you?<br>
 Which grows your faith?<br>
 Which makes you depend on God?<br>
 `,
`Unresolved anger hurts both the vessel in which it is stored and the vessel upon which it is poured`,
`Look for God in the 'here and now' not after the 'came and did'`,
`Fun Fact - If you are a Christian, trouble will most certainly come<br>
 Funner Fact - If you are a Christian, Jesus most certainly has overcome`,
`Christians are not sinless, however, maturing Christians sin less than we used to`,
`What will others see in you today that will make them want to know God?`,
`Doctrine without application only makes you an educated sinner`,
`To know and understand the word of God and not apply it is Spiritual Abortion`,
`You are a slave to whatever you cannot say 'NO' to`,
`God's power to redeem is far greater than Satan's power to destroy`,
`<b>Keep simple things simple:</b><br>
 Everything Jesus whether big or small<br>
 Receive It<br>
 Believe It<br>
 Know It<br>
 Do It`,
`You are joined with others in Christ so you can become what you cannot become on your own`,
`The value of your blessing will exceed the amount of your faith and obedience`,
`This may be bigger than me but My God is bigger than this`,
`When overwhelmed, left out, looked over, less than, lost, do you 'tap out' or let Jesus 'tag in'?`,
`<b>Keep simple things simple:</b>:<br>
 When the word of God makes sense<br>
 Seek no other sense`,
`Take solace in the fact that the things that attack you point to your value`,
`The solution to grief is gratitude. Thank God for the time and experience you had with what you loved and lost.`,
`NO may not mean NO<br>
 No can mean you need to go slow<br>
 No can mean you need to grow<br>
 No can mean there is more you need to know`,
`Lord, thank you for being the reason that I am not the reason.`,
`<b>Keep simple things simple:</b>:<br>
 You can't know you need to be saved until you know you are lost.`,
`You can't know you need salvation until you know you are a sinner.`,
`BE STILL AND KNOW HE IS GOD. We never submit to suffering`,
`When you get lost or are trying to find your way, choose to follow Jesus all the way home.`
];
export {
    loadStatement,
    oneLiners
}
