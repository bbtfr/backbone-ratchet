(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Container = (function(_super) {
    __extends(Container, _super);

    function Container() {
      this.onClickSidebarActive = __bind(this.onClickSidebarActive, this);
      return Container.__super__.constructor.apply(this, arguments);
    }

    Container.prototype.template = void 0;

    Container.prototype.afterRender = function(view, reverse) {
      if (reverse == null) {
        reverse = false;
      }
      if (view != null) {
        if (this.lastPage != null) {
          this.lastPage.remove();
        }
        this.lastPage = this.currPage;
        this.currPage = new App.Views.Page().render(view);
        this.currPage.$el.appendTo(this.$el);
        if (this.lastPage != null) {
          this.lastPage.hide();
          return this.currPage.show();
        }
      }
    };

    Container.prototype.onClickSidebarActive = function(event) {
      this.toggleSidebar();
      event.stopImmediatePropagation();
      return event.preventDefault();
    };

    Container.prototype.toggleSidebar = function() {
      this.$el.toggleClass("sidebar-active");
      if (this.$el.hasClass("sidebar-active")) {
        return this.$el.on("click", this.onClickSidebarActive);
      } else {
        return this.$el.off("click", this.onClickSidebarActive);
      }
    };

    Container.prototype.openSidebar = function() {
      this.$el.addClass("sidebar-active");
      return this.$el.on("click", this.onClickSidebarActive);
    };

    Container.prototype.closeSidebar = function() {
      this.$el.removeClass("sidebar-active");
      return this.$el.off("click", this.onClickSidebarActive);
    };

    return Container;

  })(Backbone.View);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Page = (function(_super) {
    __extends(Page, _super);

    function Page() {
      return Page.__super__.constructor.apply(this, arguments);
    }

    Page.prototype.template = _.loadTemplate("templates/page");

    Page.prototype.afterRender = function(view) {
      if (view != null) {
        if (this.view != null) {
          this.view.remove();
        }
        this.view = view;
        return this.$el.html(view.$el);
      }
    };

    Page.prototype.afterRemove = function() {
      if (this.view != null) {
        return this.view.remove();
      }
    };

    Page.prototype.show = function() {
      this.$el.addClass("sliding right");
      return _.defer((function(_this) {
        return function() {
          _this.el.offsetWidth;
          return _this.$el.removeClass("right");
        };
      })(this));
    };

    Page.prototype.hide = function() {
      return _.defer((function(_this) {
        return function() {
          return _this.$el.addClass("left");
        };
      })(this));
    };

    return Page;

  })(Backbone.View);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Modal = (function(_super) {
    __extends(Modal, _super);

    function Modal() {
      return Modal.__super__.constructor.apply(this, arguments);
    }

    Modal.prototype.template = void 0;

    Modal.prototype.show = function() {
      return this.$el.addClass("active");
    };

    Modal.prototype.hide = function() {
      return this.$el.removeClass("active");
    };

    return Modal;

  })(App.Views.Page);

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Main = (function(_super) {
    __extends(Main, _super);

    function Main() {
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.template = _.loadTemplate("templates/main");

    Main.prototype.layout = {
      "container": App.Views.Container,
      "modal": App.Views.Modal
    };

    Main.prototype.events = {
      "click a[sref]": "gotoState"
    };

    Main.prototype.gotoState = function(event) {
      var url;
      url = $(event.currentTarget).attr("sref");
      Backbone.history.loadUrl(url);
      return event.preventDefault();
    };

    Main.prototype.toggleSidebar = function() {
      return this.views["container"].toggleSidebar();
    };

    Main.prototype.openSidebar = function() {
      return this.views["container"].openSidebar();
    };

    Main.prototype.closeSidebar = function() {
      return this.views["container"].closeSidebar();
    };

    Main.prototype.openModal = function(view) {
      return this.views["modal"].render(view).show();
    };

    Main.prototype.closeModal = function() {
      return this.views["modal"].hide();
    };

    Main.prototype.openPage = function(view) {
      return this.views["container"].render(view);
    };

    return Main;

  })(Backbone.View);

}).call(this);
