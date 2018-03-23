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
$(".language").hide();
console.log("entered1");
$("#c").show();   
}
else{
        if(answer2 === "yes"){
        $(".language").hide();
        console.log("entered2");
        $("#c").show(); 
        } 
        else{
            if(answer3 === "yes"){
            $(".language").hide();
            console.log("entered3");
            $("#c").show();     
        }
            else{
                if(answer4 == "yes"){
                    $(".language").hide();
                    console.log("entered4");
                    $("#j").show(); 
                }
                else{
                    if(answer5 == "yes" || answer5 =="no"){
                    $(".language").hide();
                    console.log("entered5");
                    $("#js").show();
                    }
                }
            }
    
}
}

});
});

