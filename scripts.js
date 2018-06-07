(function(){
  'use strict';

  // Init DOM variables
  const awesome = document.getElementById('awesome');
  const load = document.getElementById('load');
  const loader = document.getElementsByClassName('loader')[0];

  // Intit load button listener
  load.addEventListener("click", () => {
    loadProgress(0);
  });

  // Transition
  function loadFunction(nextWidth) {
    let transitionTime = loadSpeed();
    // console.log('loadSpeed', `${transitionTime}s`);
    loader.style.transitionDuration = `${transitionTime}s`;
    loader.style.width = `${nextWidth}%`;

    setTimeout(() => {
      loadProgress(nextWidth);
    }, transitionTime * 1000);
  }

  // Random transition time for animation
  function loadSpeed() {
    let transitionTime = Math.ceil(Math.random() * 8);
    return transitionTime;
  }

  // Random Progress
  function loadProgress(stepWidth) {
    if (stepWidth >= 100) {
      awesome.style.display = "block";
      load.innerHTML = "yey!";
      console.log('finish');
    }else {
      let randomWith = Math.round(Math.random() * (100 - stepWidth))
      let nextWidth = stepWidth + randomWith;
      console.log('Progress', stepWidth + '->' + nextWidth);
      loadFunction(nextWidth);
    }
  }
})();
