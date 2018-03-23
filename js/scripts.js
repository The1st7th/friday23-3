$(document).ready(function() {
$("body").fadeIn("slow");
  $("#validation").click(function() {
var answer1 = $("input:radio[name=1st]:checked").val();
var answer2 = $("input:radio[name=2nd]:checked").val();
var answer3 = $("input:radio[name=3rd]:checked").val();
var answer4 = $("input:radio[name=4th]:checked").val();
var answer5 = $("input:radio[name=5th]:checked").val();
var name = $("textarea").val();
$("p span").text(name +" ");
if (answer1 === "yes"){
$(".language").hide();
$("#c").fadeIn(1000);
window.scrollTo(2000,document.body.scrollHeight);
}
else{
        if(answer2 === "yes"){
        $(".language").hide();
        $("#c").fadeIn(1000);
        window.scrollTo(1010,document.body.scrollHeight);
        } 
        else{
            if(answer3 === "yes"){
            $(".language").hide();
            $("#c").fadeIn(1000);
            window.scrollTo(1010,document.body.scrollHeight);
        }
            else{
                if(answer4 == "yes"){
                    $(".language").hide();
                    $("#j").fadeIn(1000);
                    window.scrollTo(2000,document.body.scrollHeight);
                }
                else{
                    if(answer5 == "yes" || answer5 =="no"){
                    $(".language").hide();
                    $("div#js").fadeIn(1000);
                    window.scrollTo(1010,document.body.scrollHeight);
                    }
                }
            }
    
}
}

});
});

