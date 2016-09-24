/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
var lang = new Lang();
        lang.dynamic('ru', 'js/langpack/ru.json');
        lang.init({
            defaultLang: 'en'
        });
 lang.loadPack('ru', function (err) {
    if (!err) {
        console.warn('langpack is loaded')
    } else {
        console.warn('langpack is not loaded')
    }
});
 Lang.prototype.attrList.push('data-description');
 Lang.prototype.attrList.push('data-title');
    var colors_hex = [
        '18bc9c',
        'ffa600',
        'ef00c7',
        '7b00c7',
        '18bc9c',
        //'c8ff00',
        'c90079',
        'ffffff',
        '916e5c',
        'c60056',
        'e74363',
        
        ];

    var select_colors_hex=[
        'ffff00', //yellow
        'dcd2d3', //lightgray
        'c44032', //aqua
        'f85b07', //orange
        'ff0000', //red
        'ffffff', //white
        '800080', //violet
        '0000ff', //blue
        '3f3f3f', //darkgray
        '808000'  //olive

        ];  

        function click1(x, y)
        {
            try {
 var ev = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true,
                'screenX': x,
                'screenY': y
                });
}
catch (e) {
  ev = document.createEvent('MouseEvents');
  ev.initEvent("click", true, true);
}

            

            var el = document.elementFromPoint(x, y);
            //console.warn(el);
            el.dispatchEvent(ev);
        }
window.curNumber, window.curNumber_sel, window.stop_click=0

        function changeColor(curNumber){            
            window.curNumber++;
            if(window.curNumber > 9){
                window.curNumber = 1;
            }
            //$('header').css('backgroundColor','#' + colors_hex[window.curNumber])//.animate({backgroundColor: '#' + colors_hex[curNumber]});
            $('#ascii_logo').css('color','#' + colors_hex[window.curNumber])//.animate({backgroundColor: '#' + colors_hex[curNumber]});
            //console.warn(window.curNumber);
            setTimeout(function(){changeColor(curNumber)}, 4000);   
        }

        function changeColor_sel(curNumber_sel){            
            window.curNumber_sel++;

            if(window.curNumber_sel > 9){
                window.curNumber_sel = 1;                
            }
            if(window.curNumber_sel==1) prev_n=9;
            else prev_n=window.curNumber_sel-1;            

            var range1 = rangy.createRange();
            // select again
            var sel1 = rangy.getSelection();      
            var containerElement = gEBI("ascii_logo");
            range1.selectCharacters(containerElement, 2058, 3078);
            sel1.removeAllRanges();
            sel1.setSingleRange(range1);
            sel1.collapse(document.body, 0);

            $("div#ascii_logo").removeClass("op_color"+prev_n).addClass("op_color"+window.curNumber_sel);
          
            if(window.stop_click==0) click1(2,2);
            
            var range = rangy.createRange();
            // select again
            var sel = rangy.getSelection();      

            range.selectCharacters(containerElement, 7068, 8402);
            sel.removeAllRanges();
            sel.setSingleRange(range);            
                                
            setTimeout(function(){changeColor_sel(window.curNumber_sel)}, 2000);  
        }

        function gEBI(id) {
            return document.getElementById(id);
        }

        function initSaveRestore() {

            var containerElement = gEBI("ascii_logo");
            var range = rangy.createRange();
            range.selectCharacters(containerElement, 7068, 8402);
            // select again
            var sel = rangy.getSelection();
            sel.removeAllRanges();
            sel.setSingleRange(range);
        }

        window.onload = function() {
            rangy.init();
            initSaveRestore();
            window.curNumber=0
            window.curNumber_sel=0
            changeColor(window.curNumber)
            //setInterval(function(){changeColor(window.curNumber)}, 4000); 
            if(navigator.userAgent.search("Firefox")==-1 && navigator.userAgent.search("MSIE")==-1) 
                    {
                        changeColor_sel(window.curNumber_sel)
                    //setInterval(function(){changeColor_sel(window.curNumber_sel)}, 2000);  
                    }
            //changeColor(0);
            //changeColor_sel(0);
        };


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {


    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);

        if($(this).attr('href')!==undefined) {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-100
            }, 1500, 'easeInOutExpo');
        }
        
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 80
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(e) {
    console.warn(e);
    if($(e.target).attr('id')=='menu_about' || $(e.target).closest('a').attr('id')=='menu_about') 
        {
            e.preventDefault();
            e.stopPropagation(); 
        }
    else $('.navbar-toggle:visible').click();
});
    
/*============================
=            TENE            =
============================*/
function hideModals(cur) {
    var modals=  [
    '#donation',
    '#other_stuff',
    '#cacao',
    '#OpenSpace',
    '#spacemonkey_blah',
    '#spacemonkey_brief'
    ]
    $.each(modals,function(key, value){
        //console.warn(value,cur)
        if(value!=cur) $(value).modal('hide')
    })
}

// Create a closure
(function(){
    // Your base, I'm in it!
    var originalAddClassMethod = jQuery.fn.addClass;

    jQuery.fn.addClass = function(){
        // Execute the original method.
        var result = originalAddClassMethod.apply( this, arguments );

        // trigger a custom event
        jQuery(this).trigger('cssClassChanged');

        // return the original result
        return result;
    }
})();

var video_os, video_sm, map_title, circle

function swapImages(min,max,type) {
    var random = Math.floor(Math.random()*(max-min+1)+min);
        //console.warn('random>'+random)
        if(type=='openspace') $('#img_openspace').attr('src','img/portfolio/slideshow/openspace'+random+'.png')
            else if(type=='travelpics') $('#img_images').attr('src','img/portfolio/slideshow/photos'+random+'.png')
    //     $current = $('.portfolio img:visible');
    // $current.hide();
    // if($current.index() == random) {
    //     random = ++random % 10;
    // }
    // $('.portfolio img').eq(random).show();
}

$(document).ready(function(){  
// Run our swapImages() function every 5secs
    setInterval('swapImages(1,10,\'openspace\')', 3500);
    setInterval('swapImages(1,21,\'travelpics\')', 3200);
var language = window.navigator.userLanguage || window.navigator.language
if(Cookies.get('langCookie')!='en' && Cookies.get('langCookie')!='ru')
{
    if(language.indexOf('ru')==0) {
        Cookies.set('langCookie','ru')
        change_lang('ru')
    }
    else 
        {
            Cookies.set('langCookie','en')
            change_lang('en')
        }
}
else 
{
var lang=Cookies.get('langCookie')
var btn=$('.lang_switch.'+lang).closest('.btn')

btn.button('toggle')
if(lang=='en') 
    {
        //window.lang.change('en')
        $('meta[property="og:title"]').attr('content', 'BE THE CHANGE you want to see in the world');
        $('meta[property="og:description"]').attr('content', 'fundraising for OpenSpace in Arambol (Goa), interesting Cacao experiments, pictures from travels and other un-mainstream ideas');
        window.video_os='169057943'
        window.video_sm='170254118'
        $('#logo_moto_ru').hide()
        $('#logo_moto_en').show()
        $('section h2').removeClass('rus')
        $('.caption p').removeClass('rus')
        window.lng='en'
        window.map_title="This area have a lots of cacao plantations!"
        $('.portfolio-modal .modal-content h2').removeClass('rus')
        $('#link_feedback').replaceWith('<a id="link_feedback" href="http://feedback.tene.space" id="link_feedback" lang="en">Feedback</a>')
    }
else 
    {
        //window.lang.change('ru')
        $('meta[property="og:title"]').attr('content', 'БУДЬ ИЗМЕНЕНИЕМ, которое хочешь видеть в мире');
        $('meta[property="og:description"]').attr('content', 'сбор средств на создание ОткрытогоПространства в Арамболе (Гоа), интересные Какао-эксперименты, карточки с путешествий и разные задумки');
        window.video_os='171524309'
        window.video_sm='171524973'
        window.lng='ru'

        window.map_title="В этом районе много какао-плантаций!"
        $('#logo_moto_en').hide()
        $('#logo_moto_ru').show()
        $('section h2').addClass('rus')
        $('.caption p').addClass('rus')
        $('.portfolio-modal .modal-content h2').addClass('rus')
        $('#link_feedback').replaceWith('<a id="link_feedback"  onclick="Reformal.widgetOpen();return false;" onmouseover="Reformal.widgetPreload();">Oтзывы</a>')
    }
}
    // Listen for resize changes
window.addEventListener("resize", function() {
    // Get screen size (inner/outerWidth, inner/outerHeight)
      var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
console.warn('resize>>'+w)
      if(w>769)  
      {
                  bl_width=35
            bl_height=-325    
            font_size='18px'        
            image='tongue_1'
            img_w='44px'
            img_h='56px'
        }
    else {
            bl_width=-7
            bl_height=-215
            font_size='14px'
            classname='balloon-logo-mob'
            img_w='28px'
            img_h='36px'
            image='tongue_2'
            //$('#feedback').hide();

        }
$('#ascii_logo').hideBalloon();
//  $("div").filter(function() {
//     var $this = $(this);
//     var bck=$this.css("background")
//     if(bck.indexOf('tongue_')!=-1) $(this).hide()
//     return false       
// }); 
//$('#ascii_logo').data('balloon').remove()

    $('#ascii_logo').balloon({
        tipSize: 0,
        offsetY: bl_height,
        offsetX: bl_width,
        css: {
            width: img_w, 
            height: img_h,
            lineHeight: '153px',
            background: 'url(../img/'+image+'.png) center center no-repeat transparent',
            color: '#fff', 
            fontSize: '150%', 
            fontWeight: 'bold', 
            textAlign: 'center',
            border: 'none',
            boxShadow: 'none',
            zIndex: '1'
        }
    });   
      
}, false);

 $(document).saveClicks(); 
// $(window).on("navigate", function (event, data) {
//     var direction = data.state.direction;
//     if ( !! direction) {
//         console.warn(direction);

//     }
// });
$(".btn.btn-default").bind('cssClassChanged', function(e){ 
        console.warn('class changed')
        var txt=e.target.textContent
        txt=$.trim(txt)
        if(txt=="RUS") change_lang('ru')
        else change_lang('en')
    });
$('*[data-dismiss="modal"]').on('click',function(){
    window.location.hash = ''
});

window.onhashchange = function() {
    //console.warn(window.location)
    hideModals(window.location.hash)
        if (window.location.hash != '' && window.location.hash!='#') {
            $(window.location.hash).modal('show')
            //$(window.location.hash).modal('handleUpdate')
        } 
}

    // $('#link_feedback').on('click',function(e){
    //     if(window.screen.width<761) 
    //     {

    //         window.location.href = 'http://feedback.tene.space'
    //     }
    // })

   //$("img").unveil();
   $('img.lazy').lazy({
    //visibleOnly: true,
    threshold: 200,
    delay: 200,
    afterLoad: function(element) {
            //console.warn(element)
        },
   });
   

    $('.navbar .dropdown').hover(function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        }, function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
        });

    $("#logo_moto_ru").lettering('words').children("span").lettering();        
    $("#logo_moto_en").lettering('words').children("span").lettering();        
    
    $('#menu_about').on('show.bs.dropdown', function (e) {
        console.warn('heeeey')
        e.stopPropagation()
    })
     $('#spacemonkey_blah').on('hide.bs.modal', function(){
        $('#about_video iframe').attr('src','')
     })
    $('#spacemonkey_blah').on('show.bs.modal', function(){
        console.warn('spacemonkey show modal> ' + window.video_sm)
        var videoData = [
        {
            'videoURL':'http://vimeo.com/'+window.video_sm
        }];
        if($('#geoip').value=="Indonesia")
        {
jwplayer('about_video').setup({
        // URL to the video file
        file: 'http://old.ambientlounge.ru/ab_'+window.lng+'.mp4',
        // URL to the image that should be shown before the video is started
        image: 'http://tene.space/img/video_spacemonkey.jpg',
        title: '',
        width: '100%',
        aspectratio: '16:9'
    });
        }
        else 
        {
       $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
           $('#about_video').html(data.html); //puts an iframe embed from vimeo's json
            $('#openspace_video iframe').load(function(){
                player = document.querySelectorAll('iframe')[0];
                $('#openspace_video iframe').attr('id', videoData[0]['id']);
                $f(player).addEvent('ready', function(id){
                    var vimeoVideo = $f(id);
                    console.log('success');
                });
            });
        });
   }
    })
    $('#OpenSpace').on('show.bs.modal', function(){
        console.warn('open space modal> '+window.video_os)
        console.warn('language>>>>'+window.lng);
        var videoData = [
        {
            'videoURL':'http://vimeo.com/'+window.video_os
        }];
        if($('#geoip').value=="Indonesia")
        {
jwplayer('openspace_video').setup({
        // URL to the video file
        file: 'http://old.ambientlounge.ru/os_'+window.lng+'.mp4',
        image: 'http://tene.space/img/video_OpenSpace.jpg',
        title: '',
        width: '100%',
        aspectratio: '16:9'
    });
} else {
       $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
           $('#openspace_video').html(data.html); //puts an iframe embed from vimeo's json
            $('#openspace_video iframe').load(function(){
                player = document.querySelectorAll('iframe')[0];
                $('#openspace_video iframe').attr('id', videoData[0]['id']);
                $f(player).addEvent('ready', function(id){
                    var vimeoVideo = $f(id);
                    console.log('success');
                });
            });
        });
   }
    })
    $('#menu_about').dropdown();
    $('.footable-last-column').on('click',function(e){
        console.warn(e)
    })
    var bl_width, bl_height, classname
   var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


//alert("Browser inner window width: " + w + ", height: " + h + ".");
    if(w<361)
    {
        bl_width=-7
            bl_height=-215
            font_size='14px'
            classname='balloon-logo-mob'
            img_w='28px'
            img_h='36px'
            image='tongue_2'
            $('#feedback').hide();
            //$('.nihil').css('font-size','0.4em !important')
            //$('#ascii_logo').css('font', '4px/2px monospace !important')
        //$('#other_stuff_st').hide()
    }
    else if(w<769) 
        {
            bl_width=-7
            bl_height=-215
            font_size='14px'
            classname='balloon-logo-mob'
            img_w='28px'
            img_h='36px'
            image='tongue_2'
            $('#feedback').hide();

        }
    else
        {
            bl_width=35
            bl_height=-325    
            font_size='18px'        
            image='tongue_1'
            img_w='44px'
            img_h='56px'
        }
    $('#spacemonkey_logo').balloon({
        css: {
    
            fontSize: font_size
            }
        })
    $('#ascii_logo').balloon({
        tipSize: 0,
        offsetY: bl_height,
        offsetX: bl_width,
        css: {
            width: img_w, 
            height: img_h,
            lineHeight: '153px',
            background: 'url(../img/'+image+'.png) center center no-repeat transparent',
            color: '#fff', 
            fontSize: '150%', 
            fontWeight: 'bold', 
            textAlign: 'center',
            border: 'none',
            boxShadow: 'none',
            zIndex: '1'
        }
    });    
    
    // $('.fader').hover(function() {
    //     $(this).find("img:last").fadeToggle(800,'linear');
    // });

    $('.donation_table').tablesorter({headers: { 0: { sorter: false}}});
    

    $('.ribbon').on('mouseenter', function(e) {
        console.warn('width1>'+w)
        if(w>767) $('.donate_bg').css('background-image','url(img/donate_bg_80.png) ');
        else $('.donate_bg').css('background-image','url(img/donate_bg_62.png) ');
    })
    $('.ribbon').on('mouseleave', function(e) {
        console.warn('width2>'+w)
        if(w>767) $('.donate_bg').css('background-image','url(img/donate_bg_pix_80.png) ');
         else $('.donate_bg').css('background-image','url(img/donate_bg_pix_62.png) ');
    })
    $('.ribbon').on('click',function(){
        $('#donation').modal('show')
    })

    $(".pr.around.percent").setupProgressPie({
        size: 70,
        ringWidth: 5,
        strokeWidth: 5,
        strokeColor: "#ddd",
        valueSelector: "span.value",
        valueAdapter: function(s) {return Math.floor(parseInt(s));},
        color: function(p) {return $.fn.progressPie.colorByPercent(100-p);}
    }).progressPie();    
               
    $(".pp.crowd:not(.silverborder):not(.noborder):not(.ring):not(.filledCircle)").progressPie({
            mode:$.fn.progressPie.Mode.COLOR, valueData:"val", size:20, strokeWidth: 3
    });

    function scrollToAnchor(aid){
        var aTag = $("section[id='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top+0},'slow');
    }

    if(window.location.href.indexOf('#news') != -1) {
        scrollToAnchor('news')
    }
    if(window.location.href.indexOf('#donation') != -1) {
        $('#donation').modal('show');
    }
    if(window.location.href.indexOf('#spacemonkey_brief') != -1) {
        $('#spacemonkey_brief').modal('show');
    }
    if(window.location.href.indexOf('#other_stuff') != -1) {
        
        //force FooTable to redraw itself
        //footable.raise();
        $('#other_stuff').modal('show');


        $('.other_stuff.donation_table').footable();
        
        setTimeout(function(){ 
            $('.other_stuff.donation_table').trigger('footable_resize')
            $('.other_stuff.donation_table').trigger('footable_redraw')}, 300);
//$('.other_stuff.donation_table').trigger("footable_force_resize");

    }
    if(window.location.href.indexOf('#spacemonkey_blah') != -1) {
        $('#spacemonkey_blah').modal('show');
    
        var videoData = [
        {
            'videoURL':'http://vimeo.com/'+window.video_sm
        }];
        if($('#geoip').value=="Indonesia")
        {
jwplayer('about_video').setup({
        // URL to the video file
        file: 'http://old.ambientlounge.ru/ab_'+window.lng+'.mp4',
        // URL to the image that should be shown before the video is started
        image: 'http://tene.space/img/video_spacemonkey.jpg',
        title: '',
        width: '100%',
        aspectratio: '16:9'
    });
} else {
        $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
           $('#about_video').html(data.html); //puts an iframe embed from vimeo's json
            $('#openspace_video iframe').load(function(){
                player = document.querySelectorAll('iframe')[0];
                $('#openspace_video iframe').attr('id', videoData[0]['id']);
                $f(player).addEvent('ready', function(id){
                    var vimeoVideo = $f(id);
                    console.log('success');
                });
            });
       });
     }
    } 
    if(window.location.href.indexOf('#openspace') != -1 || window.location.href.indexOf('#OpenSpace') != -1) {
        $('#OpenSpace').modal('show');
        var videoData = [
        {
            'videoURL':'http://vimeo.com/'+window.video_os
        }];
        console.warn('lang>>>>>'+window.lng);
if($('#geoip').value=="Indonesia")
        {
jwplayer('openspace_video').setup({
        // URL to the video file
        file: 'http://old.ambientlounge.ru/os_'+window.lng+'.mp4',
        // URL to the image that should be shown before the video is started
        image: 'http://tene.space/img/video_OpenSpace.jpg',
        title: '',
        width: '100%',
        aspectratio: '16:9'
    });
} else {
       $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
           $('#openspace_video').html(data.html); //puts an iframe embed from vimeo's json
            $('#openspace_video iframe').load(function(){
                player = document.querySelectorAll('iframe')[0];
                $('#openspace_video iframe').attr('id', videoData[0]['id']);
                $f(player).addEvent('ready', function(id){
                    var vimeoVideo = $f(id);
                    console.log('success');
                });
            });
        });
   }
    } 
    if(window.location.href.indexOf('#cacao') != -1) {
        $('#cacao').modal('show');
        
        var map = L.map( 'sulya', {
            center: [12.7559,75.6882],
            minZoom: 2,
            zoom: 9
        });
        window.circle = L.circle([12.56,75.39], 5000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(map);

        window.circle.bindPopup(window.map_title);
        window.circle.on('click',function(){
            console.warn('popup clicked')
            window.circle._popup.setContent(window.map_title)
        })

        L.tileLayer( 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
            //subdomains: ['otile1','otile2','otile3','otile4']
        }).addTo( map );

        setTimeout(function(){ map.invalidateSize()}, 400);
    }   


    $('.previous').click(function(){
      if(parseInt($('.pager').attr('data-curr'))>1) {
          var goToPage = parseInt($('.pager').attr('data-curr')) - 1;
          //if($('.active').prev('.page_link').length==true){
            goTo(goToPage);
            $('.next').removeClass('disabled')
        }
      //}
    })

    $('.next').click(function(){
        if(parseInt($('.pager').attr('data-curr'))<numPages) {
          goToPage = parseInt($('.pager').attr('data-curr')) + 1;
         // if($('.active_page').next('.page_link').length==true){
            goTo(goToPage);
            $('.previous').removeClass('disabled')
        }
    })

    // $('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function (e) {
    //       //e.preventDefault();
    //       console.warn(e)
    //     })

});

    var listElement = $('.news_block div');
    var perPage = 4; 
    var numItems = listElement.children('div').size();
    var numPages = Math.ceil(numItems/perPage);    

    var curr = 0;
    while(numPages > curr){
      //$('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo('.pager');
      curr++;
    }

    //$('.pager .page_link:first').addClass('active');
    $('.pager').attr("data-curr",curr)

    listElement.children('div').css('display', 'none');
    listElement.children('div').slice(0,perPage).css('display', 'block');

    function goTo(page){
      var   startAt= (numPages - page) * perPage,
         endOn = startAt + perPage;
         if(startAt<0) startAt=0;
      
      listElement.children('div').css('display','none').slice(startAt, endOn).css('display','block');
      $('.pager').attr("data-curr",page);
      if(page==1) $('.previous').addClass('disabled')
        if(page==numPages) $('.next').addClass('disabled')
    }
function change_lang(lang)
{
    if(lang=='en')
    {
        $('meta[property="og:title"]').attr('content', 'BE THE CHANGE you want to see in the world');
        $('meta[property="og:description"]').attr('content', 'fundraising for OpenSpace in Arambol (Goa), interesting Cacao experiments, pictures from travels and other un-mainstream ideas');
        window.lang.change('en')
        console.warn('video_os>'+window.video_os)
        window.map_title="This area have a lots of cacao plantations!"
        window.video_os='169057943'
        window.video_sm='170254118'
         $('#logo_moto_ru').hide()
        $('#logo_moto_en').show()
        $('section h2').removeClass('rus')
        $('.caption p').removeClass('rus')
        window.lng='en'
        $('.portfolio-modal .modal-content h2').removeClass('rus')
        $('#link_feedback').replaceWith('<a id="link_feedback" href="http://feedback.tene.space" id="link_feedback" lang="en">Feedback</a>')
    }
    else 
    {
        $('meta[property="og:title"]').attr('content', 'БУДЬ ИЗМЕНЕНИЕМ, которое хочешь видеть в мире');
        $('meta[property="og:description"]').attr('content', 'сбор средств на создание ОткрытогоПространства в Арамболе (Гоа), интересные Какао-эксперименты, карточки с путешествий и разные задумки');
        window.lang.change('ru')
        console.warn('ru')
        window.map_title="В этом районе много какао-плантаций!"
        window.video_os='171524309'
        window.video_sm='171524973'
        window.lng='ru'
        console.warn('video_sm>'+window.video_sm)
        $('#logo_moto_en').hide()
        $('#logo_moto_ru').show()
        $('section h2').addClass('rus')
        $('.caption p').addClass('rus')
        $('.portfolio-modal .modal-content h2').addClass('rus')
        $('#link_feedback').replaceWith('<a id="link_feedback"  onclick="Reformal.widgetOpen();return false;" onmouseover="Reformal.widgetPreload();">Oтзывы</a>')
    }
}
$(document).click(function(e) {
    var parent=e.target.offsetParent;
    //console.warn($(parent));
    var obj=e.target;
    
    var txt=$(obj).text();
    if($(obj).attr('id')=='link_feedback')
    {
        console.warn('link_feedbak')
        window.stop_click=1 
    }
    if($(obj).attr('id')=='reformal_widget-overlay')
    {
        console.warn('reformal overlay')
        window.stop_click=0
    }
    if($.trim(txt)=="ENG") {
        change_lang('en')
    }
    if($.trim(txt)=="RUS") {
        change_lang('ru')
    }
    //if($(obj).hasClass())
    if($(parent).hasClass('footable-last-column'))
    {
        $(parent).closest('tr').trigger('footable_toggle_row')
    }
    if($(obj).hasClass('donate_bg') || txt=='donate') $('#donation').modal('show');
    if($(obj).attr('id')=='a_spacemonkey_brief' || txt=='one word') 
        {
            $('#spacemonkey_brief').modal('show');
        }
    if($(obj).attr('id')=='a_spacemonkey_blah' || txt=='blah-blah') 
    {
  console.warn('open video >'+window.video_sm)
        $('#spacemonkey_blah').modal('show');
          var videoData = [
        {
            'videoURL':'http://vimeo.com/'+window.video_sm
        }];
        if($('#geoip').value=="Indonesia")
        {
jwplayer('about_video').setup({
        // URL to the video file
        file: 'http://old.ambientlounge.ru/ab_'+window.lng+'.mp4',
        // URL to the image that should be shown before the video is started
        image: 'http://tene.space/img/video_spacemonkey.jpg',
        title: '',
        width: '100%',
        aspectratio: '16:9'
    });
} else {
        $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
           $('#about_video').html(data.html); //puts an iframe embed from vimeo's json
            $('#openspace_video iframe').load(function(){
                player = document.querySelectorAll('iframe')[0];
                $('#openspace_video iframe').attr('id', videoData[0]['id']);
                $f(player).addEvent('ready', function(id){
                    var vimeoVideo = $f(id);
                    console.log('success');
                });
            });
       });
    }
    }
    if($(obj).attr('id')=='img_other_stuff' || txt=='Other_stuff') 
    {
        $('#other_stuff').modal('show');
       $('.other_stuff.donation_table').footable();
        
        setTimeout(function(){ 
            $('.other_stuff.donation_table').trigger('footable_resize')
            $('.other_stuff.donation_table').trigger('footable_redraw')}, 300);

        
    }
    if($(obj).attr('id')=='img_openspace' || txt=='OpenSpace') 
        {
            $('#OpenSpace').modal('show');
            var videoData = [
            {
                'videoURL':'http://vimeo.com/'+video_os
            }];
if($('#geoip').value=="Indonesia")
        {
jwplayer('openspace_video').setup({
        // URL to the video file
        file: 'http://old.ambientlounge.ru/os_'+window.lng+'.mp4',
        // URL to the image that should be shown before the video is started
        image: 'http://tene.space/img/video_OpenSpace.jpg',
        title: '',
        width: '100%',
        aspectratio: '16:9'
    });
} else {
            $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
               $('#openspace_video').html(data.html); //puts an iframe embed from vimeo's json
                $('#openspace_video iframe').load(function(){
                    player = document.querySelectorAll('iframe')[0];
                    $('#openspace_video iframe').attr('id', videoData[0]['id']);
                    $f(player).addEvent('ready', function(id){
                        var vimeoVideo = $f(id);
                        console.log('success');
                    });
                });
            });
        }
        }
    if($(obj).attr('id')=='img_cacao' || txt=='Cacao') {
        $('#cacao').modal('show');
        
        var map = L.map( 'sulya', {
            center: [12.7559,75.6882],
            minZoom: 2,
            zoom: 9
        });
        var circle = L.circle([12.56,75.39], 5000, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(map);
 
        circle.bindPopup("This area have a lots of cacao plantations!");   

         L.tileLayer( 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
            //subdomains: ['otile1','otile2','otile3','otile4']
        }).addTo( map );
        // L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        //     subdomains: ['otile1','otile2','otile3','otile4']
        // }).addTo( map );

        setTimeout(function(){ map.invalidateSize()}, 400);
    }
});

$(function () { $('#collapseOne').collapse('hide')});

        // ACTIVITY INDICATOR

        var activityIndicatorOn = function()
            {
                $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
            },
            activityIndicatorOff = function()
            {
                $( '#imagelightbox-loading' ).remove();
            },


            // OVERLAY

            overlayOn = function()
            {
                $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
            },
            overlayOff = function()
            {
                $( '#imagelightbox-overlay' ).remove();
            },


            // CLOSE BUTTON

            closeButtonOn = function( instance )
            {
                $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
            },
            closeButtonOff = function()
            {
                $( '#imagelightbox-close' ).remove();
            },


            // CAPTION

            captionOn = function()
            {
                var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
                if(typeof($( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' ))=='undefined') description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] i' ).attr( 'alt' );
                
                if( description.length > 0 )
                       $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
                    
                 
            },
            captionOff = function()
            {
                $( '#imagelightbox-caption' ).remove();
            },


            // NAVIGATION

            navigationOn = function( instance, selector )
            {
                var images = $( selector );
                if( images.length )
                {
                    var nav = $( '<div id="imagelightbox-nav"></div>' );
                    for( var i = 0; i < images.length; i++ )
                        nav.append( '<button type="button"></button>' );

                    nav.appendTo( 'body' );
                    nav.on( 'click touchend', function(){ return false; });

                    var navItems = nav.find( 'button' );
                    navItems.on( 'click touchend', function()
                    {
                        var $this = $( this );
                        if( images.eq( $this.index() ).attr( 'href' ) != $( '#imagelightbox' ).attr( 'src' ) )
                            instance.switchImageLightbox( $this.index() );

                        navItems.removeClass( 'active' );
                        navItems.eq( $this.index() ).addClass( 'active' );

                        return false;
                    })
                    .on( 'touchend', function(){ return false; });
                }
            },
            navigationUpdate = function( selector )
            {
                var items = $( '#imagelightbox-nav button' );
                items.removeClass( 'active' );
                items.eq( $( selector ).filter( '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ).index( selector ) ).addClass( 'active' );
            },
            navigationOff = function()
            {
                $( '#imagelightbox-nav' ).remove();
            },


            // ARROWS

            arrowsOn = function( instance, selector )
            {
                var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

                $arrows.appendTo( 'body' );

                $arrows.on( 'click touchend', function( e )
                {
                    e.preventDefault();

                    var $this   = $( this ),
                        $target = $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                        index   = $target.index( selector );

                    if( $this.hasClass( 'imagelightbox-arrow-left' ) )
                    {
                        index = index - 1;
                        if( !$( selector ).eq( index ).length )
                            index = $( selector ).length;
                    }
                    else
                    {
                        index = index + 1;
                        if( !$( selector ).eq( index ).length )
                            index = 0;
                    }

                    instance.switchImageLightbox( index );
                    return false;
                });
            },
            arrowsOff = function()
            {
                $( '.imagelightbox-arrow' ).remove();
            };


        //  WITH ACTIVITY INDICATION

        $( 'a[data-imagelightbox="a"]' ).imageLightbox(
        {
            onLoadStart:    function() { activityIndicatorOn(); },
            onLoadEnd:      function() { activityIndicatorOff(); },
            onEnd:          function() { activityIndicatorOff(); }
        });


        //  WITH OVERLAY & ACTIVITY INDICATION

        $( 'a[data-imagelightbox="b"]' ).imageLightbox(
        {
            onStart:     function() { overlayOn(); },
            onEnd:       function() { overlayOff(); activityIndicatorOff(); },
            onLoadStart: function() { activityIndicatorOn(); },
            onLoadEnd:   function() { activityIndicatorOff(); }
        });


        //  WITH "CLOSE" BUTTON & ACTIVITY INDICATION

        var instanceC = $( 'a[data-imagelightbox="c"]' ).imageLightbox(
        {
            quitOnDocClick: false,
            onStart:        function() { overlayOn(); closeButtonOn( instanceC ); },
            onEnd:          function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); },
            onLoadStart:    function() { activityIndicatorOn(); },
            onLoadEnd:      function() { activityIndicatorOff(); }
        });

        var instanceC1 = $( 'a[data-imagelightbox="c1"]' ).imageLightbox(
        {
            quitOnDocClick: false,
            onStart:        function() { overlayOn(); closeButtonOn( instanceC1 ); },
            onEnd:          function() { captionOff(); overlayOff(); closeButtonOff(); activityIndicatorOff(); },
            onLoadStart:    function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:      function() { captionOn(); activityIndicatorOff(); }
        });

        var instanceC11 = $( 'a[data-imagelightbox="c11"]' ).imageLightbox(
        {
            quitOnDocClick: false,
            onStart:        function() { overlayOn(); closeButtonOn( instanceC11 ); },
            onEnd:          function() { captionOff(); overlayOff(); closeButtonOff(); activityIndicatorOff(); },
            onLoadStart:    function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:      function() { captionOn(); activityIndicatorOff(); }
        });
        var instanceC12 = $( 'a[data-imagelightbox="c12"]' ).imageLightbox(
        {
            quitOnDocClick: false,
            onStart:        function() { overlayOn(); closeButtonOn( instanceC12 ); },
            onEnd:          function() { captionOff(); overlayOff(); closeButtonOff(); activityIndicatorOff(); },
            onLoadStart:    function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:      function() { captionOn(); activityIndicatorOff(); }
        });
var instanceC22 = $( 'a[data-imagelightbox="c22"]' ).imageLightbox(
        {
            quitOnDocClick: false,
            onStart:        function() { overlayOn(); closeButtonOn( instanceC22 ); },
            onEnd:          function() { captionOff(); overlayOff(); closeButtonOff(); activityIndicatorOff(); },
            onLoadStart:    function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:      function() { captionOn(); activityIndicatorOff(); }
        });
        //  WITH CAPTION & ACTIVITY INDICATION

        $( 'a[data-imagelightbox="d"]' ).imageLightbox(
        {
            onLoadStart: function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:   function() { captionOn(); activityIndicatorOff(); },
            onEnd:       function() { captionOff(); activityIndicatorOff(); }
        });


        //  WITH ARROWS & ACTIVITY INDICATION

        var selectorG = 'a[data-imagelightbox="g"]';
        var instanceG = $( selectorG ).imageLightbox(
        {
            onStart:        function(){ arrowsOn( instanceG, selectorG ); },
            onEnd:          function(){ arrowsOff(); activityIndicatorOff(); },
            onLoadStart:    function(){ activityIndicatorOn(); },
            onLoadEnd:      function(){ $( '.imagelightbox-arrow' ).css( 'display', 'block' ); activityIndicatorOff(); }
        });


        //  WITH NAVIGATION & ACTIVITY INDICATION

        var selectorE = 'a[data-imagelightbox="e"]';
        var instanceE = $( selectorE ).imageLightbox(
        {
            onStart:     function() { navigationOn( instanceE, selectorE ); },
            onEnd:       function() { navigationOff(); activityIndicatorOff(); },
            onLoadStart: function() { activityIndicatorOn(); },
            onLoadEnd:   function() { navigationUpdate( selectorE ); activityIndicatorOff(); }
        });


        //  ALL COMBINED

        var selectorF = 'a[data-imagelightbox="f"]';
        var instanceF = $( selectorF ).imageLightbox(
        {
            onStart:        function() { overlayOn(); closeButtonOn( instanceF ); arrowsOn( instanceF, selectorF ); },
            onEnd:          function() { overlayOff(); captionOff(); closeButtonOff(); arrowsOff(); activityIndicatorOff(); },
            onLoadStart:    function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:      function() { captionOn(); activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
        });


/*=====  End of TENE  ======*/

