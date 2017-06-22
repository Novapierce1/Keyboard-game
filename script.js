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
                "display":"inline" 
            })
    });
    $(document).keyup(function(e) {
        if (e.keyCode = 16)
            $("#keyboard-lower-container").css({
                "display":"inline",
            })
            $("#keyboard-upper-container").css({
                "display":"none" 
            })
    });
});
