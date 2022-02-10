const audio = document.querySelector('audio')
const playButton = document.querySelector('#play-button')
let isSongPlaying = false

audio.onplaying = event => {
    console.log('onplaying')
    isSongPlaying = true
    playButton.innerHTML = 'Pause'
}

audio.onpause = event => {
    console.log('onpause')
    isSongPlaying = false
    playButton.innerHTML = 'Play'
}

playButton.addEventListener('click', () => {
    console.log('playButton clicked')
    if(isSongPlaying){
        audio.pause()
        return
    }
     
    audio.play()
})