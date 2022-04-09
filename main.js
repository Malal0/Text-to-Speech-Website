const speechBubble = document.querySelector("#text");
const btn = document.querySelector("#submitBtn");

var msg = new SpeechSynthesisUtterance();
msg.rate = 1.2;
msg.pitch = 2;
btn.addEventListener("click", () => {
    txt = speechBubble.value;
    console.log(txt);

    msg.text = `${txt}`;
    window.speechSynthesis.speak(msg);

    setTimeout(clearText(), 8000);
    console.log(txt);

});

const clearText = () => { txt = " "; };