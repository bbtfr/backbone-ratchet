(function(){var e={}.hasOwnProperty,o=function(o,n){function t(){this.constructor=o}for(var p in n)e.call(n,p)&&(o[p]=n[p]);return t.prototype=n.prototype,o.prototype=new t,o.__super__=n.prototype,o};App.Router=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return o(n,e),n.prototype.routes={"toggle-sidebar":"toggleSidebar","close-modal":"closeModal","pages/sliders":"openSlidersPage","pages/tableview":"openTableviewPage","pages/*path":"openPage","modals/form":"openFormModal","modals/*path":"openModal","*otherwise":"index"},n.prototype.toggleSidebar=function(){return App.main.toggleSidebar()},n.prototype.closeModal=function(){return App.main.closeModal()},n.prototype.index=function(){return this.navigate("#pages/typography",!0)},n.prototype.openSlidersPage=function(){var e;return e=new App.Pages.Sliders,App.main.openPage(e.render())},n.prototype.openTableviewPage=function(){var e,o;return e=new Backbone.Collection([new Backbone.Model({title:"Item 3"}),new Backbone.Model({title:"Item 2"}),new Backbone.Model({title:"Item 1"})]),o=new App.Pages.Tableview({collection:e}),App.main.openPage(o.render())},n.prototype.openFormModal=function(){var e,o;return e=new Backbone.Model,o=new App.Pages.Form({model:e}),App.main.openModal(o.render())},n.prototype.openPage=function(e){var o;return null==e&&(e="topography"),o=new Backbone.View({template:_.loadTemplate("templates/pages/"+e)}),App.main.openPage(o.render())},n.prototype.openModal=function(e){var o;return null==e&&(e="modal"),o=new Backbone.View({template:_.loadTemplate("templates/modals/"+e)}),App.main.openModal(o.render())},n}(Backbone.Router)}).call(this);