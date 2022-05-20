const speechBubble = document.querySelector("#text");
const btn = document.querySelector("#submitBtn");
const select = document.querySelector("#language");
const opt = select.getElementsByTagName("option");
var msg = new SpeechSynthesisUtterance();
msg.rate = 1.2;
msg.pitch = 2;
btn.addEventListener("click", (e) => {
    speek();
    e.preventDefault();
})

function speek() {
    txt = speechBubble.value;
    console.log(txt);

    msg.text = `${txt}`;
    window.speechSynthesis.speak(msg);
    speechBubble.textContent = "";
}