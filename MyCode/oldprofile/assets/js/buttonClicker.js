




const circle = document.getElementById("circle");

const theX = document.getElementById("XButton");





let isCircleDisplayed = true;

const clickFunction = function() {
  if (isCircleDisplayed) {
    theX.style.display = 'none';
  
    circle.style.display = 'block';
    isCircleDisplayed = false;
  } else {
   
   theX.style.display = 'block';
    circle.style.display = 'none';

    isCircleDisplayed = true;
  }
};






    // psIconsCLicker is the id of the circle 
    // circleDisplay2 is the id of the X 





   var uglybuttonLayover = document.getElementsByClassName('.ytp-chrome-top-buttons');

   uglybuttonLayover.style.display = none;