const startBtn = document.querySelector(".mic");
const placeName= document.querySelectorAll(".forJs");
const placeDesc=document.querySelectorAll(".descJs");
const listName=[];
const listDesc=[];

placeName.forEach(el => {
    // console.log(el.innerHTML);
    listName.push(el.innerHTML.trim())
    
});
console.log(listName)
placeDesc.forEach(el => {
    // console.log(el.innerHTML);
    listDesc.push(el.innerHTML.trim())
});
console.log(listDesc)

function bolo(audio) {
  speaker = new SpeechSynthesisUtterance(audio)
  window.speechSynthesis.speak(speaker)
}
function logic(input){
    let command = input.toLowerCase()
    command=command.replace(".","").trim()
    // console.log(placeName)
    for (let index = 0; index < listName.length; index++) {
        let lowerName=listName[index].toLowerCase()
        // console.log(lowerName)
        // console.log(command)
        if(lowerName.includes(command)){
            // console.log(listName[index])
            console.log('found it',index)
            bolo(listDesc[index])
        }
        else{
            // console.log(listName[index])
            console.log('did not match')
        }
    }
    if (command.includes('jhansi fort')) {
        window.open('https://google.com', '_blank');
        bolo('opening google sir')
      }
    else{
        bolo('under working now')
    }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
console.log("Your browser does not support Speech Recognition.")
} else {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  startBtn.addEventListener("click", () => {
    // bolo("You have Clicked the button")
    // output.innerText = "Listening...";
    recognition.start();

  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log("Raw Transcript:", transcript);
    console.log("Lowercase:", transcript.toLowerCase());
    bolo('wait for a while')
    logic(transcript)
    // if (transcript && transcript.toLowerCase() === 'hello.') {
    //   bolo(transcript)
    //   bolo('I am activated now')
    // }
    // else {
    //   bolo('say hello to start ')
    // }
  };

  recognition.onerror = (event) => {
    // output.innerText = `Error occurred: ${event.error}`;
  };
}