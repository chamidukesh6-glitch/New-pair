function getCode(){
let code = Math.random().toString(36).substring(2,8).toUpperCase()
document.getElementById("code").innerText = code
}

function toggleSound(){
let video = document.getElementById("bgvideo")
video.muted = !video.muted
}
