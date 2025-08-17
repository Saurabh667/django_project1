
console.log('hello')
const startBtn = document.querySelector(".mic");
const placeName= document.querySelectorAll(".forJs");
const placeDesc=document.querySelectorAll(".descJs");
const listName=[];
const listDesc=[];
const textMessage=document.querySelector('.textPrint')

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
  let speaker = new SpeechSynthesisUtterance(audio)
  window.speechSynthesis.speak(speaker)
}
function logic(input){
    let command = input.toLowerCase()
    command=command.replace(".","").trim()
    // console.log(placeName)
    textMessage.innerHTML=`You Said:${command}`;
    console.log(listName.length)
    for (let index = 0; index < listName.length; index++) {
        console.log('saurabh')
        let lowerName=listName[index].toLowerCase()
        console.log(lowerName)
        console.log(command)
        if(lowerName.includes(command)){
            // console.log(listName[index])
            console.log('found it',index)
            bolo(listDesc[index])
            textMessage.innerHTML=`${listDesc[index]}`;
        }
        else{
            // console.log(listName[index])
            console.log('Did not Found')
            
        }
    }
    
    textMessage.innerHTML=`Did not Found`;
    // if (command.includes('jhansi fort')) {
    //     window.open('https://google.com', '_blank');
    //     bolo('opening google sir')
    //   }
    // else{
    //     bolo('under working now')
    //     textMessage.innerHTML=`Under working Now`;

    // }
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
    console.log(transcript)
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
    console.log(event.error)
    // output.innerText = `Error occurred: ${event.error}`;
  };
}