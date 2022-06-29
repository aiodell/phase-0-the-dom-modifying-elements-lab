// Write your code here!

// select the element to be removed by identifying it's ID.
// remove the element
document.querySelector("#main").remove();

// create a newHeader variable that points to an <h1> node
// have the ID be "victory"
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// the newHeader will point to the h1 node with the victory ID
// the newHeader will contain "YOUR-NAME is the champion"
// newHeader will be using innerHTML for this lab
newHeader.innerHTML = "ANDRIANNA is the champion";

// append the results to the DOM
//document.body.append(newHeader);