browser.devtools.panels.create(
  "My Panel",                      // title
  "icons/border-48.png",                // icon
  "devtools/panel/panel.html"      // content
).then((newPanel) => {
  newPanel.onShown.addListener(initialisePanel);
  newPanel.onHidden.addListener(unInitialisePanel);
});
