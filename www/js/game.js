var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 376,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: [introScene, menuScene, gameScene, endScene, howToScene, infoScene]
};

game = new Phaser.Game(config);