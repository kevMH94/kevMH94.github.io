function newsletter(){
    var input = document.getElementById('input').value;
    var button = document.getElementById('button-addon2').value;

    if(button.clicked = 'true' && input != ''){
        if(input.indexOf('@')>-1){
            alert("You have successfully signed up for our newsletter! Thanks a lot!");
        } else {
            alert("Please include an '@' sign into your email address " + input + " is missing an '@'");
        } 
    } else {
        alert("Please add an email address to sign up!");
        }
}