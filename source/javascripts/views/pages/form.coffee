class App.Pages.Form extends Backbone.View
  template: _.loadTemplate("templates/modals/form")

  bindings:
    "#fullname-input":
      attribute: "fullname"
      event: "keyup"
    "#fullname": "fullname"
    "#search-input": "search"
    "#search": "search"
    "#description-textarea": "description"
    "#description": "description"
    "#toggle-toggle": new App.Bindings.Toggle("toggle")
    "#toggle": "toggle"
