#= require views/widgets/slider

class App.Pages.Sliders extends Backbone.View
  template: _.loadTemplate("templates/pages/sliders")

  layout:
    ".slider": App.Widgets.Slider
