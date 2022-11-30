var subjectNum;
let subjectResults =[];

function subjectCount(){
    var total =0;
    var average;
    subjectNum= parseInt(prompt("How many subjects do you take?"));
    for (i =0; i<subjectNum;i++){

        subjectResults[i]= parseInt(prompt("What was your result for subject "+ (i+1)));
    }

    for (i =0; i<subjectResults.length;i++){

        if(subjectResults[i]>= 90){

            document.getElementById("grades").innerHTML+= "<p>You got an A in subject "+ (i+1)+". Mark: "+subjectResults[i]+"</p>";
        }
        else if(subjectResults[i]<90 && subjectResults[i] >=75){

            document.getElementById("grades").innerHTML+= "<p>You got an B in subject "+ (i+1)+". Mark: "+subjectResults[i]+"</p>";
        }
        else if(subjectResults[i]<75 && subjectResults[i] >=60){

            document.getElementById("grades").innerHTML+= "<p>You got an C in subject "+ (i+1)+". Mark: "+subjectResults[i]+"</p>";
        }
        else if(subjectResults[i]<60 && subjectResults[i] >=45){

            document.getElementById("grades").innerHTML+= "<p>You got an D in subject "+ (i+1)+". Mark: "+subjectResults[i]+"</p>";
        }
        else{

            document.getElementById("grades").innerHTML+= "<p>You got an F in subject "+ (i+1)+". Mark: "+subjectResults[i]+"</p>";
        }
        
        total +=subjectResults[i];
        
    }
    document.getElementById("grades").innerHTML+= "<h1>Results:</h1>";
        document.getElementById("grades").innerHTML+= "<p>Your results total is "+total+"</p>";

        average = (total/subjectNum).toFixed(2);

        document.getElementById("grades").innerHTML+= "<h1>Your grade average is "+average+"</h1>";
        hide();
    
}

function hide(){

    document.getElementById("start").style.visibility="hidden";
}