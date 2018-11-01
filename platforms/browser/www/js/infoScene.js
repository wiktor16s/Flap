var infoBG;

var infoScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function infoScene() {
            Phaser.Scene.call(this, {
                key: 'infoScene'
            });
        },

    preload: function () {
        this.load.image('infoBG', './assets/menu/infoBG.png');
    },

    create: function () {
        window.addEventListener('resize', resize);
        resize();

        infoBG = this.add.image(0, 0, 'infoBG').setOrigin(0, 0);

        console.log('info');


        this.input.once('pointerdown', function (event) {

            console.log('From SceneC to SceneA');

            this.scene.start('menuScene');

        }, this);

    }

});