/* // adds a listener to know which key is being pressed
window.addEventListener("keydown", function(event){
  console.log(event.keyCode);// shows only the keyCode, the key pressed, not all the data about that key

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // selects all the audio element that have the data-key attribute, no matter the value of the attribute, that's why I put the ${event.keyCode}
  /* console.log(audio); /// to check if the element is being caught correctly

  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); //selects they key classes

  if(!audio) return; //stops the function from execution all the sounds at once, only a sound per key pressed
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing"); //this puts the class playing to the key elements, allowing the css code for playing classes to get applied
});

function removeTransition(event) {
  if(event.propertyName !== "transform") return; // skip if it's not a transform
  console.log(event.propertyName);
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); */

/* ===============================
  REFACTORED CODE
  ================================ */

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!audio) return; 
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if(event.propertyName !== "transform") return; 
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);