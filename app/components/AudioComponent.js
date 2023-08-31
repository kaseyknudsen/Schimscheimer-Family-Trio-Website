// import React, { useEffect } from "react";

// const AudioComponent = () => {
//   const context = new AudioContext();
//   let audio;

//   fetch("../../audio-files/cousinNate.mp3")
//     .then((data) => data.arrayBuffer())
//     .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
//     .then((decodedAudio) => {
//       audio = decodedAudio;
//     });

//   const playback = () => {
//     const playSound = context.createBufferSource();
//     playSound.buffer = audio;
//     playSound.connect(context.destination);
//     playSound.start(context.currentTime);
//   };
// };

// export default AudioComponent;
