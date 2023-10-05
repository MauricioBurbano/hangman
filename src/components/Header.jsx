function Header() {
    function play() {
        document.getElementById('play').classList.toggle('hidden')
        document.getElementById('passage').classList.toggle('hidden')
        document.getElementById('word').classList.toggle('hidden')
        document.getElementById('keyboard').classList.toggle('hidden')
      }

    return (
        <>
            <h1>THE VALLEY OF THE DARKNESS</h1>
            <button id="play" onClick={play}>PLAY</button>
        </>
    )
}

export default Header