/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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
    if($(e.target).attr('id')=='menu_about') 
        {
            e.preventDefault();
            e.stopPropagation(); 
        }
    else $('.navbar-toggle:visible').click();
});
    
/*============================
=            TENE            =
============================*/

$(document).ready(function(){  
    
    $('#link_feedback').on('click',function(e){
        if(window.screen.width<761) 
        {

            window.location.href = 'http://feedback.tene.space'
        }
    })

    

    $('.navbar .dropdown').hover(function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        }, function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
        });

    $("#logo_moto").lettering('words').children("span").lettering();        
    
    $('#menu_about').on('show.bs.dropdown', function (e) {
        console.warn('heeeey')
        e.stopPropagation()
    })
    
    $('#menu_about').dropdown();
    $('.footable-last-column').on('click',function(e){
        console.warn(e)
    })
    var bl_width, bl_height, classname
    if(window.screen.width<361)
    {
        bl_width=83
            bl_height=-186
            font_size='14px'
            classname='balloon-logo-mob'
            $('#feedback').hide();
        //$('#other_stuff_st').hide()
    }
    else if(window.screen.width<769) 
        {
            bl_width=83
            bl_height=-186
            font_size='14px'
            classname='balloon-logo-mob'
            $('#feedback').hide();

        }
    else
        {
            bl_width=155
            bl_height=-280    
            font_size='18px'        
            classname='balloon-logo'
        }
    $('#spacemonkey_logo').balloon({
        css: {
    
            fontSize: font_size
            }
        })
    $('#ascii_logo').balloon({
      html: true,
      tipSize: 0, offsetY: bl_height, offsetX: bl_width,
      showDuration: 0, hideDuration: 0,
      classname: classname,
      minLifetime: 0,
      css: null /* prevent default */
    });    
    
    $('.fader').hover(function() {
        $(this).find("img:last").fadeToggle(800,'linear');
    });

    $('.donation_table').tablesorter({headers: { 0: { sorter: false}}});
    

    $('.ribbon').on('mouseenter', function(e) {
        if(window.screen.width>641) $('.donate_bg').css('background-image','url(img/donate_bg_80.png) ');
        else $('.donate_bg').css('background-image','url(img/donate_bg_62.png) ');
    })
    $('.ribbon').on('mouseleave', function(e) {
        if(window.screen.width>641) $('.donate_bg').css('background-image','url(img/donate_bg_pix_80.png) ');
         else $('.donate_bg').css('background-image','url(img/donate_bg_pix_62.png) ');
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
            'videoURL':'http://vimeo.com/27027307'
        }];

        $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
            $('#about_video').html(data.html); //puts an iframe embed from vimeo's json
            // $('#openspace_video iframe').load(function(){
            //     player = document.querySelectorAll('iframe')[0];
            //     $('#openspace_video iframe').attr('id', videoData[0]['id']);
            //     $f(player).addEvent('ready', function(id){
            //         var vimeoVideo = $f(id);
            //         console.log('success');
            //     });
            // });
        });
    } 
    if(window.location.href.indexOf('#openspace') != -1 || window.location.href.indexOf('#OpenSpace') != -1) {
        $('#OpenSpace').modal('show');
        var videoData = [
        {
            'videoURL':'http://vimeo.com/27027307'
        }];

        $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
            $('#openspace_video').html(data.html); //puts an iframe embed from vimeo's json
            // $('#openspace_video iframe').load(function(){
            //     player = document.querySelectorAll('iframe')[0];
            //     $('#openspace_video iframe').attr('id', videoData[0]['id']);
            //     $f(player).addEvent('ready', function(id){
            //         var vimeoVideo = $f(id);
            //         console.log('success');
            //     });
            // });
        });
    } 
    if(window.location.href.indexOf('#cacao') != -1) {
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

        L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
            subdomains: ['otile1','otile2','otile3','otile4']
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

$(document).click(function(e) {
    var parent=e.target.offsetParent;
    //console.warn($(parent));
    var obj=e.target;
    //console.warn($(obj).text());
    var txt=$(obj).text();
    
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
        $('#spacemonkey_blah').modal('show');
          var videoData = [
        {
            'videoURL':'http://vimeo.com/27027307'
        }];

        $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
            $('#about_video').html(data.html); //puts an iframe embed from vimeo's json
            // $('#openspace_video iframe').load(function(){
            //     player = document.querySelectorAll('iframe')[0];
            //     $('#openspace_video iframe').attr('id', videoData[0]['id']);
            //     $f(player).addEvent('ready', function(id){
            //         var vimeoVideo = $f(id);
            //         console.log('success');
            //     });
            // });
        });
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
                'videoURL':'http://vimeo.com/27027307'
            }];

            $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoData[0]['videoURL']) + '&api=1&width=641&callback=?', function(data){
                $('#openspace_video').html(data.html); //puts an iframe embed from vimeo's json
                // $('#openspace_video iframe').load(function(){
                //     player = document.querySelectorAll('iframe')[0];
                //     $('#openspace_video iframe').attr('id', videoData[0]['id']);
                //     $f(player).addEvent('ready', function(id){
                //         var vimeoVideo = $f(id);
                //         console.log('success');
                //     });
                // });
            });
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

        L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
            subdomains: ['otile1','otile2','otile3','otile4']
        }).addTo( map );

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

