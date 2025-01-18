 //alert("Sample");
 //if(confirm("Are you sure you wnat to continue?")){
   // var feedback = prompt("Please enter your name: ");
   // alert ("Welcome " + feedback);
//}else{
  //  alert("ANONG HINDIIIIIIIIIIII");
//}

var inp = document.getElementById("myInput");
var hea = document.getElementById("header");

inp.onkeyup = function(){
    hea.innerHTML = inp.value;
}