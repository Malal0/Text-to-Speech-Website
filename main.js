const speechBubble = document.querySelector("#text");
const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", () => {
    txt = speechBubble.value;
    console.log(txt);

    var msg = new SpeechSynthesisUtterance();
    msg.text = txt;
    window.speechSynthesis.speak(msg);

    txt = " ";
});