//Code by Claudia
function newsletter(){
    var input = document.getElementById('input').value;
    var button = document.getElementById('button-addon2').value;

    if(button.clicked = 'true' && input != ''){
    alert("You have successfully signed up for our newsletter! Thanks a lot!");
    } else {
        alert("Please add an email address to sign up!");
    }
}

//Code by Kevin
function showDescription(id){

    document.getElementById(id+"Info").style.display="block";
    document.getElementById(id+"DownArrow").style.visibility="hidden";
    document.getElementById(id+"UpArrow").style.display="block";
    
    
}
//Code by Kevin
function hideDescription(id){
    document.getElementById(id+"Info").style.display="none";
    document.getElementById(id+"DownArrow").style.visibility="visible";
    document.getElementById(id+"UpArrow").style.display="none";

}

