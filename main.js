const speechBubble = document.querySelector("#text");
const btn = document.querySelector("#submitBtn");
const select = document.querySelector("#language");
const pitch = document.querySelector("#pitch-input-range");
const rate = document.querySelector("#rate-input-range");
const volume = document.querySelector("#volume");
const pitchInputText = document.querySelector("#pitch-input-number");
const clearText = document.querySelector("#remove-txt-btn");
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
    pitchInputText.value = pitch.value;
})

rate.addEventListener("change", () => {
    msg.rate = rate.value;
    console.log(rate.value);
})

volume.addEventListener("change", () => {
    msg.volume = volume.value;
    console.log(volume.value);
})

pitch.addEventListener("mousedown", () => {
    msg.pitch = pitch.value;
    pitchInputText.value = pitch.value;
})

pitchInputText.addEventListener("change", () => {
    msg.pitch = pitchInputText.value;
    pitch.value = pitchInputText.value;
})

clearText.addEventListener("click", (e) => {
    e.preventDefault();
    speechBubble.value = "";
})

function speak() {
    txt = speechBubble.value;

    msg.text = `${txt}`;
    window.speechSynthesis.speak(msg);
    // speechBubble.value = "";
}