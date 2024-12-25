const openbtn = document.getElementById("media");
const inputfile = document.getElementById("inputfile");
const videoPlayer = document.getElementById("mainvideo");
const SpeedUp = document.getElementById("SpeedUp");
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
}
openbtn.addEventListener("click", openBtnHandler);
inputfile.addEventListener("change", inputhandler);
SpeedUp.addEventListener("click", speedupHandler);