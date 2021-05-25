const RenJSConfig =  {
  'w': 800,
  'h': 600,
  'guiConfig': 'story/GUI.yaml',
  'storySetup': 'story/Setup.yaml',
  'storyConfig': 'story/Config.yaml',
  'storyText': [
    'story/Story.yaml'
  ],
  'name': "Quickstart",
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'loadingScreen': {
  "background": "assets/gui/loaderasset45.png",
  "loadingBar": {
    "asset": "assets/gui/loaderasset49.png",
    "position": {
      "x": 494,
      "y": 500
    },
    "size": {
      "w": 282,
      "h": 79
    }
  }
},
  'fonts': 'assets/gui/fonts.css'
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()
