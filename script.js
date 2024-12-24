const openbtn = document.getElementById("media");
const inputfile = document.getElementById("inputfile");
const videoPlayer = document.getElementById("mainvideo");
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
openbtn.addEventListener("click", openBtnHandler);
inputfile.addEventListener("change", inputhandler);