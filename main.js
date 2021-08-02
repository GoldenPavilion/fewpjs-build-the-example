// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector('#modal')

document.addEventListener("DOMContentLoaded", () => {
  modal.hidden = true;
  const hearts = document.querySelectorAll("span.like-glyph");

  for (const heart of hearts){
    heart.addEventListener("click", event =>{
      mimicServerCall()
      .then(() => {
        if (heart.innerHTML == EMPTY_HEART){
          heart.innerHTML = FULL_HEART
          heart.className = "activated-heart"
        } else {
          heart.innerHTML = EMPTY_HEART
          heart.className = "like-glyph"
        }
      })
      .catch((error) =>{
        modal.hidden = false
        const modalError = document.querySelector("#modal-message")
        modalError.innerText = error
        setTimeout(() =>{
          modal.hidden = true
        }, 5000)
      })
    })
  }
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
