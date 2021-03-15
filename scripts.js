
//load a bunch of images into variables
URL iconURL = new URL("");
// iconURL is null when not found
ImageIcon icon = new ImageIcon(iconURL);
Image i = icon.getImage();

//use random function to select a random-image, assoc boolean

//if click=true and boolean==true, set boolean=false and put image on screen
var elementIsClicked = false; // declare the variable that tracks the state
function clickHandler(){ // declare a function that updates the state
  elementIsClicked = true;
}
