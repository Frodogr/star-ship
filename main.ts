controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 9 f . . . . . . . 
        . . . . . f 9 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Asteroid.destroy()
    Asteroid_2.destroy()
    Asteroid_3.destroy()
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 100)
    scene.cameraShake(4, 500)
})
let Asteroid_3: Sprite = null
let Asteroid_2: Sprite = null
let Asteroid: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("BIENVENIDOS A STAR SHIP", "APRIETA A PARA CONTINUAR Y B PARA DISPARAR")
effects.starField.startScreenEffect(info.score())
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . . . f . . . 
    . . f 2 f . . . . . . f 2 f . . 
    . f 2 1 f . . . . . . f 1 2 f . 
    . f 2 1 f . . . . . . f 1 2 f . 
    . f 2 1 f . . . . . . f 1 2 f . 
    . f 2 1 f f . . . . f f 1 2 f . 
    . f 2 1 f 1 f f f f 1 f 1 2 f . 
    . f 2 1 f 1 f 1 1 f 1 f 1 2 f . 
    . f 2 1 1 1 1 9 9 1 1 1 1 2 f . 
    . f 2 1 1 1 9 9 9 9 1 1 1 2 f . 
    . f 2 1 1 1 1 1 1 1 1 1 1 2 f . 
    . . f 2 1 1 1 f f 1 1 1 2 f . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(76, 66)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(500, function () {
    Asteroid = sprites.createProjectileFromSide(img`
        . . 2 . . . 5 . . 5 . . . 2 . . 
        . . 2 4 . 5 5 . 5 5 . . 4 2 . . 
        . . 2 4 5 5 5 e e e 5 5 4 2 . . 
        . . 2 4 5 5 e e e e e 5 4 2 . . 
        . . 2 4 5 e e f e e e e 4 2 . . 
        . 2 4 5 e e f e e f e e 5 4 2 . 
        . 2 4 5 e e e e e e f e 5 4 2 . 
        . 2 4 5 e f e e e e e e 5 4 2 . 
        . 2 4 5 e f e e f e f e 5 4 2 . 
        . 2 4 5 e e e e e e e e 5 4 2 . 
        . 2 4 4 5 5 e f f e 5 5 4 4 2 . 
        . . 2 4 4 5 e e e e 5 4 4 2 . . 
        . . . 2 4 5 5 5 5 5 5 4 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 63)
    Asteroid_2 = sprites.createProjectileFromSide(img`
        . . 2 . . . 5 . . 5 . . . 2 . . 
        . . 2 4 . 5 5 . 5 5 . . 4 2 . . 
        . . 2 4 5 5 5 e e e 5 5 4 2 . . 
        . . 2 4 5 5 e e e e e 5 4 2 . . 
        . . 2 4 5 e e f e e e e 4 2 . . 
        . 2 4 5 e e f e e f e e 5 4 2 . 
        . 2 4 5 e e e e e e f e 5 4 2 . 
        . 2 4 5 e f e e e e e e 5 4 2 . 
        . 2 4 5 e f e e f e f e 5 4 2 . 
        . 2 4 5 e e e e e e e e 5 4 2 . 
        . 2 4 4 5 5 e f f e 5 5 4 4 2 . 
        . . 2 4 4 5 e e e e 5 4 4 2 . . 
        . . . 2 4 5 5 5 5 5 5 4 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 58)
    Asteroid_3 = sprites.createProjectileFromSide(img`
        . . 2 . . . 5 . . 5 . . . 2 . . 
        . . 2 4 . 5 5 . 5 5 . . 4 2 . . 
        . . 2 4 5 5 5 e e e 5 5 4 2 . . 
        . . 2 4 5 5 e e e e e 5 4 2 . . 
        . . 2 4 5 e e f e e e e 4 2 . . 
        . 2 4 5 e e f e e f e e 5 4 2 . 
        . 2 4 5 e e e e e e f e 5 4 2 . 
        . 2 4 5 e f e e e e e e 5 4 2 . 
        . 2 4 5 e f e e f e f e 5 4 2 . 
        . 2 4 5 e e e e e e e e 5 4 2 . 
        . 2 4 4 5 5 e f f e 5 5 4 4 2 . 
        . . 2 4 4 5 e e e e 5 4 4 2 . . 
        . . . 2 4 5 5 5 5 5 5 4 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 66)
    Asteroid.x += randint(65, scene.screenWidth())
    Asteroid_2.x += randint(62, scene.screenWidth())
    Asteroid_3.x += randint(67, scene.screenWidth())
    Asteroid.setKind(SpriteKind.Enemy)
    Asteroid_2.setKind(SpriteKind.Enemy)
    Asteroid_3.setKind(SpriteKind.Enemy)
})
