function isItManspreading(){
  var counter = 0;
  var threePoints = {};
  //display the first prompt
  $(".text").append("<p>Click on left knee!");
  //listen for clicks
  $(".container").click(function(){
    //left knee
    if(counter === 0){
      //store the x and y values
      threePoints.leftKneeX = event.clientX;
      threePoints.leftKneeY = event.clientY;
      //prompt for next point
      $(".text").append("<p>click on the crotch</p>");
    }
    //crotch
    else if(counter === 1){
      //store x and y values
      threePoints.crotchX = event.clientX;
      threePoints.crotchY = event.clientY;
      //prompt for next point
      $(".text").append("<p>click on right knee</p>");
    }
    //right knee
    else if(counter == 2){
      //store the x and y values
      threePoints.rightKneeX = event.clientX;
      threePoints.rightKneeY = event.clientY;
      //initiate the function that calculates the angle
      var angle = calculateAngle(threePoints);
      //trigger response to resulting angle
    }
    counter += 1;
  }); //closes the click function
}//closes isItManspreading

function calculateAngle(pointsObj) {
  var AB = Math.sqrt(Math.pow((pointsObj.crotchX-pointsObj.leftKneeX),2)+ Math.pow((pointsObj.crotchY-pointsObj.leftKneeY),2));
  var BC = Math.sqrt(Math.pow((pointsObj.crotchX-pointsObj.rightKneeX),2)+ Math.pow((pointsObj.crotchY-pointsObj.rightKneeY),2));
  var AC = Math.sqrt(Math.pow((pointsObj.rightKneeX-pointsObj.leftKneeX),2)+ Math.pow((pointsObj.rightKneeY-pointsObj.leftKneeX),2));
  var angleRad = Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB));
  return angleRad * 180/Math.PI;
}

function response(degrees) {
  if(degrees <= 30){
    //shy guy
  }
  else if (degrees <= 60) {
    //considerate man

  }
  else if (degrees <= 90) {
    //b-ball sprawl

  }
  else if (degrees <= 120) {
    //come on, I can see your mooseknuckle

  }
  else if (degrees <= 150) {
    //are you kidding me?!

  }
  else if (degrees <= 180) {
    //would you fuck me? I'd fuck me

  }
  else {
    //what is wrong with you????
  }
}

$(".get-url").submit(function(event) {
  event.preventDefault();
  var imgURL = $("input[name='url']").val();
  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  if (!re.test(imgURL)) {
    alert("Invalid url, please try again");
    return false;
  }
  $(".img-field").css("background-image", "url('"+imgURL+"')")
})
