let play = document.getElementById("Play");
let previous = document.getElementById("Previous");
let next = document.getElementById("Next");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let volume_slider = document.querySelector(".volume_slider");

let songs = [
    {
        name: "Alone",
        title: "Alone",
        artist: "Alan Walker",
    },
    {
        name: "Sugar",
        title: "Sugar & Brownies",
        artist: "Dharia",
    },
    {
        name: "Peaches",
        title: "Peaches",
        artist: "Justin Bieber",
    },
];

let isplaying = false;
let songindex = 0;

let playmusic = () => {
    isplaying = true;
    audio.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
};

let pausemusic = () => {
    isplaying = false;
    audio.pause();
    play.classList.replace('fa-pause', 'fa-play');
};

play.addEventListener("click", () => {
    if (!isplaying) {
        playmusic();
    } else {
        pausemusic();
    }
});

const loadsong = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = "Music/" + song.name + ".mp3";
    img.src = "images/" + song.name + ".jpg";
};

const nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    playmusic();
};

const prevsong = () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
    playmusic();
};

next.addEventListener('click', nextsong);
previous.addEventListener('click', prevsong);

volume_slider.addEventListener('input', () => {
    audio.volume = volume_slider.value / 100;
});

// Initialize the first song
loadsong(songs[songindex]);
