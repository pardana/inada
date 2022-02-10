console.log("Music")
const audio = document.querySelector('audio')
const playButton = document.querySelector('#play-button')
let isSongPlaying = false

audio.onplaying = event => {
    console.log('onplaying')
    isSongPlaying = true
}

playButton.addEventListener('click', () => {
    console.log('playButton clicked')
    audio.play()
})