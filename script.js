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
    video.controls = "true";
    videoPlayer.appendChild(video);
    videoPlayer.setAttribute("class", "video");
    video.volume = 0.4;
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
openbtn.addEventListener("click", openBtnHandler);
inputfile.addEventListener("change", inputhandler);
SpeedUp.addEventListener("click", speedupHandler);
SpeedDown.addEventListener("click", SpeeddownHandler);
VolumeUp.addEventListener("click", volumeupHandler);
VolumeDown.addEventListener("click", volumedownHandler);
Muted.addEventListener("click", muteHandler);
about.addEventListener("click", aboutHandler);
ChecksforUpdates.addEventListener("click", updateHandler);