
var currentPlayer = "X";

function put(event){

    if (event.srcElement.innerHTML === "") {
        event.srcElement.innerHTML = currentPlayer; 
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
    }
  
}
document.getElementById("bigbox").style.fontFamily="calibri"
document.getElementById("bigbox").style.fontWeight="bold"
document.getElementById("bigbox").style.padding="20px"