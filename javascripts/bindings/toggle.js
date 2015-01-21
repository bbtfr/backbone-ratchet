(function() {
  App.Bindings.Toggle = (function() {
    Toggle.prototype.event = "click";

    function Toggle(attribute, selector) {
      this.attribute = attribute;
      if (selector != null) {
        this.selector = selector;
      }
    }

    Toggle.prototype.onSet = function($el, model, attr) {
      $el.toggleClass("active");
      return model.set(attr, $el.hasClass("active"));
    };

    return Toggle;

  })();

}).call(this);
