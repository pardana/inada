const audio = document.querySelector('audio')
const playButton = document.querySelector('#play-button')
const progressBar = document.getElementById('progress')
const durasiLagu = document.querySelector('.durasi')
const durasiLaguGerak = document.querySelector('.durasi-gerak')
let isSongPlaying = false

audio.onplaying = event => {
    console.log('onPlaying')
    isSongPlaying = true
    playButton.innerHTML = 'Pause'
}

audio.onpause = event => {
    console.log('onPause')
    isSongPlaying = false
    playButton.innerHTML = 'Play'
}

audio.ontimeupdate = event => {
    const { currentTime, duration } = event.srcElement;
    const percent = (currentTime / duration) * 100
    const minutes = Math.floor(duration/60)
    const seconds = Math.floor(duration- (minutes*60))
    progressBar.style.width = `${percent}%`
    durasiLagu.innerHTML = `${minutes}:${seconds}`

    const menitGerak = Math.floor(currentTime/60)
    const detikGerak = Math.floor(currentTime - (menitGerak * 60))

    let addZero = detikGerak;
    if(addZero < 10){
        addZero = `0${detikGerak}`
    }
    
    durasiLaguGerak.innerHTML = `${menitGerak}:${addZero}`
}

playButton.addEventListener('click', () => {
    console.log('playButton clicked')
    if(isSongPlaying){
        audio.pause()
        return
    }
     
    audio.play()
})