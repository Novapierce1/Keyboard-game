$(document).ready(function() {
    
    
    var jibberish = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var sentence = '';
    var index = 0;

    $("#keyboard-upper-container").css({"display":"none"})
    $("#sentence").text(jibberish[0])
});
//shift key up
$(document).keydown(function(event) {
    if (event.which == 16) { 
        $("#keyboard-lower-container").css({"display":"none"});
        $("#keyboard-upper-container").css({"display":"block"});
        console.log(event.which)
    }
});
//Shift Key up  
$(document).keyup(function(event) {

    if (event.which == 16) {
        $("#keyboard-lower-container").css({"display":"block"});
        $("#keyboard-upper-container").css({"display":"none" });
    }
});
//highlight
$(document).keypress(function(event) {
    //shift row 1
    if (event.which == 126 ) {$("#126").css("background-color","lightblue")}
    if (event.which == 33 ) {$("#33").css("background-color","lightblue")}
    if (event.which == 64 ) {$("#64").css("background-color","lightblue")}
    if (event.which == 35 ) {$("#35").css("background-color","lightblue")}
    if (event.which == 36 ) {$("#36").css("background-color","lightblue")}
    if (event.which == 37 ) {$("#37").css("background-color","lightblue")}
    if (event.which == 94 ) {$("#94").css("background-color","lightblue")}
    if (event.which == 38 ) {$("#38").css("background-color","lightblue")}
    if (event.which == 42 ) {$("#42").css("background-color","lightblue")}
    if (event.which == 40 ) {$("#40").css("background-color","lightblue")}
    if (event.which == 95 ) {$("#95").css("background-color","lightblue")}
    if (event.which == 43 ) {$("#43").css("background-color","lightblue")}
    //shift row 2
    if (event.which == 81 ) {$("#81").css("background-color","lightblue")}
    if (event.which == 87 ) {$("#87").css("background-color","lightblue")}
    if (event.which == 69 ) {$("#69").css("background-color","lightblue")}
    if (event.which == 82 ) {$("#82").css("background-color","lightblue")}
    if (event.which == 84 ) {$("#84").css("background-color","lightblue")}
    if (event.which == 89 ) {$("#89").css("background-color","lightblue")}
    if (event.which == 85 ) {$("#85").css("background-color","lightblue")}
    if (event.which == 73 ) {$("#73").css("background-color","lightblue")}
    if (event.which == 79 ) {$("#79").css("background-color","lightblue")}
    if (event.which == 80 ) {$("#80").css("background-color","lightblue")}
    if (event.which == 123 ) {$("#123").css("background-color","lightblue")}
    if (event.which == 125 ) {$("#125").css("background-color","lightblue")}
    if (event.which == 124 ) {$("#124").css("background-color","lightblue")}
    //shift row 3
    if (event.which == 65 ) {$("#65").css("background-color","lightblue")}
    if (event.which == 83 ) {$("#83").css("background-color","lightblue")}
    if (event.which == 68 ) {$("#68").css("background-color","lightblue")}
    if (event.which == 70 ) {$("#70").css("background-color","lightblue")}
    if (event.which == 71 ) {$("#71").css("background-color","lightblue")}
    if (event.which == 72 ) {$("#72").css("background-color","lightblue")}
    if (event.which == 74 ) {$("#74").css("background-color","lightblue")}
    if (event.which == 75 ) {$("#75").css("background-color","lightblue")}
    if (event.which == 76 ) {$("#76").css("background-color","lightblue")}
    if (event.which == 58 ) {$("#58").css("background-color","lightblue")}
    if (event.which == 34 ) {$("#34").css("background-color","lightblue")}
    //shift row 4
    if (event.which == 90 ) {$("#90").css("background-color","lightblue")}
    if (event.which == 88 ) {$("#88").css("background-color","lightblue")}
    if (event.which == 67 ) {$("#67").css("background-color","lightblue")}
    if (event.which == 86 ) {$("#86").css("background-color","lightblue")}
    if (event.which == 66 ) {$("#66").css("background-color","lightblue")}
    if (event.which == 78 ) {$("#78").css("background-color","lightblue")}
    if (event.which == 77 ) {$("#77").css("background-color","lightblue")}
    if (event.which == 60 ) {$("#60").css("background-color","lightblue")}
    if (event.which == 62 ) {$("#62").css("background-color","lightblue")}
    if (event.which == 63 ) {$("#63").css("background-color","lightblue")}
    // row 1
    if (event.which == 96 ) {$("#96").css("background-color","lightblue")}
    if (event.which == 49 ) {$("#49").css("background-color","lightblue")}
    if (event.which == 50 ) {$("#50").css("background-color","lightblue")}
    if (event.which == 51 ) {$("#51").css("background-color","lightblue")}
    if (event.which == 52 ) {$("#52").css("background-color","lightblue")}
    if (event.which == 53 ) {$("#53").css("background-color","lightblue")}
    if (event.which == 54 ) {$("#54").css("background-color","lightblue")}
    if (event.which == 55 ) {$("#55").css("background-color","lightblue")}
    if (event.which == 56 ) {$("#56").css("background-color","lightblue")}
    if (event.which == 57 ) {$("#57").css("background-color","lightblue")}
    if (event.which == 48 ) {$("#48").css("background-color","lightblue")}
    if (event.which == 45 ) {$("#45").css("background-color","lightblue")}
    if (event.which == 61 ) {$("#61").css("background-color","lightblue")}
    //row 2
    if (event.which == 113 ) {$("#113").css("background-color","lightblue")}
    if (event.which == 119 ) {$("#119").css("background-color","lightblue")}
    if (event.which == 101 ) {$("#101").css("background-color","lightblue")}
    if (event.which == 114 ) {$("#114").css("background-color","lightblue")}
    if (event.which == 116 ) {$("#116").css("background-color","lightblue")}
    if (event.which == 121 ) {$("#121").css("background-color","lightblue")}
    if (event.which == 117 ) {$("#117").css("background-color","lightblue")}
    if (event.which == 105 ) {$("#105").css("background-color","lightblue")}
    if (event.which == 111 ) {$("#111").css("background-color","lightblue")}
    if (event.which == 112 ) {$("#112").css("background-color","lightblue")}
    if (event.which == 91 ) {$("#91").css("background-color","lightblue")}
    if (event.which == 93 ) {$("#93").css("background-color","lightblue")}
    if (event.which == 92 ) {$("#92").css("background-color","lightblue")}
    //row 3
    if (event.which == 97 ) {$("#97").css("background-color","lightblue")}
    if (event.which == 115 ) {$("#115").css("background-color","lightblue")}
    if (event.which == 100 ) {$("#100").css("background-color","lightblue")}
    if (event.which == 102 ) {$("#102").css("background-color","lightblue")}
    if (event.which == 103 ) {$("#103").css("background-color","lightblue")}
    if (event.which == 104 ) {$("#104").css("background-color","lightblue")}
    if (event.which == 106 ) {$("#106").css("background-color","lightblue")}
    if (event.which == 107 ) {$("#107").css("background-color","lightblue")}
    if (event.which == 108 ) {$("#108").css("background-color","lightblue")}
    if (event.which == 59 ) {$("#59").css("background-color","lightblue")}
    if (event.which == 39 ) {$("#39").css("background-color","lightblue")}
    //row 4
    if (event.which == 122 ) {$("#122").css("background-color","lightblue")}
    if (event.which == 120 ) {$("#120").css("background-color","lightblue")}
    if (event.which == 99 ) {$("#99").css("background-color","lightblue")}
    if (event.which == 118 ) {$("#118").css("background-color","lightblue")}
    if (event.which == 98 ) {$("#98").css("background-color","lightblue")}
    if (event.which == 110 ) {$("#110").css("background-color","lightblue")}
    if (event.which == 109 ) {$("#109").css("background-color","lightblue")}
    if (event.which == 44 ) {$("#44").css("background-color","lightblue")}
    if (event.which == 46 ) {$("#46").css("background-color","lightblue")}
    if (event.which == 47 ) {$("#47").css("background-color","lightblue")}
    //space bar
    if (event.which == 32 ) {$("#32").css("background-color","lightblue")}
});
//highlight release
$(document).keyup(function() {
    //Shift row 1
    $("#126").css("background-color", "");
    $("#33").css("background-color", "");
    $("#64").css("background-color", "");
    $("#35").css("background-color", "");
    $("#36").css("background-color", "");
    $("#37").css("background-color", "");
    $("#94").css("background-color", "");
    $("#38").css("background-color", "");
    $("#42").css("background-color", "");
    $("#40").css("background-color", "");
    $("#41").css("background-color", "");
    $("#95").css("background-color", "");
    $("#43").css("background-color", "");
    //shift row 2
    $("#81").css("background-color", "");
    $("#87").css("background-color", "");
    $("#69").css("background-color", "");
    $("#82").css("background-color", "");
    $("#84").css("background-color", "");
    $("#89").css("background-color", "");
    $("#85").css("background-color", "");
    $("#73").css("background-color", "");
    $("#79").css("background-color", "");
    $("#80").css("background-color", "");
    $("#123").css("background-color", "");
    $("#125").css("background-color", "");
    $("#124").css("background-color", "");
    //shift row 3
    $("#65").css("background-color", "");
    $("#83").css("background-color", "");
    $("#68").css("background-color", "");
    $("#70").css("background-color", "");
    $("#71").css("background-color", "");
    $("#72").css("background-color", "");
    $("#74").css("background-color", "");
    $("#75").css("background-color", "");
    $("#76").css("background-color", "");
    $("#58").css("background-color", "");
    $("#34").css("background-color", "");
    //shift row 4
    $("#90").css("background-color", "");
    $("#88").css("background-color", "");
    $("#67").css("background-color", "");
    $("#86").css("background-color", "");
    $("#66").css("background-color", "");
    $("#78").css("background-color", "");
    $("#77").css("background-color", "");
    $("#60").css("background-color", "");
    $("#62").css("background-color", "");
    $("#63").css("background-color", "");
    //row 1
    $("#96").css("background-color", "");
    $("#49").css("background-color", "");
    $("#50").css("background-color", "");
    $("#51").css("background-color", "");
    $("#52").css("background-color", "");
    $("#53").css("background-color", "");
    $("#54").css("background-color", "");
    $("#55").css("background-color", "");
    $("#56").css("background-color", "");
    $("#57").css("background-color", "");
    $("#48").css("background-color", "");
    $("#45").css("background-color", "");
    $("#61").css("background-color", "");
    //row 2
    $("#113").css("background-color", "");
    $("#119").css("background-color", "");
    $("#101").css("background-color", "");
    $("#114").css("background-color", "");
    $("#116").css("background-color", "");
    $("#121").css("background-color", "");
    $("#117").css("background-color", "");
    $("#105").css("background-color", "");
    $("#111").css("background-color", "");
    $("#112").css("background-color", "");
    $("#91").css("background-color", "");
    $("#93").css("background-color", "");
    $("#92").css("background-color", "");
    //row 3
    $("#97").css("background-color", "");
    $("#115").css("background-color", "");
    $("#100").css("background-color", "");
    $("#102").css("background-color", "");
    $("#103").css("background-color", "");
    $("#104").css("background-color", "");
    $("#106").css("background-color", "");
    $("#107").css("background-color", "");
    $("#108").css("background-color", "");
    $("#59").css("background-color", "");
    $("#39").css("background-color", "");
    //row 4
    $("#122").css("background-color", "");
    $("#120").css("background-color", "");
    $("#99").css("background-color", "");
    $("#118").css("background-color", "");
    $("#98").css("background-color", "");
    $("#110").css("background-color", "");
    $("#109").css("background-color", "");
    $("#44").css("background-color", "");
    $("#46").css("background-color", "");
    $("#47").css("background-color", "");
    //Space Bar
    $("#32").css("background-color", "");

});
$(document).kepress(function(event) {
    if (event.which = "#sentence"){
        
    }
})

    