let dbAds=[
  {
    "target-selector":[
      ".container",
      "#container",
      ".content",
      ".card__content"
    ],
    "position":"out-top", //out-top, out-bottom, in-top, in-bottom
    "data" :`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Horizontal 1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7827510955569116"
     data-ad-slot="9070430766"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    `,
    "style":`
      width: 90%;
      margin: auto;
      margin-bottom: 10px;
      margin-top: 10px;
    `
  }
];

dbAds.forEach(function(a){
  let createElDom=document.createElement("div");
  createElDom.setAttribute("style",a["style"]);
  createElDom.innerHTML=a["data"];
  let dataScript=[];
  createElDom.querySelectorAll("script").forEach(function(b){
    let createElCostom=document.createElement("script");
    createElCostom.innerHTML=b.innerHTML;
    dataScript.push(createElCostom);
    b.remove();
  });
  a["target-selector"].forEach(function(b){
    let targetEl=document.querySelector(b);
    if(targetEl){
      if(a["position"]=="out-bottom"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
      }else if(a["position"]=="out-top"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
        createElDom.after(targetEl);
      }else if(a["position"]=="in-top"){

      }else if(a["position"]=="in-top"){
        
      };
      dataScript.forEach(function(b){
        createElDom.append(b); 
      });
    }else{
      console.log("target "+a["target-selector"]+" tidak ditemukan"); 
    };
  });
});


let elImg=document.querySelectorAll("img");
elImg.forEach(function(a){
  a.setAttribute("style","max-width:100%");
  let classImg=a.getAttribute("class");
  let getSrcSet=a.getAttribute("srcset");
  if(classImg==null==false){
    a.classList.remove("lazyload");
  };
  if(getSrcSet==null==false){
    getSrcSet=getSrcSet.split(",");
    if(getSrcSet.length>1){
      a.setAttribute("src",getSrcSet);
    };
  };
});

let dataLazy=document.querySelectorAll(".lazy-image.lazy-image-udf");
dataLazy.forEach(function(a){
  let dataHref=a.getAttribute("data-src");
  if(dataHref){
    let targetLazy=a.querySelector(".loadingPlaceholder");
    let targetDiv=a.querySelector(".lazy-image__loadingPlaceholder")
    if(targetLazy){
      targetLazy.setAttribute("src",dataHref);
      targetDiv.setAttribute("class","show")
    };
  };
});
(function(){injectScript([{"attr":[{"name":"id","value":"histats_counter"}],"tag":"div","inner":""},{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"var _Hasync= _Hasync|| [];\n_Hasync.push(['Histats.start', '1,4581246,4,511,95,18,00000000']);\n_Hasync.push(['Histats.fasi', '1']);\n_Hasync.push(['Histats.track_hits', '']);\n(function() {\nvar hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;\nhs.src = ('//s10.histats.com/js15_as.js');\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);\n})();"},{"attr":[],"tag":"noscript","inner":"<a href=\"/\" target=\"_blank\"><img src=\"//sstatic1.histats.com/0.gif?4581246&amp;101\" alt=\"\" border=\"0\"></a>"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7827510955569116"},{"name":"crossorigin","value":"anonymous"}],"tag":"script","inner":""},{"attr":[{"name":"class","value":"adsbygoogle"},{"name":"style","value":"display:block"},{"name":"data-ad-format","value":"fluid"},{"name":"data-ad-layout-key","value":"-gw-3+1f-3d+2z"},{"name":"data-ad-client","value":"ca-pub-7827510955569116"},{"name":"data-ad-slot","value":"6871928248"}],"tag":"ins","inner":""},{"attr":[],"tag":"script","inner":"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n"}],{"target":"card__content"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7827510955569116"},{"name":"crossorigin","value":"anonymous"}],"tag":"script","inner":""},{"attr":[{"name":"class","value":"adsbygoogle"},{"name":"style","value":"display:block"},{"name":"data-ad-format","value":"fluid"},{"name":"data-ad-layout-key","value":"-gw-3+1f-3d+2z"},{"name":"data-ad-client","value":"ca-pub-7827510955569116"},{"name":"data-ad-slot","value":"6871928248"}],"tag":"ins","inner":""},{"attr":[],"tag":"script","inner":"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();