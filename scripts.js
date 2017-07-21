(function(){
  'use strict'

  let loader = document.getElementsByClassName('loader')[0];
  document.getElementById('load').addEventListener("click", function() {
    loadFunction(0);
  });

  // Transition
  function loadFunction(nextWidth) {
    let transitionTime = loadSpeed();
    console.log('loadSpeed', transitionTime + 's');
    loader.style.transitionDuration = transitionTime + 's';
    loader.style.width = nextWidth + '%';

    setTimeout(function(){
      loadProgress(nextWidth);
    }, transitionTime*1000);
  }

  // Random transition time for animation
  function loadSpeed() {
    let transitionTime = Math.ceil(Math.random()*10);
    return transitionTime;
  }

  // Random Progress
  function loadProgress(stepWidth) {
    if (stepWidth >= 100) {
      console.log('finish');
    }else {
      let nextWidth = stepWidth + Math.round(Math.random()*(100 - stepWidth));
      console.log('Progress',stepWidth + '->' + nextWidth);
      loadFunction(nextWidth);
    }
  }
})();
