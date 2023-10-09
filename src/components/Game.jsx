import { generate } from "random-words"
import { useState } from "react"

const word = generate()
let firstGuess = ''

for (let i = 0; i < word.length; i++) {
    firstGuess += '-'
}

function Game() {
    const [wrongG, setWrongG] = useState(0)

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
        const button = document.getElementById(letter)
        let rightG = false
        const verse = document.getElementById(wrongG)
        const keyboard = document.getElementById('keyboard')
        const placeholder = document.getElementById('word')
        const rePlay = document.getElementById('rePlay')
        const won = document.getElementById('won')

        button.disabled = true

        for (let i = 0; i < guess.length; i++) {
            arr[i] = guess[i]
        }

        for (let i = 0; i < word.length; i++) {
            if (letter.toLowerCase() === word[i]) {
                arr[i] = letter.toLowerCase()
                rightG = true
            }
        }

        if (!rightG) {
            if (wrongG < 6) {
                verse.classList.toggle('transparent')
                setWrongG(prev => {
                    return prev + 1
                })
            } else {
                keyboard.classList.toggle('hidden')
                placeholder.classList.toggle('hidden')
                rePlay.classList.toggle('hidden')
            }
            
        }

        if (arr.join('') === word) {
            keyboard.classList.toggle('hidden')
            won.classList.toggle('hidden')
        }

        setGuess(arr.join(''))
    }
    
    return (
        <>
            <div id="passage" className="hidden">
                {passage.map((phrase, index) => 
                    <p 
                        key={index}
                        id={index}
                        className="transparent"
                        >{phrase}
                    </p>)
                }
                <img id="5" src="./src/assets/image.png" className="transparent"/>
            </div>
            <div id="word" className="hidden">
                <p>{guess}</p>
            </div>
            <div id="keyboard" className="hidden">
                {alphabet.map((letter, index) => 
                    <button 
                        key={index}
                        id={letter}
                        disabled={false}
                        onClick={() => {handleClick(letter)}}
                        >{letter}
                    </button>)}
            </div>
            <div id="rePlay" className="hidden">
                <h2>Game Over!</h2>
                <p>The word was <span style={{fontWeight: 'bold'}}>{word}</span></p>
            </div>
            <div id="won" className="hidden">
                <h2>Congratulations, you won!</h2>
            </div>
        </>
    )
}

export default Game