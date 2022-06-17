  window.onload = function () {
      oninput = deepdive;
  }


  //range slider credit to http://thenewcode.com/750/Crash-Zoom-Into-An-Image-With-A-HTML5-Range-Slider
  function deepdive() {
      var zoomer = document.getElementById('slider1'),
          hubblepic = document.getElementById('img2');
      zoomlevel = zoomer.valueAsNumber;
      hubblepic.style.transform = "scale(" + zoomlevel + ")";
  }
