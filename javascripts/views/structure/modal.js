(function(){var t={}.hasOwnProperty,e=function(e,r){function o(){this.constructor=e}for(var n in r)t.call(r,n)&&(e[n]=r[n]);return o.prototype=r.prototype,e.prototype=new o,e.__super__=r.prototype,e};App.Views.Page=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return e(r,t),r.prototype.template=_.loadTemplate("templates/page"),r.prototype.afterRender=function(t){return null!=t?(null!=this.view&&this.view.remove(),this.view=t,this.$el.html(t.$el)):void 0},r.prototype.afterRemove=function(){return null!=this.view?this.view.remove():void 0},r.prototype.show=function(){return this.$el.addClass("sliding right"),_.defer(function(t){return function(){return t.el.offsetWidth,t.$el.removeClass("right")}}(this))},r.prototype.hide=function(){return _.defer(function(t){return function(){return t.$el.addClass("left")}}(this))},r}(Backbone.View)}).call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function o(){this.constructor=e}for(var n in r)t.call(r,n)&&(e[n]=r[n]);return o.prototype=r.prototype,e.prototype=new o,e.__super__=r.prototype,e};App.Views.Modal=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return e(r,t),r.prototype.template=void 0,r.prototype.show=function(){return this.$el.addClass("active")},r.prototype.hide=function(){return this.$el.removeClass("active")},r}(App.Views.Page)}.call(this);