# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Home"
      id: "home"
      location: "main#getting-started" # Supersonic module#view type navigation
    }
    {
      title: "Settings"
      id: "settings"
      location: "main#settings"
    }
    {
      title: "Help"
      id: "help"
      location: "http://google.com" # URLs are supported!
    }
  ]

  # rootView:
  #   location: "main#getting-started"

  preloads: [
    {
      id: "learn-more"
      location: "main#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "main#using-the-scanner"
    }
  ]

  drawers:
    left:
      id: "leftDrawer"
      location: "main#drawer"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"

  initialView:
    id: "initialView"
    location: "main#initial-view"
