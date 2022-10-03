const speechBubble = document.querySelector("#text");
const speakBtn = document.querySelector("#submitBtn");
const select = document.querySelector("#language");
const pitch = document.querySelector("#pitch-input-range");
const rate = document.querySelector("#rate-input-range");
const volume = document.querySelector("#volume-input-range");
const pitchInputText = document.querySelector("#pitch-input-number");
const rateInputText = document.querySelector("#rate-input-number");
const volumeInputText = document.querySelector("#volume-input-number");
const clearText = document.querySelector("#remove-txt-btn");
var msg = new SpeechSynthesisUtterance();
msg.rate = 1;
msg.pitch = 1;
msg.volume = 1;

function speak() {
    txt = speechBubble.value;

    msg.text = `${txt}`;
    window.speechSynthesis.speak(msg);
    // speechBubble.value = "";
}

// let voices = [];

// function populateVoiceList() {
//     if (typeof speechSynthesis === 'undefined') {
//         return;
//     }

//     voices = speechSynthesis.getVoices();

//     for (let i = 0; i < voices.length; i++) {
//         const option = document.createElement('option');
//         option.textContent = `${voices[i].name} (${voices[i].lang})`;

//         if (voices[i].default) {
//             option.textContent += ' — DEFAULT';
//         }

//         option.setAttribute('data-lang', voices[i].lang);
//         option.setAttribute('data-name', voices[i].name);
//         option.setAttribute('data-uri', voices[i].voiceURI);
//         select.appendChild(option);
//     }
// }

// populateVoiceList();
// if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
//     speechSynthesis.onvoiceschanged = populateVoiceList;
// }

function changeLanguage() {
    msg.lang = select.selectedOptions[0].value;
    // msg.voice = voices[select.selectedOptions[0].getAttribute('data-uri')];
    console.log(msg.voice);
}

// //change the language option
// select.addEventListener('change', changeLanguage)
select.addEventListener('change', changeLanguage)

speakBtn.addEventListener("click", (e) => {
    speak();
    e.preventDefault();
})

//pitch related event listeners
pitch.addEventListener("change", () => {
    msg.pitch = pitch.value;
    pitchInputText.value = pitch.value;
})
pitch.addEventListener("mousedown", () => {
    msg.pitch = pitch.value;
    pitchInputText.value = pitch.value;
})
pitchInputText.addEventListener("change", () => {
    msg.pitch = pitchInputText.value;
    pitch.value = pitchInputText.value;
})

//rate related event listeners
rate.addEventListener("change", () => {
    msg.rate = rate.value;
    rateInputText.value = rate.value;
})
rate.addEventListener("mousedown", () => {
    msg.rate = rate.value;
    rateInputText.value = rate.value;
})
rateInputText.addEventListener("change", () => {
    msg.rate = rate.value;
    rate.value = rateInputText.value;
})

//volume related event listeners
volume.addEventListener("change", () => {
    msg.volume = volume.value;
    volumeInputText.value = volume.value;
})
volumeInputText.addEventListener("change", () => {
    msg.volume = volume.value;
    volume.value = volumeInputText.value;
})
volume.addEventListener("mousedown", () => {
    msg.volume = volume.value;
    volumeInputText.value = volume.value;
})

