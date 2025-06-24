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
 Disobedience is Unbelief`
];

export {
    loadStatement,
    oneLiners
}
