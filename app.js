const audio = document.querySelector('audio')
const playButton = document.querySelector('#play-button')
const prevButton = document.querySelector('#prev-button')
const nextButton = document.querySelector('#next-button')
const progressBar = document.getElementById('progress')
const durasiLagu = document.querySelector('.durasi')
const durasiLaguGerak = document.querySelector('.durasi-gerak')
let isSongPlaying = false
let songPosition = 0

const playList = [
    {
        title: 'Red Velvet Psycho',
        vocal: 'Red Velvet',
        song: 'red_velvet_psycho',
        cover: 'red_velvet_psycho'
    },
    {
        title: 'Sapu Jagat',
        vocal: 'Sabyan',
        song: 'sabyan_sapu_jagat',
        cover: 'sabyan_sapu_jagat'
    }
]

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
        audioPause()
        return
    }
     
    audioPlay()
})

prevButton.addEventListener('click', () => {
    console.log('prevButton')
})

nextButton.addEventListener('click', () => {
    songPosition++
    console.log('next song', playList[songPosition] ?? playList[0])
    console.log('nextButton', songPosition)
    loadMusic(playList[songPosition] ?? playList[0])
    audioPlay()
})

prevButton.addEventListener('click', () => {
    songPosition--
    console.log('next song', playList[songPosition] ?? playList[0])
    console.log('nextButton', songPosition)
    loadMusic(playList[songPosition] ?? playList[0])
    audioPlay()
})

const audioPlay = () => {
    audio.play()
}

const audioPause = () => {
    audio.pause()
}

const loadMusic = (data) => {
    console.log('loadMusic', data)
    audio.src = `lagu/${data.song}.mp3`
}