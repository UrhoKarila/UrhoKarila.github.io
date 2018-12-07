$( document ).ready(function() {
    console.log( "ready!" );

    $(".got").click(function(){
        console.log(this);
        $(this).addClass("hidden");
        $(this).parent("div").closest(".desc").addClass("hidden");
        console.log($(this).parent("div").closest(".desc"));
        var card = this.closest(".checklist-card");
        console.log(card);
        $(card).addClass("condensed");
    });
});

function minimizeCard(button){
    console.log(button);
}