/* share42.com | 07.05.2016 | (c) Dimox */
window.addEventListener('load',function(){var e=document.getElementsByTagName('div');for(var k=0;k<e.length;k++){if(e[k].className.indexOf('share42init')!=-1){if(e[k].getAttribute('data-url')!=-1)var u=e[k].getAttribute('data-url');if(e[k].getAttribute('data-title')!=-1)var t=e[k].getAttribute('data-title');if(e[k].getAttribute('data-image')!=-1)var i=e[k].getAttribute('data-image');if(e[k].getAttribute('data-description')!=-1)var d=e[k].getAttribute('data-description');if(e[k].getAttribute('data-path')!=-1)var f=e[k].getAttribute('data-path');if(e[k].getAttribute('data-icons-file')!=-1)var fn=e[k].getAttribute('data-icons-file');if(e[k].getAttribute('data-top1')!=-1)m1=e[k].getAttribute('data-top1');if(e[k].getAttribute('data-top2')!=-1)m2=e[k].getAttribute('data-top2');if(e[k].getAttribute('data-margin')!=-1)m3=e[k].getAttribute('data-margin');if(!f){function path(name){var sc=document.getElementsByTagName('script'),sr=new RegExp('^(.*/|)('+name+')([#?]|$)');for(var p=0,scL=sc.length;p<scL;p++){var m=String(sc[p].src).match(sr);if(m){if(m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];if(m[1].indexOf("/")==0)return m[1];b=document.getElementsByTagName('base');if(b[0]&&b[0].href)return b[0].href+m[1];else return document.location.pathname.match(/(.*[\/\\])/)[0]+m[1];}}return null;}f=path('share42.js');}if(!u)u=location.href;if(!t)t=document.title;if(!fn)fn='icons.png';function desc(){var meta=document.getElementsByTagName('meta');for(var m=0;m<meta.length;m++){if(meta[m].name.toLowerCase()=='description'){return meta[m].content;}}return'';}if(!d)d=desc();if(!m1)m1=150;if(!m2)m2=20;if(!m3)m3=0;u=encodeURIComponent(u);t=encodeURIComponent(t);t=t.replace(/\'/g,'%27');i=encodeURIComponent(i);d=encodeURIComponent(d);d=d.replace(/\'/g,'%27');var fbQuery='u='+u;if(i!='null'&&i!='')fbQuery='s=100&p[url]='+u+'&p[title]='+t+'&p[summary]='+d+'&p[images][0]='+i;var vkImage='';if(i!='null'&&i!='')vkImage='&image='+i;var s=new Array('"#" data-count="fb" onclick="window.open(\'//www.facebook.com/sharer/sharer.php?u='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"','"#" data-count="vk" onclick="window.open(\'//vk.com/share.php?url='+u+'&title='+t+vkImage+'&description='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"','"#" data-count="gplus" onclick="window.open(\'//plus.google.com/share?url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Google+"','"#" data-count="pin" onclick="window.open(\'//pinterest.com/pin/create/button/?url='+u+'&media='+i+'&description='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=600, height=300, toolbar=0, status=0\');return false" title="Добавить в Pinterest"','"#" data-count="twi" onclick="window.open(\'//twitter.com/intent/tweet?text='+t+'&url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"','"//www.livejournal.com/update.bml?event='+u+'&subject='+t+'" title="Опубликовать в LiveJournal"','"#" data-count="mail" onclick="window.open(\'//connect.mail.ru/share?url='+u+'&title='+t+'&description='+d+'&imageurl='+i+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Моем Мире@Mail.Ru"','"#" onclick="window.open(\'//www.tumblr.com/share?v=3&u='+u+'&t='+t+'&s='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=450, height=440, toolbar=0, status=0\');return false" title="Добавить в Tumblr"');var l='';for(j=0;j<s.length;j++)l+='<a rel="nofollow" style="display:block;width:32px;height:32px;margin:0 0 6px;padding:0;outline:none;background:url('+f+fn+') -'+32*j+'px 0 no-repeat" href='+s[j]+' target="_blank"></a>';e[k].innerHTML='<span id="share42" style="position:fixed;z-index:9999;margin-left:'+m3+'px">'+l+'</span>';var p=document.getElementById('share42');function m(){var top=Math.max(document.body.scrollTop,document.documentElement.scrollTop);if(top+(m2*1)<m1){p.style.top=m1-top+'px';}else{p.style.top=m2+'px';}}m();window.onscroll=m;}}},false);