(function(){var t={}.hasOwnProperty,e=function(e,o){function n(){this.constructor=e}for(var r in o)t.call(o,r)&&(e[r]=o[r]);return n.prototype=o.prototype,e.prototype=new n,e.__super__=o.prototype,e};App.Pages.Form=function(t){function o(){return o.__super__.constructor.apply(this,arguments)}return e(o,t),o.prototype.template=_.loadTemplate("templates/modals/form"),o.prototype.bindings={"#fullname-input":{attribute:"fullname",event:"keyup"},"#fullname":"fullname","#search-input":"search","#search":"search","#description-textarea":"description","#description":"description","#toggle-toggle":new App.Bindings.Toggle("toggle"),"#toggle":"toggle"},o}(Backbone.View)}).call(this);