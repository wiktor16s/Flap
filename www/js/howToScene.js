var howToBG;

var howToScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function howToScene() {
            Phaser.Scene.call(this, {
                key: 'howToScene'
            });
        },

    preload: function () {
        this.load.image('howToBG', './assets/menu/howToBG.png');
    },

    create: function () {
        window.addEventListener('resize', resize);
        resize();

        howToBG = this.add.image(0, 0, 'howToBG').setOrigin(0, 0);

        console.log('howTo');


        this.input.once('pointerdown', function (event) {

            console.log('From SceneC to SceneA');

            this.scene.start('menuScene');

        }, this);

    }

});