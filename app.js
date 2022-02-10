const audio = document.querySelector('audio')
const playButton = document.querySelector('#play-button')
const progressBar = document.getElementById('progress')
const durasiLagu = document.querySelector('.durasi')
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

audio.ontimeupdate = event => {
    console.log('ontimeupdate')
    const { currentTime, duration } = event.srcElement;
    const percent = (currentTime / duration) * 100
    const minutes = Math.floor(duration/60)
    const seconds = Math.floor(duration- (minutes*60))
    console.log('percent', percent)
    progressBar.style.width = `${percent}%`
    durasiLagu.innerHTML = `${minutes}:${seconds}`
}

playButton.addEventListener('click', () => {
    console.log('playButton clicked')
    if(isSongPlaying){
        audio.pause()
        return
    }
     
    audio.play()
})