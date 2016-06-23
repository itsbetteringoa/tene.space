    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<!-- <script type="text/javascript" src="firebug/build/firebug-lite.js"></script> 
    <script type="text/javascript" src="js/rangy/lib/rangy-core.js"></script>
    <script type="text/javascript" src="js/rangy/lib/rangy-classapplier.js"></script>
    <script type="text/javascript" src="js/rangy/lib/rangy-textrange.js"></script>
    
    <script type="text/javascript">
 
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

        function changeColor(curNumber){            
            curNumber++;
            if(curNumber > 9){
                curNumber = 1;
            }
            $('header').animate({backgroundColor: '#' + colors_hex[curNumber]});
            //console.warn(curNumber);
            setTimeout(function(){changeColor(curNumber)}, 4000);   
        }

        function changeColor_sel(curNumber){            
            curNumber++;

            if(curNumber > 9){
                curNumber = 1;                
            }
            if(curNumber==1) prev_n=9;
            else prev_n=curNumber-1;            

            var range1 = rangy.createRange();
            // select again
            var sel1 = rangy.getSelection();      
            var containerElement = gEBI("ascii_logo");
            range1.selectCharacters(containerElement, 2058, 3078);
            sel1.removeAllRanges();
            sel1.setSingleRange(range1);
            sel1.collapse(document.body, 0);

            $("div#ascii_logo").removeClass("op_color"+prev_n).addClass("op_color"+curNumber);
          
            click1(1,259);
            
            var range = rangy.createRange();
            // select again
            var sel = rangy.getSelection();      

            range.selectCharacters(containerElement, 7068, 8402);
            sel.removeAllRanges();
            sel.setSingleRange(range);            
                                
            setTimeout(function(){changeColor_sel(curNumber)}, 2000);  
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
            changeColor(0);
            changeColor_sel(0);
        };

    </script> -->