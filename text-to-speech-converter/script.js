// Create a new instance of the SpeechSynthesisUtterance object, 
// which represents the text that will be spoken.
let speech = new SpeechSynthesisUtterance();
// Initialize an empty array called voices where the available voices will be stored.
let voices = [];
let voiceSelect = document.querySelector("select");
const listenBtn = document.querySelector("#listen-btn");

// an event that fires when the list of available voices has been updated
window.speechSynthesis.onvoiceschanged = () => {
  // Retrieve the available voices using the getVoices() method and assigns them to the voices array.
  voices = window.speechSynthesis.getVoices();
  // Set the voice property of the SpeechSynthesisUtterance object (speech) 
  // to the first voice in the voices array
  speech.voice = voices[0];

  voices.forEach(
    // Create a new Option object for each voice 
    // and assigns the voice's name as the option text and the index i as the option value.
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  // sets the voice property of the SpeechSynthesisUtterance object (speech) to the selected voice, 
  // allowing the user to choose a specific voice from the dropdown menu.
  speech.voice = voices[voiceSelect.value];
});

listenBtn.addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.SpeechSynthesis.speak(speech);
});
