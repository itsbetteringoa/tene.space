/*
   ClickMap jQuery Plugin
   By Jay Salvat
   http://www.jaysalvat.com/
*/

(function($) { 

$.fn.saveClicks = function() { 
    $(this).bind('mousedown.clickmap', function(evt) { 
        $.post('/ClickMap/clickmap.php', {  
            x:evt.pageX,  
            y:evt.pageY,  
            l:escape(document.location.pathname+document.location.hash) ,
            w:window.screen.width,
            h:window.screen.height
        }); 
    }); 
}; 
 
$.fn.stopSaveClicks = function() { 
     $(this).unbind('mousedown.clickmap'); 
}; 

$.displayClicks = function(settings) { 
    $('<div id="clickmap-overlay"></div>').appendTo('body'); 
 
    $('<div id="clickmap-loading"></div>').appendTo('body'); 
 
    $.get('clickmap.php', { l:escape( document.location.pathname) },  
        function(html) { 
            $(html).appendTo('body');     
            $('#clickmap-loading').remove(); 
        } 
    ); 
}; 
 
$.removeClicks = function() { 
    $('#clickmap-overlay').remove(); 
    $('#clickmap-container').remove(); 
}; 
         
})(jQuery); 