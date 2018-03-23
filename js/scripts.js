$(document).ready(function() {
  $("#validation").click(function() {
var answer1 = $("input:radio[name=1st]:checked").val();
var answer2 = $("input:radio[name=2nd]:checked").val();
var answer3 = $("input:radio[name=3rd]:checked").val();
var answer4 = $("input:radio[name=4th]:checked").val();
var answer5 = $("input:radio[name=5th]:checked").val();
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);
if (answer1 === "yes"){
console.log("entered");
$("#c").show();   
}

});
});

