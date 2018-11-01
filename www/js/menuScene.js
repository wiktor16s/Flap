var menuBG;

var menuScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function menuScene() {
            Phaser.Scene.call(this, {
                key: 'menuScene'
            });
        },

    preload: function () {
        this.load.image('menuBG', './assets/menuBG.png');
        this.load.image('tileStart', './assets/menu/tile1.png');
        this.load.image('tileInfo', './assets/menu/tile2.png');
        this.load.image('tileAbout', './assets/menu/tile3.png');
        this.load.image('tileExit', './assets/menu/tile4.png');
    },

    create: function () {
        setVariablesToDefault();
        inMenu = true;
        window.addEventListener('resize', resize);
        resize();

        isEnded = false;
        menuBG = this.add.image(0, 0, 'menuBG').setOrigin(0, 0);

        this.tileStart = this.add.image(150, 50, 'tileStart').setOrigin(0, 0);
        this.tileInfo = this.add.image(150, 217, 'tileInfo').setOrigin(0, 0);
        this.tileAbout = this.add.image(284, 217, 'tileAbout').setOrigin(0, 0);
        this.tileExit = this.add.image(418, 50, 'tileExit').setOrigin(0, 0);
        //this.tileStart.setScale(2);
        console.log('menu');

        this.tileStart.setInteractive();
        this.tileInfo.setInteractive();
        this.tileAbout.setInteractive();

        this.tileStart.on('pointerdown', function (pointer) {
            if (inMenu == true) {
                inMenu = false;
                game.scene.start('gameScene');
            }

        });

        this.tileInfo.on('pointerdown', function (pointer) {
            if (inMenu == true) {
                inMenu = false;
                game.scene.start('howToScene');
            }

        });
        
        this.tileAbout.on('pointerdown', function (pointer) {
            if (inMenu == true) {
                inMenu = false;
                game.scene.start('infoScene');
            }

        });
        

    }

});