(function(){this.JST||(this.JST={}),this.JST["templates/modals/header"]=function(e){e||(e={});var n,a=[],t=function(e){return e&&e.ecoSafe?e:"undefined"!=typeof e&&null!=e?l(e):""},c=e.safe,l=e.escape;return n=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var n=new String(e);return n.ecoSafe=!0,n},l||(l=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){a.push('<header class="bar bar-nav">\n  <a class="icon icon-close pull-right" sref="#close-modal"></a>\n  <h1 class="title">'),a.push(t(this.title)),a.push("</h1>\n</header>\n")}).call(this)}.call(e),e.safe=c,e.escape=l,a.join("")}}).call(this);