import { generate } from "random-words"
import { useState } from "react"

const word = generate()
let firstGuess = ''

for (let i = 0; i < word.length; i++) {
    firstGuess += '*'
}

console.log(word)

function Game() {
    const passage = [
        "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men.",
        "Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness.",
        "For he is truly his brother's keeper and the finder of lost children.",
        "And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers.", 
        "And you will know I am the Lord when I lay my vengeance upon you."
    ]

    const [guess, setGuess] = useState(firstGuess)

    const alphabet = []

    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        alphabet.push(String.fromCharCode(i))
    }

    function handleClick(letter) {
        const arr = new Array(guess.length)

        for (let i = 0; i < guess.length; i++) {
            arr[i] = guess[i]
        }

        for (let i = 0; i < word.length; i++) {
            if (letter === word[i].toUpperCase()) {
                arr[i] = letter        
            }
        }

        setGuess(arr.join(''))
    }
    
    return (
        <>
            <div id="passage" className="hidden">
                {passage.map((phrase, index) => <p key={index} className="transparent">{phrase}</p>)}
                <img src="./src/assets/image.png" className="transparent"/>
            </div>
            <div id="word" className="hidden">
                <p>{guess}</p>
            </div>
            <div id="keyboard" className="hidden">
                {alphabet.map((letter, index) => <button key={index} onClick={() => {handleClick(letter)}}>{letter}</button>)}
            </div>
        </>
    )
}

export default Game