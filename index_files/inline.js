document.write('<div style="display:inline-block;width:90px;height:37px;background-size:contain;" class="mfes-trustmark" data-width="90" data-height="37" data-ext="svg" data-type="102" oncontextmenu="return false;"></div>');
if(!window.TrustedSiteInline){window.TrustedSiteInline={config:[],init:function(){this.log("init");if(navigator.userAgent.match(/; MSIE [6-9]/i)){return
}if(window.jQueryTs){TrustedSiteInline.load_config()}else{if(window.jQuery===undefined){var a=document.createElement("script");
a.setAttribute("type","text/javascript");a.setAttribute("src","https://cdn.ywxi.net/static/jquery/1.12.4/jquery-1.12.4.min.js?2");
if(a.readyState){a.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){TrustedSiteInline.jquery_ready()
}}}else{a.onload=TrustedSiteInline.jquery_ready}(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(a)
}else{jQueryTs=window.jQuery;TrustedSiteInline.load_config()}}},jquery_ready:function(){jQueryTs=window.jQuery.noConflict(true);
TrustedSiteInline.load_config()},load_config:function(){TrustedSiteInline.log("load_config");var a=new String(window.location.host).replace(/^www\./,"");
var b="//s3-us-west-2.amazonaws.com/mfesecure-public/host/"+a+"/client.json?source=jsmain";jQueryTs.getJSON(b,function(c){TrustedSiteInline.config=c;
TrustedSiteInline.log("load_trustedsite");TrustedSiteInline.log(TrustedSiteInline.config);if(TrustedSiteInline.config.error){return
}if(TrustedSiteInline.config.secure&&TrustedSiteInline.config.pro){TrustedSiteInline.load_inline()}})},load_inline:function(){var a=new String(window.location.host).replace(/^www\./,"");
jQueryTs("div.mfes-trustmark:not(.loaded),div.trustedsite-trustmark:not(.loaded)").each(function(){if(jQueryTs(this).hasClass("loaded")){return
}jQueryTs(this).addClass("loaded");TrustedSiteInline.load_inline_sub(this)})},load_inline_sub:function(f){var e=new String(window.location.host).replace(/^www\./,"");
var d=parseInt(jQueryTs(f).attr("data-type"));if(!d){return}TrustedSiteInline.log("loading "+d);var a=[parseInt(jQueryTs(f).attr("data-width")),parseInt(jQueryTs(f).attr("data-height"))];
var c=jQueryTs(f).attr("data-ext");if(c!="png"&&c!="svg"){c="svg"}var g=location.protocol==="https:"?1:0;var h="mfe";if(d==101){a=TrustedSiteInline.calc_wh(a,125,55);
c="png"}else{if(d==102){a=TrustedSiteInline.calc_wh(a,90,37)}else{if(d==103){a=TrustedSiteInline.calc_wh(a,320,40)}else{if(d==202){if(TrustedSiteInline.config.brand!="ts"){return
}a=TrustedSiteInline.calc_wh(a,120,50);h="ts"}else{if(d==203){if(TrustedSiteInline.config.brand!="ts"){return}a=TrustedSiteInline.calc_wh(a,320,40);
h="ts"}else{if(d==211||d==212||d==213){if(TrustedSiteInline.config.brand!="ts"){return}if(!g){return}a=TrustedSiteInline.calc_wh(a,120,50);
h="ts"}else{return}}}}}}var b="https://cdn.ywxi.net/meter/"+e+"/"+d+"."+c;if(c=="png"){b+="?w="+(2*a[0])+"&h="+(2*a[1])}f.style.width=a[0]+"px";
f.style.height=a[1]+"px";f.style.display="inline-block";f.style.backgroundImage="url("+b+")";f.style.backgroundSize="contain";
f.style.backgroundPosition="top center";f.style.backgroundRepeat="no-repeat";f.style.cursor="pointer";f.onclick=function(){if(window.TrustedSite){window.TrustedSite.toggleverify(h)
}else{var i=h=="ts"?"https://www.trustedsite.com":"https://www.mcafeesecure.com";i+="/verify?host="+e;window.open(i)}};f.oncontextmenu=function(){return false
}},calc_wh:function(b,a,d){var c=b&&b.length==2?b[0]:0;var e=b&&b.length==2?b[1]:0;if(c&&c>0){return[c,parseInt(c/a*d)]}if(e&&e>0){return[parseInt(e/d*a),e]
}return[a,d]},log:function(b,a){if(!a){return 0}console.log("trustedsite-inline ",b);return 0},}}TrustedSiteInline.init();