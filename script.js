$(document).ready(function() {

    $("#keyboard-upper-container").css({
        "display":"none"
    });
    $(document).keydown(function(e) {
        if (e.keyCode = 16)
            $("#keyboard-lower-container").css({
                "display":"none",
            })
            $("#keyboard-upper-container").css({
                "display":"block" 
            })
    });
    $(document).keyup(function(e) {
        if (e.keyCode = 16)
            $("#keyboard-lower-container").css({
                "display":"block",
            })
            $("#keyboard-upper-container").css({
                "display":"none" 
            })
    });
    
});
$(HTMLSpanElement).keypress(function(e) {
        if ( e.keyCode == 113 )
            $("#113").toggle("highlight");
    });