const audio = document.querySelector('audio')
const playButton = document.querySelector('#play-button')
const progressBar = document.getElementById('progress')
const durasiLagu = document.querySelector('.durasi')
const durasiLaguGerak = document.querySelector('.durasi-gerak')
const prevButton = document.querySelector('#prev-button')
const nextButton = document.querySelector('#next-button')
const judul = document.querySelector('h1')
const vocal = document.querySelector('h2')
const cover = document.querySelector('#cover')
let isSongPlaying = false
let songPosition = 0

const playList = [
    {
        title: 'Sapu Jagat',
        vocal: 'Sabyan',
        song: 'sabyan_sapu_jagat.mp3',
        cover: 'sabyan_sapu_jagat.jpg'
    },
    {
        title: '레드벨벳 Psycho',
        vocal: 'Red Velvet',
        song: 'red_velvet_psycho.mp3',
        cover: 'red_velvet_psycho.jpg'
    }
]

audio.onplaying = event => {
    console.log('onplaying')
    isSongPlaying = true
    playButton.innerHTML = '<span class="material-icons">pause</span>'
}

audio.onpause = event => {
    isSongPlaying = false
    playButton.innerHTML = '<span class="material-icons">play_arrow</span>'
}

audio.ontimeupdate = event => {
    const { currentTime, duration } = event.srcElement
    const percent = (currentTime / duration) * 100
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration - (minutes * 60))
    progressBar.style.width = `${percent}%`
    if (duration) {
        durasiLagu.innerHTML = `${minutes}:${addZero(seconds)}`
    }

    const menitGerak = Math.floor(currentTime / 60)
    const detikGerak = Math.floor(currentTime - (menitGerak * 60))
    durasiLaguGerak.innerHTML = `${menitGerak}:${addZero(detikGerak)}`
}

audio.onended = event => {
    nextSong()
}

const audioPlay = () => audio.play()
const audioPause = () => audio.pause()

const loadMusic = (data) => {
    audio.src = `lagu/${data.song}`
    judul.innerHTML = data.title
    vocal.innerHTML = data.vocal
    cover.src = `cover/${data.cover}`
}

const nextSong = () => {
    if (songPosition >= playList.length){
        songPosition === playList.length
    } else {
        songPosition++
    }
    loadMusic(playList[songPosition] ?? playList[0])
    audioPlay()
}

const prevSong = () => {
    if (songPosition < 1){
        songPosition === 0
    } else {
        songPosition--
    }
    loadMusic(playList[songPosition] ?? playList[0])
    audioPlay()
}

const addZero = number => {
    if (number < 10) {
        return `0${number}`
    }
    return number
}

playButton.addEventListener('click', () => {
    if (isSongPlaying) {
        audioPause()
        return
    }
    audioPlay()
})

nextButton.addEventListener('click', nextSong)
prevButton.addEventListener('click', prevSong)
