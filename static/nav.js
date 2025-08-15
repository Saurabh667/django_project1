const startBtn = document.querySelector(".mic");

function bolo(audio) {
  speaker = new SpeechSynthesisUtterance(audio)
  window.speechSynthesis.speak(speaker)
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
  output.innerText = "Your browser does not support Speech Recognition.";
} else {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  startBtn.addEventListener("click", () => {
    bolo("You have Clicked the button")
    // output.innerText = "Listening...";
    recognition.start();

  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    // output.innerText = `You said: ${transcript}`;
    console.log("Raw Transcript:", transcript);
    console.log("Lowercase:", transcript.toLowerCase());
    if (transcript && transcript.toLowerCase() === 'hello.') {
      bolo(transcript)
      bolo('I am activated now')
    //   bolo('now you can ask any thing you want to ask')
    //   samjho()
    }
    else {
      bolo('say hello to start ')
    }
  };

  recognition.onerror = (event) => {
    // output.innerText = `Error occurred: ${event.error}`;
  };
}