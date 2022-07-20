const speechBubble = document.querySelector("#text");
const btn = document.querySelector("#submitBtn");
const select = document.querySelector("#language");
const pitch = document.querySelector("#pitch");
const rate = document.querySelector("#rate");
const volume = document.querySelector("#volume");
//const opt = select.getElementsByTagName("option");
var msg = new SpeechSynthesisUtterance();
msg.rate = 1.2;
msg.pitch = 1;
msg.volume = 1;

btn.addEventListener("click", (e) => {
    speak();
    e.preventDefault();
})

pitch.addEventListener("change", () => {
    msg.pitch = pitch.value;
    console.log(pitch.value);
})

rate.addEventListener("change", () => {
    msg.rate = rate.value;
    console.log(rate.value);
})

volume.addEventListener("change", () => {
    msg.volume = volume.value;
    console.log(volume.value);
})

function speak() {
    txt = speechBubble.value;
    console.log(txt);

    msg.text = `${txt}`;
    window.speechSynthesis.speak(msg);
    speechBubble.value = "";
}