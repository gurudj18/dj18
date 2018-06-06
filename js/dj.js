$(document).ready(function(){
   $('div').hide();
   
    $('#myTopnav a').mouseover( function() {
        $('.panel').hide();
        $('#myTopnav a').removeClass('activeanchor');
        $(this).addClass('activeanchor');
        $(this).css('color','white');
        var subPanelId = $(this).attr('id')+'Panel';
        $('#'+subPanelId).css('display', 'inline-block');
    }); 
    $('.panel').mouseover( function() {
        $(this).css('display', 'inline-block');
        var subPanelId = $(this).attr('id');
        var anchorId = subPanelId.substring(0, subPanelId.indexOf('Panel'));
        $('#'+anchorId).addClass('activeanchor');
    });
    $('.panel').mouseout( function() {
         $('.panel').hide();
         var subPanelId = $(this).attr('id');
         var anchorId = subPanelId.substring(0, subPanelId.indexOf('Panel'));
         $('#'+anchorId).removeClass('activeanchor');
    }); 
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function displayPanel(panelId) {
    var panelDiv = document.getElementById("panelDiv");
    var panels = panelDiv.getElementsByTagName("div");
    for (var i = 0; i < panels.length; i++) {
        panels[i].style.display = 'none';        
    }
    document.getElementById(panelId).style.display = 'block';
}
