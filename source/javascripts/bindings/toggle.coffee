class App.Bindings.Toggle
  event: "click"

  constructor: (attribute, selector) ->
    @attribute = attribute
    @selector = selector if selector?

  onSet: ($el, model, attr) ->
    $el.toggleClass("active")
    model.set(attr, $el.hasClass("active"))
