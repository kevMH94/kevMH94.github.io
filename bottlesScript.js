function beer(){

    for ( i=99; i>=0; i--){
        if (i>2){

            document.getElementById("lyrics").innerHTML+="<p>"+i+ (" bottles of beer on the wall, "+ i+" bottles of beer</br>");
            document.getElementById("lyrics").innerHTML+=("Take one down and pass it around, "+ (i-1) +" bottles of beer on the wall</p></br>");
        
        }
        else if (i==2){

            document.getElementById("lyrics").innerHTML+=("<p>"+i+ " bottles of beer on the wall, "+ i+" bottles of beer</br>");
            document.getElementById("lyrics").innerHTML+=("Take one down and pass it around, "+ (i-1) +" bottle of beer on the wall</p></br>");
            
        }
        else if (i==1){

            document.getElementById("lyrics").innerHTML+=("<p>"+i+ " bottle of beer on the wall, "+ i+" bottle of beer</br>");
            document.getElementById("lyrics").innerHTML+=("Take one down and pass it around, no more bottles of beer on the wall</p></br>");
    
        }
        else{
            document.getElementById("lyrics").innerHTML+=("<p>No more bottles of beer on the wall, no more bottles of beer</br>");
            document.getElementById("lyrics").innerHTML+=("Go to the store and buy some more, 99 bottles of beer on the wall</p></br>");

        }
    }

    hide();
}

function hide() {

    document.getElementById("beerButton").style.visibility="hidden";

}