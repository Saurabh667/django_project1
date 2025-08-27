
// const startBtn = document.querySelector(".mic");
// const placeName= document.querySelectorAll(".forJs");
// const placeDesc=document.querySelectorAll(".descJs");
// const explore=document.querySelector('.explorekabtn');
// const contact=document.querySelector('.contactkabtn');
// const login=document.querySelector('.loginkabtn');

// const listName=[];
// const listDesc=[];
// if (!sessionStorage.getItem("alreadyRun")) {
//   // Your code here
//   bolo('Welcome to the Jhansi Tourism where you get informations about the tourist places in Jhansi')
//   bolo('Please login to stay connected')

//   sessionStorage.setItem("alreadyRun", "true");
// }

// placeName.forEach(el => {
//     // console.log(el.innerHTML);
//     listName.push(el.innerHTML.trim())
    
// });
// console.log(listName)
// placeDesc.forEach(el => {
//     // console.log(el.innerHTML);
//     listDesc.push(el.innerHTML.trim())
// });
// console.log(listDesc)

// function bolo(audio) {
//   speaker = new SpeechSynthesisUtterance(audio)
//   window.speechSynthesis.speak(speaker)
// }
// function logic(input){
//     let command = input.toLowerCase()
//     command=command.replace(".","").trim()
//     // console.log(placeName)
//     for (let index = 0; index < listName.length; index++) {
//         let lowerName=listName[index].toLowerCase()
//         // console.log(lowerName)
//         // console.log(command)
//         if(lowerName.includes(command)){
//             // console.log(listName[index])
//             console.log('found it',index)
//             bolo(listDesc[index])
//         }
//         else{
//             // console.log(listName[index])
//             console.log('did not match')
//         }
//     }
//     if (command.includes('jhansi fort')) {
//         window.open('https://google.com', '_blank');
//         bolo('opening google sir')
//       }
//     else{
//         bolo('under working now')
//     }
// }

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// if (!SpeechRecognition) {
// console.log("Your browser does not support Speech Recognition.")
// } else {
//   const recognition = new SpeechRecognition();
//   recognition.continuous = false;
//   recognition.interimResults = false;
//   recognition.lang = 'en-US';

//   // startBtn.addEventListener("click", () => {
//   //   // bolo("You have Clicked the button")
//   //   // output.innerText = "Listening...";
//   //   recognition.start();

//   // });

//   recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript;
//     console.log("Raw Transcript:", transcript);
//     console.log("Lowercase:", transcript.toLowerCase());
//     bolo('wait for a while')
//     console.log(transcript)
//     logic(transcript)
//     // if (transcript && transcript.toLowerCase() === 'hello.') {
//     //   bolo(transcript)
//     //   bolo('I am activated now')
//     // }
//     // else {
//     //   bolo('say hello to start ')
//     // }
//   };

//   recognition.onerror = (event) => {
//     console.log(event.error)
//     // output.innerText = `Error occurred: ${event.error}`;
//   };
// }




// explore.addEventListener("click",()=>{
//   console.log('clicked the explore btn')
//   bolo('These are the tourist Places of the Jhansi')
// })
// contact.addEventListener("click",()=>{
//   bolo('This are the contact information about me you can connect to us')
//   bolo('We are ready to get Hired')

// })
// login.addEventListener("click",()=>{
//   bolo('If you do not have an account please sign up')
// })


// const placekanaam=document.querySelector('.placekanaam').innerHTML
// const placekadiv=document.querySelector('.location')
// placekadiv.addEventListener("click",()=>{
//   console.log(placekanaam)
// })


// const home=document.querySelector('.homekabtn');
// const uploads=document.querySelector('.uploadskabtn');
// const about=document.querySelector('.aboutkabtn');
// home.addEventListener("click",()=>{
//   console.log('home')
//   bolo('You are again redirected to the Home page')
// })
// uploads.addEventListener("click",()=>{
//   console.log('uploads')
//   bolo('You are redirected to the Upload page where you can upload your images')
// })
// about.addEventListener("click",()=>{
//   console.log('clicked the about btn')
//   bolo('You are redirected to the About page where you can get information about us')
// })

// const github=document.querySelector('.github');
// const linkedin=document.querySelector('.linkedin');
// const gmail=document.querySelector('.instagram');
// github.addEventListener("click",()=>{
//   bolo('You are redirecting to our github page')
// })
// linkedin.addEventListener("click",()=>{
//   bolo('You are redirecting to our linkedin page')
// })
// gmail.addEventListener("click",()=>{
//   bolo('You are redirecting to Google mail bot com')
// })






// ==================== ELEMENT SELECTORS ====================
const startBtn = document.querySelector(".mic");
const placeName = document.querySelectorAll(".forJs");
const placeDesc = document.querySelectorAll(".descJs");

const explore = document.querySelector(".explorekabtn");
const contact = document.querySelector(".contactkabtn");
const login = document.querySelector(".loginkabtn");

const home = document.querySelector(".homekabtn");
const uploads = document.querySelector(".uploadskabtn");
const about = document.querySelector(".aboutkabtn");

const github = document.querySelector(".github");
const linkedin = document.querySelector(".linkedin");
const gmail = document.querySelector(".instagram");

const placekanaamEl = document.querySelector(".placekanaam");
const placekadiv = document.querySelector(".location");
const destionation = document.querySelector(".destinationkabtn");

// ==================== DATA LISTS ====================
const listName = [];
const listDesc = [];

// ==================== WELCOME MESSAGE ====================
if (!sessionStorage.getItem("alreadyRun")) {
  bolo("Welcome to the Jhansi Tourism where you get informations about the tourist places in Jhansi");
  bolo("Please login to stay connected");
  sessionStorage.setItem("alreadyRun", "true");
}

// ==================== COLLECT NAMES + DESC ====================
placeName.forEach(el => listName.push(el.innerHTML.trim()));
console.log(listName);

placeDesc.forEach(el => listDesc.push(el.innerHTML.trim()));
console.log(listDesc);

// ==================== FUNCTIONS ====================
function bolo(audio) {
  const speaker = new SpeechSynthesisUtterance(audio);
  window.speechSynthesis.speak(speaker);
}

function logic(input) {
  let command = input.toLowerCase().replace(".", "").trim();

  for (let index = 0; index < listName.length; index++) {
    let lowerName = listName[index].toLowerCase();
    if (lowerName.includes(command)) {
      console.log("found it", index);
      bolo(listDesc[index]);
      return;
    }
  }

  if (command.includes("jhansi fort")) {
    window.open("https://google.com", "_blank");
    bolo("opening google sir");
  } else {
    bolo("under working now");
  }
}

// ==================== SPEECH RECOGNITION ====================
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log("Raw Transcript:", transcript);
    bolo("wait for a while");
    logic(transcript);
  };

  recognition.onerror = (event) => {
    console.error(event.error);
  };
} else {
  console.warn("Your browser does not support Speech Recognition.");
}

// ==================== EVENT LISTENERS ====================

// Safe listener helper
function addSafeListener(element, event, callback) {
  if (element) element.addEventListener(event, callback);
}

// Explore / Contact / Login
addSafeListener(explore, "click", () => {
  console.log("clicked the explore btn");
  bolo("These are the tourist Places of the Jhansi");
});

addSafeListener(contact, "click", () => {
  bolo("This are the contact information about me you can connect to us");
  bolo("We are ready to get Hired");
});

addSafeListener(login, "click", () => {
  bolo("If you do not have an account please sign up");
});
addSafeListener(destionation, "click", () => {
  bolo("This is the place where you can upload your images and view others posts");
});

// Location + place name
if (placekadiv && placekanaamEl) {
  addSafeListener(placekadiv, "click", () => {
    console.log(placekanaamEl.innerHTML);
  });
}

// Navbar buttons
addSafeListener(home, "click", () => {
  console.log("home");
  bolo("You are again redirected to the Home page");
});

addSafeListener(uploads, "click", () => {
  console.log("uploads");
  bolo("You are redirected to the Upload page where you can upload your images");
});

addSafeListener(about, "click", () => {
  console.log("clicked the about btn");
  bolo("You are redirected to the About page where you can get information about us");
});

// Footer social links
addSafeListener(github, "click", () => {
  bolo("You are redirecting to our github page");
});

addSafeListener(linkedin, "click", () => {
  bolo("You are redirecting to our linkedin page");
});

addSafeListener(gmail, "click", () => {
  bolo("You are redirecting to Google mail bot com");
});

