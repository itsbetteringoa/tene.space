importScripts("/js/min/workerFakeDOM.js");
importScripts('/js/rangy/lib/rangy-core.js')
importScripts('/js/rangy/lib/rangy-classapplier.js')
importScripts('/js/rangy/lib/rangy-textrange.js')

rangy.init();

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


        function changeColor_sel(curNumber_sel){            
            this.curNumber_sel++;

            if(this.curNumber_sel > 9){
                this.curNumber_sel = 1;                
            }
            if(this.curNumber_sel==1) prev_n=9;
            else prev_n=this.curNumber_sel-1;            

            var range1 = rangy.createRange();
            // select again
            var sel1 = rangy.getSelection();      
            var containerElement = gEBI("ascii_logo");
            range1.selectCharacters(containerElement, 2058, 3078);
            sel1.removeAllRanges();
            sel1.setSingleRange(range1);
            sel1.collapse(document.body, 0);

            $("div#ascii_logo").removeClass("op_color"+prev_n).addClass("op_color"+this.curNumber_sel);
          
            click1(1,259);
            
            var range = rangy.createRange();
            // select again
            var sel = rangy.getSelection();      

            range.selectCharacters(containerElement, 7068, 8402);
            sel.removeAllRanges();
            sel.setSingleRange(range);            
                                
            //setTimeout(function(){changeColor_sel(this.curNumber_sel)}, 2000);  
        }

        function gEBI(id) {
            return document.getElementById(id);
        }

        changeColor_sel(this.curNumber_sel)