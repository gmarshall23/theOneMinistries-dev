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
`<ul>Cure For Doubt:
    <li>confess doubt</li>
    <li>study the evidence for Faith</li>
    <li>make certain your salvation</li>
    <li>study the word of God</li>
    <li>pray earnestly</li>
</ul>`,
`The value of your goal will determine the strength of your persistence
make certain your salvation<br>
study the word of God<br>
pray earnestly`,


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
</ul><br>
Mix well. Enjoy !!`,
`A Person of Pride does not acknowledge God for his Blessings`,
`It's fine to feel H-A-P-P-Y: H-Having, A-Anotherl, P-Person(s), P-Please, Y-You;<br>
 Happiness is what happens to you<br>
 But live in a state of J-O-Y: J-Jesus, O-Others, Y-Yourself;<br>
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
`I AM COVERED<br>
<ul>
<li>The Lord walks in front as he leads me</li>
<li>The Lord walks beside as he guides me</li>
<li>The Lord walks behind as he supports me</li>
</ul>`,
`God saved the best for last... Read for yourself Rev 21:1-7, 22:12-14,17 and see how the story ends.`,
`In difficult times where is your FOCUS?<br>
 Focus on your problems is to focus on Fear.<br>
 Focus on God is to focus on your Faith.`,
 71) We cannot solve our problems with the same thinking we used to create them. Have the mind of God and the Heart of Jesus.
72) Are you Rich or Poor because a person of Spiritual Poverty CANNOT be of use to the Kingdom.
73) Here is a Trick Question for you:
 What's more important - To know what is in the word or To know what is not in the word?
74) Don't be like the Dead Sea... God will flow things to you if he knows things will flow through you.
75) Use God's word will keep you from wrong thoughts, words, and actions; Otherwise...wrong thoughts, words and actions will keep you from God's word.
76) God speaks to us in one of FIVE ways ONLY: The Bible, The Church, Confirmation from Others, Circumstances, and The Holy Spirit.
77) When I am Thanking God, I get "back to better"
 When I am Praising God, I get "back to better"
 When I am Worshiping God, I get "back to better"
78) Tell me please...Why do Christians throw away their wounded. Think of Peter, David, Jonah, Moses, Jacob, and Paul
 Jesus instructed us to "STRENGTHEN OUR BROTHERS" after they repent.
79) Get Busy.... Are you called to sit or called to STAND? What did you do for God today??
80) Learn to say "I Can" (Phil 4:13), because "I can't" (John 5:19) - (deep thought, meditate on it)
81) Life and Death exist in the Power of the Tongue. Speak Life. Use words to Heal not Hurt.
82) Your WORDS may be winning the Disagreement while they are most likely LOSING the Agreement.
83) The Will of God guides you to His House of Grace which is opened by the Key of Faith
84) Obedience to God is always right but Obedience to God is never easy.
85) God is very patient...but HIS patience does have an expiration date.
86) Obedience, simply stated, is to do the "next thing" that God tells you to do.
87) Disobedience is Rebellion and consequences will definitely come
88) I AM AFFIRMED
 I am Called: Saved
 I am Righteous: Correct, Straight
 I am Glorified: Honored
 I am Justified: Made Right
 I am Sanctified: Pure
 I am Holy: Set Apart
89) Jesus sacrificed his life so I could be free, so I could be whole, so I could tell everyone I know. Have you been talking lately?
90) With Condemnation you will actually sin more. With Conviction you will actually sin less.
91) Reliance on your feelings alone can change your emotional state endlessly. Remembering God's sacrifice will stabilize your feelings and emotions
92) Do not let obscure passages of scripture confuse your understanding of clear, straight, direct passages of scripture.
93) The more you rely on God, the more you glorify God
94) The tongue is humanly untameable (Jam 1:26) Consider these three before you speak:
 Pause: ask why am I talking? (Jam 1:19)
 Ponder: Think: Is my heart right, Is my mind right before I say this? (Luke 2:35)
 Pray: Would I say it this way in front of the Lord? (Isa 6:5/Ps 19:14)
95) Put everything else aside, Your desires and plans MUST bend the knee to the will of God.
96) Your confirmation from God awaits your obedience to God

97) OUT WITH THE OLD...God says: If you do, Then I will do (Ex 21)
 IN WITH THE NEW...God says: We work together, We protect each other, We have a mindset of family (Jer 31/Heb 8)
98) The way we knew God 5 years ago is not adequate in times such as now. Relationships with God are ever alive and growing.
99) Share the gospel everyday to everyone you encounter; and when necessary... use words.
100) Spiritual Maturity Includes:
 Knowing - "waiting" time is not "wasted" time
 Knowing - faith in God is NOT trust in God.
101) Without God's passion and purpose your Spiritual Gifts will lead down one of two roads. One of Pride (self righteousness) or One of Passivity (self loathing).
102) IF-THEN statements with God only work this way: "IF" God's word says it, "Then" it will be so.
103) Have IN-TI-MA-CY with God. It means: He-can-see-into-me because there can be no healing without revealing
104) God's blessings are not always rewards for past behavior but preparation for future tests
105) God's great blessings are many times followed by God's great testing
106) TRUST GOD else you fall victim to disbelief then victim to despair then victim to disobedience then land victimized in disgrace.
107) God's timing is a way to increase your trust in HIM... Consider then: What is God preparing me for?
108) The Holy Spirit does not consult your human schedule before he acts and instructs.

];

export {
    loadStatement,
    oneLiners
}
