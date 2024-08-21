controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    info.changeScoreBy(5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sine, 3201, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level8`)
})
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
