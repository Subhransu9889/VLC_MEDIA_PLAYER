const openbtn = document.getElementById("media");
const inputfile = document.getElementById("inputfile");
const videoPlayer = document.getElementById("mainvideo");
const SpeedUp = document.getElementById("SpeedUp");
const SpeedDown = document.getElementById("SpeedDown");
const VolumeUp = document.getElementById("VolumeUp");
const VolumeDown = document.getElementById("VolumeDown");
const Muted = document.getElementById("Muted");
const toast = document.querySelector(".toast");
const about = document.getElementById("About");
const  ChecksforUpdates = document.getElementById("ChecksforUpdates");
const iconplay = document.getElementById("icon-box-play");
const playbutton = document.querySelector("i");
const playPauseButton = document.getElementById("icon-box-play");
const FullscreenBtn = document.getElementById("fullscreen");
const openBtnHandler = () => {
    inputfile.click();
}
const inputhandler = (obj) => {
    document.getElementById("preview-img").style.display = "none";
    // console.log("file selected");
    const selectedFiles = obj.target.files[0];
    // video -> base64
    const link = URL.createObjectURL(selectedFiles);
    const video = document.createElement("video");
    video.src = link;
    videoPlayer.appendChild(video);
    videoPlayer.setAttribute("class", "video");
    video.volume = 0.4;

    // Video display handler
        const myvideo = document.querySelector("video");
        const currentTime = document.getElementById("current-time");
        const durationDisplay = document.getElementById("duration");
        const seekBar = document.getElementById("seek-bar"); // Define the seek bar

    // Update the duration display and seek bar max when metadata is loaded
        myvideo.addEventListener("loadedmetadata", () => {
        const totalMinutes = Math.floor(myvideo.duration / 60);
        const totalSeconds = Math.floor(myvideo.duration % 60);
        durationDisplay.textContent = `${totalMinutes}:${totalSeconds.toString().padStart(2, "0")}`;
        seekBar.max = myvideo.duration; // Corrected
        });

    // Update the seek bar and current time display during playback
        myvideo.addEventListener("timeupdate", () => {
        seekBar.value = myvideo.currentTime; // Corrected
        const currentMinutes = Math.floor(myvideo.currentTime / 60);
        const currentSeconds = Math.floor(myvideo.currentTime % 60);
        currentTime.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, "0")}`;
        });

    // Seek video playback when seek bar value changes
seekBar.addEventListener("input", () => {
        myvideo.currentTime = seekBar.value; // Corrected
        });

}
const speedupHandler = () => {
    // console.log("it is clicked");
    const video = document.querySelector("video");
    if(video === null){
        return;
    }
    if(video.playbackRate === 2){
        return;
    }
    // console.log(video.playbackRate);
    let presentspeed = video.playbackRate;
    presentspeed += 0.25;
    // console.log(presentspeed);
    video.playbackRate = presentspeed;
    toastHandler("Playback Speed: "+video.playbackRate+"X");
}
const SpeeddownHandler = () => {
    const video = document.querySelector("video");
    if(video === null){
        return;
    }
    if(video.playbackRate === 0.5){
        return;
    }
    let presentspeed = video.playbackRate;
    presentspeed -= 0.25;
    video.playbackRate = presentspeed;
    toastHandler("Playback Speed: "+video.playbackRate+"X");
}
const volumeupHandler = () => {
    const video = document.querySelector("video");
    if(video===null){
        return;
    }
    if(video.volume >= 0.9){
        return;
    }
    let currentVolume = video.volume;
    // console.log(currentVolume);
    currentVolume += 0.1;
    video.volume = currentVolume;
    // console.log(video.volume);
    toastHandler("Volume: "+(video.volume*100)+"%");
}
const volumedownHandler = () => {
    const video = document.querySelector("video");
    if(video === null){
        return;
    }
    if(video.volume <= 0.19){
        return;
    }
    let currentVolume = video.volume;
    console.log(currentVolume);
    currentVolume -= 0.1;
    video.volume = currentVolume;
    console.log(video.volume);
    toastHandler("Volume: "+(video.volume*100)+"%");
}
let isMuted = false;
const muteHandler = () => {
    const video = document.querySelector("video");
    if (isMuted) {
        video.volume = 0.4; // Unmute with reduced volume
    } else {
        video.volume = 0; // Mute
    }
    isMuted = !isMuted;
}
const toastHandler = (message) => {
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 1000);
}
const aboutHandler = () => {
    alert("VLC Media Player is a versatile, open-source multimedia player and framework that supports a vast range of audio, video, and streaming formats. Known for its lightweight design and powerful features, VLC provides seamless playback without the need for additional codec");
}
const updateHandler = () => {
    alert("No More Update Avilable");
}
const iconplayTopause = () => {
    // Toggle between 'fa-play' and 'fa-pause' classes
    if(playbutton.classList.contains('fa-play')){
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
    }
    else{
        playbutton.classList.remove('fa-pause');
        playbutton.classList.add('fa-play');
    }
}
let isPlaying = true;
const playPauseButtonHandler = () => {
    const video = document.querySelector("video");
    if(video === null){
        return;
    }
    if(isPlaying){
        video.play();
    }
    else{
        video.pause();
    }
    isPlaying = !isPlaying;
}
const FullscreenBtnHanler = () => {
    const video = document.querySelector("video");
    if(video === null){
        return;
    }
    if (video.requestFullscreen) {
        video.requestFullscreen(); // Trigger fullscreen
    } else if (video.webkitRequestFullscreen) { // For Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // For IE/Edge
        video.msRequestFullscreen();
    } else {
        alert("Fullscreen not supported in this browser.");
    }
}
openbtn.addEventListener("click", openBtnHandler);
inputfile.addEventListener("change", inputhandler);
SpeedUp.addEventListener("click", speedupHandler);
SpeedDown.addEventListener("click", SpeeddownHandler);
VolumeUp.addEventListener("click", volumeupHandler);
VolumeDown.addEventListener("click", volumedownHandler);
Muted.addEventListener("click", muteHandler);
about.addEventListener("click", aboutHandler);
ChecksforUpdates.addEventListener("click", updateHandler);
iconplay.addEventListener("click", iconplayTopause);
playPauseButton.addEventListener("click", playPauseButtonHandler);
FullscreenBtn.addEventListener("click", FullscreenBtnHanler);