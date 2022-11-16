function loadGame(){

    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");
    var scissors = document.getElementById("scissors");

    rock.style.display="block";
    paper.style.display="block";
    scissors.style.display="block";
    hide();

}

function startGame(value){

    /*
    0 = rock
    1= paper
    2 = scissors
    */

    var rock = "rock";
    var paper = "paper";
    var scissors = "scissors"
    var userOutcome


    var userChoice=parseInt(value);

    if (userChoice == 0){
        userOutcome = "rock";
    }
    else if(userChoice ==1){

        userOutcome = "paper";
    }
    else if(userChoice == 2){

        userOutcome = "scissors";
    }
    
    var computerChoice = Math.floor(Math.random() * 3);
    console.log(typeof userChoice);
    


    if(userChoice == computerChoice){
        document.getElementById("outcome").innerHTML="You and the computer chose "+ userOutcome;
        document.getElementById("result").innerHTML="Tie!";

    }
    else if (userChoice==0 && computerChoice==1){

        document.getElementById("outcome").innerHTML="You chose " + userOutcome + " and the computer chose paper.";
        document.getElementById("result").innerHTML="Paper beats rock. You loose!";
    
    }
    else if (userChoice==0 && computerChoice==2){

        document.getElementById("outcome").innerHTML="You chose " + userOutcome + " and the computer chose scissors.";
        document.getElementById("result").innerHTML="Rock beats scissors. You win!";
    
    }
    else if (userChoice==1 && computerChoice==0){

        document.getElementById("outcome").innerHTML="You chose " + userOutcome + " and the computer chose rock.";
        document.getElementById("result").innerHTML="Paper beats rock. You win!";
    
    }
    else if (userChoice==1 && computerChoice==2){

        document.getElementById("outcome").innerHTML="You chose " + userOutcome + " and the computer chose scissors.";
        document.getElementById("result").innerHTML="Scissors beats paper. You loose!";
    
    }
    else if (userChoice==2 && computerChoice==0){

        document.getElementById("outcome").innerHTML="You chose " + userOutcome + " and the computer chose rock.";
        document.getElementById("result").innerHTML="Rock beats scissors. You loose!";
    
    }
    else if (userChoice==2 && computerChoice==1){

        document.getElementById("outcome").innerHTML="You chose " + userOutcome + " and the computer chose paper.";
        document.getElementById("result").innerHTML="Scissors beats paper. You win!";
    
    }
    hideGame();
}


function hide(){

    document.getElementById("gameIntro").style.visibility="hidden";
}

function hideGame(){

    document.getElementById("gameButtons").style.visibility="hidden";
}